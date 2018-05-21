/* eslint-disable */

import React from 'react';
import { Table, Icon, Switch, Radio, Form, Divider } from 'antd';

import PropTypes from 'prop-types';
import { compose } from 'redux';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const FormItem = Form.Item;

const expandedRowRender = (record) => <p>{record.description}</p>;
const title = () => 'Here is title';
const showHeader = true;
const footer = () => 'Here is footer';
const scroll = { y: 240 };

class TableComponent extends React.Component {   // eslint-disable-line
  state = {
    bordered: false,
    loading: false,
    pagination: true,
    size: 'default',
    expandedRowRender:false,
    title:false,
    showHeader,
    footer: false,
    rowSelection: {},
    scroll: undefined,
  };

  handleToggle = (prop) => (enable) => {
    this.setState({ [prop]: enable });
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

  render() {
    const state = this.state;
    return (
      <div>
        {/* <div className="components-table-demo-control-bar">
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
        </div> */}
        <Table {...this.state} columns={this.props.columns} dataSource={this.props.gridSource} />
      </div>
    );
  }
}


TableComponent.propTypes = {
  columns : PropTypes.array,
  gridSource: PropTypes.array,
  dispatch: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

// const mapStateToProps = createStructuredSelector({
//   gridSource: makeSource(),
// });

const withConnect = connect(null, mapDispatchToProps);
// const withReducer = injectReducer({ key: 'grid', reducer });
// const withSaga = injectSaga({ key: 'grid', saga });

export default compose(
  // withReducer,
  // withSaga,
  withConnect,
)(TableComponent);