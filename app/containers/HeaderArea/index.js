
import { Layout, Popover, Button, Row, Col } from "antd";
import { Link, Switch, Route } from "react-router-dom";
import React from "react";
const { Header, Content, Footer, Sider } = Layout;
import { logout } from '../LoginForm/actions'


export default class HeaderArea extends React.Component {

    constructor(props) {
        super(props);
        this._logout = this._logout.bind(this)
    }
    render() {     
        return (
            <Header>
                <div style={{ textAlign: "right" }}>
                    <Popover placement="bottom" title="UserName" trigger="click">
                        <Button type="ghost">UserName</Button>
                    </Popover>

                    <Button
                        style={{ marginLeft: 20 }}
                        htmlType="button"
                        className="login-form-button"
                        onClick={this._logout}        >
                        Выход
          </Button>
                </div>
            </Header>
        )
    }

    _logout() {
        console.log(this.props);
        store.dispatch(logout())
    }
}

// export function mapDispatchToProps(dispatch) {
//     return {
//       dispatch,
//     };
//   }

//   const mapStateToProps = createStructuredSelector({
//     gridSource: makeSource(),
//     columns: getClientsModel,
//   });

//   const withConnect = connect(mapStateToProps, mapDispatchToProps);
//   const withReducer = injectReducer({ key: 'clients', reducer });
//   const withSaga = injectSaga({ key: 'clients', saga });

//   export default compose(
//     withReducer,
//     withSaga,
//     withConnect,
//   )(Clients);

