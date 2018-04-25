
import { Layout, Popover, Button, Row, Col } from "antd";


import { Link, Switch, Route } from "react-router-dom";

import React from "react";

const { Header, Content, Footer, Sider } = Layout;


export const HeaderArea = () =>
    <Header>
        <div style={{ textAlign: "right" }}>
            <Popover placement="bottom" title="UserName" trigger="click">
                <Button type="ghost">UserName</Button>
            </Popover>
            <Link to="/" style={{ marginLeft: 20 }}>
                Logout
  </Link>
        </div>
    </Header>