import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';
import injectSaga from 'utils/injectSaga';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import { connect } from 'react-redux';
import { getMenuItems } from './actions';
import reducer from './reducer';
import saga from './saga';
import { makeSelectSource } from './selectors';

const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;

class CabinetMenu extends React.Component {

  componentDidMount() {
    this.getMenu();
  }

  getMenu() {
    this.props.dispatch(getMenuItems()); // don't do it if we load menu before, need check!
  }

  call = function (it) {
    if (it.childList.length === 0) {
      return (<MenuItem key={it.menuId}>
        <Icon type={it.icon} />
        <span>{it.menuName}</span>
        <Link to={it.url}></Link>
      </MenuItem>);
    }
    return (<SubMenu key={it.menuId} title={<span><Icon type={it.icon} /><span>{it.menuName}</span></span>}>
      {it.childList.map((subit) => (this.call(subit)))}
    </SubMenu>);
  }

  // don't work because component dont link with source and dont update himself
  // menuItems = this.props.source.map((it) => this.call(it));

  render() {
    return (
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        {/* {this.menuItems} */}
        {this.props.source.map((it) => this.call(it))}
      </Menu>
    );
  }
}

CabinetMenu.propTypes = {
  source: PropTypes.object,
  dispatch: React.PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const mapStateToProps = createStructuredSelector({
  source: makeSelectSource(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'cabinetMenu', reducer });
const withSaga = injectSaga({ key: 'cabinetMenu', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(CabinetMenu);
