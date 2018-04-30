import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';
import injectSaga from 'utils/injectSaga';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import { connect } from 'react-redux';
import { getMenuItems, setCurrentMenuItem } from './actions';
import reducer from './reducer';
import saga from './saga';
import { makeSelectSource, makeMenuId } from './selectors';

const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;

class CabinetMenu extends React.Component {


  constructor(props) {
    console.log("constructor");
    super(props)
    // this.menuOnSelect = this.menuOnSelect.bind(this)
  }

  componentWillMount() {
    this.getMenu();
  }

  getMenu() {
    this.props.dispatch(getMenuItems()); // don't do it if we have loaded menu before, need check!
  }

  menuOnSelect(e) {
    this.props.dispatch(setCurrentMenuItem(e.key));
  }

  call = function (it) {
    if (it.childList && it.childList.length === 0) {
      return (<MenuItem key={it.menuId}>
        <Icon type="user" />
        <span>{it.menuName}</span>
        <Link to={"/Cabinet/" + it.url}> </Link>
      </MenuItem>);
    }
    return (<SubMenu key={it.menuId} title={<span><Icon type="link" /><span>{it.menuName}</span></span>}>
      {it.childList.map((subit) => (this.call(subit)))}
    </SubMenu>);
  }

  // don't work because component dont link with source and dont update himself
  // menuItems = this.props.source.map((it) => this.call(it));

  render() {
    console.log("render");
    return (
      <Menu theme="dark" selectedKeys={[this.props.menuId]} defaultSelectedKeys={['2443']} mode="inline" className="cabinet-menu">
        {/* {this.menuItems} */}
        {this.props.source.map((it) => this.call(it))}
      </Menu>
    );
  }
}

CabinetMenu.propTypes = {
  menuId: PropTypes.string,
  source: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  dispatch: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  console.log("mDispatchToProps");
  return {
    dispatch,
  };
}

const mapStateToProps = createStructuredSelector({
  source: makeSelectSource(),
  menuId: makeMenuId()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'cabinetMenu', reducer });
const withSaga = injectSaga({ key: 'cabinetMenu', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(CabinetMenu);
