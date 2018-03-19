/* eslint-disable */

import React from 'react';
import { Table, Icon, Switch, Radio, Form, Divider } from 'antd';

import PropTypes from 'prop-types';
import { compose } from 'redux';
import { Link } from 'react-router-dom';

import injectSaga from 'utils/injectSaga';

import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import { connect } from 'react-redux';
import { getGridItems } from './actions';
import reducer from './reducer';
import saga from './saga';
import { makeSource } from './selectors';

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const FormItem = Form.Item;

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: 150,
    render: (text) => <a href="#">{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: 70,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Action',
    key: 'action',
    width: 360,
    render: (text, record) => (
      <span>
        <a href="#">Action 一 {record.name}</a>
        <Divider type="vertical" />
        <a href="#">Delete</a>
        <Divider type="vertical" />
        <a href="#" className="ant-dropdown-link">
          More actions <Icon type="down" />
        </a>
      </span>
    ),
  },
];
const expandedRowRender = (record) => <p>{record.description}</p>;
const title = () => 'Here is title';
const showHeader = true;
const footer = () => 'Here is footer';
const scroll = { y: 240 };

class TableDemo extends React.Component {   // eslint-disable-line
  state = {
    bordered: false,
    loading: false,
    pagination: true,
    size: 'default',
    expandedRowRender,
    title,
    showHeader,
    footer,
    rowSelection: {},
    scroll: undefined,
  };

  handleToggle = (prop) => (enable) => {
    this.setState({ [prop]: enable });
    //throw new Error('Error from Grid');
  };

  handleSizeChange = (e) => {
    this.setState({ size: e.target.value });
  };

  handleExpandChange = (enable) => {
    this.setState({
      expandedRowRender: enable ? expandedRowRender : undefined,
    });
  };

  handleTitleChange = (enable) => {
    this.setState({ title: enable ? title : undefined });
  };

  handleHeaderChange = (enable) => {
    this.setState({ showHeader: enable ? showHeader : false });
  };

  handleFooterChange = (enable) => {
    this.setState({ footer: enable ? footer : undefined });
  };

  handleRowSelectionChange = (enable) => {
    this.setState({ rowSelection: enable ? {} : undefined });
  };

  handleScollChange = (enable) => {
    this.setState({ scroll: enable ? scroll : undefined });
  };

  componentDidMount() {
    this.getGridData();
  }

  getGridData(){
    this.props.dispatch(getGridItems()); // don't do it if we have loaded menu before, need check!
  }

  render() {
    const state = this.state;
    return (
      <div>
        <div className="components-table-demo-control-bar">
          <Form layout="inline">
            <FormItem label="Bordered">
              <Switch
                checked={state.bordered}
                onChange={this.handleToggle('bordered')}
              />
            </FormItem>
            <FormItem label="loading">
              <Switch
                checked={state.loading}
                onChange={this.handleToggle('loading')}
              />
            </FormItem>
            <FormItem label="Pagination">
              <Switch
                checked={state.pagination}
                onChange={this.handleToggle('pagination')}
              />
            </FormItem>
            <FormItem label="Title">
              <Switch
                checked={!!state.title}
                onChange={this.handleTitleChange}
              />
            </FormItem>
            <FormItem label="Column Header">
              <Switch
                checked={!!state.showHeader}
                onChange={this.handleHeaderChange}
              />
            </FormItem>
            <FormItem label="Footer">
              <Switch
                checked={!!state.footer}
                onChange={this.handleFooterChange}
              />
            </FormItem>
            <FormItem label="Expandable">
              <Switch
                checked={!!state.expandedRowRender}
                onChange={this.handleExpandChange}
              />
            </FormItem>
            <FormItem label="Checkbox">
              <Switch
                checked={!!state.rowSelection}
                onChange={this.handleRowSelectionChange}
              />
            </FormItem>
            <FormItem label="Fixed Header">
              <Switch
                checked={!!state.scroll}
                onChange={this.handleScollChange}
              />
            </FormItem>
            <FormItem label="Size">
              <RadioGroup
                size="default"
                value={state.size}
                onChange={this.handleSizeChange}
              >
                <RadioButton value="default">Default</RadioButton>
                <RadioButton value="middle">Middle</RadioButton>
                <RadioButton value="small">Small</RadioButton>
              </RadioGroup>
            </FormItem>
          </Form>
        </div>
        <Table {...this.state} columns={columns} dataSource={this.props.gridSource} />
      </div>
    );
  }
}


TableDemo.propTypes = {
  gridSource: PropTypes.array,
  dispatch: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const mapStateToProps = createStructuredSelector({
  gridSource: makeSource(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'grid', reducer });
const withSaga = injectSaga({ key: 'grid', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(TableDemo);
