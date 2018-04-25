

import React from 'react';
import { Icon, Radio, Form, Divider, Card, Button, Row, Col, Modal } from 'antd';


export class Filter extends React.Component {
    state = { visible: false }
    showModal = () => {
        this.setState({
            visible: true,
        });
    }
    handleOk = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }
    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }
    render() {
        return <div>
            <Row>
                <Col span={2}>Фильтр</Col>
                <Col span={2}><Button onClick={this.showModal}>Изменить</Button></Col>
            </Row>
            <Modal
                title="Basic Modal"
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </div>
    }
}