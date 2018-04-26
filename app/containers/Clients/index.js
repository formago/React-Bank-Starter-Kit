/* eslint-disable */

import React from 'react';
import { Table, Icon, Switch, Radio, Form, Divider, Card, Button } from 'antd';

import PropTypes from 'prop-types';
import { compose } from 'redux';
import { Link } from 'react-router-dom';

import injectSaga from 'utils/injectSaga';

import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import { connect } from 'react-redux';
import { getGridItems, getGridColumns } from './actions';
import reducer from './reducer';
import saga from './saga';
import { makeSource } from './selectors';

import TableComponent from 'components/TableComponent';

import { Filter } from 'components/Clients/Filter';

import getClientsModel from './clientsModel';

class Clients extends React.Component {
  // eslint-disable-line react/prefer-stateless-function  

  constructor() {
    super()
  }

  componentWillMount() {
    this.getGridData();
  }

  getGridData() {
    this.props.dispatch(getGridItems());
  }

  render() {
    return (
      <div>
        <h1>
          Клиенты
        </h1>

        <Card title={<Filter />} extra={<a href="#">More</a>}>
          <TableComponent columns={this.props.columns} gridSource={this.props.gridSource} />
        </Card>

      </div>
    );
  }
}

Clients.propTypes = {
  columns: PropTypes.array,
  gridSource: PropTypes.array,
  dispatch: PropTypes.func
};

export function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const mapStateToProps = createStructuredSelector({
  gridSource: makeSource(),
  columns: getClientsModel,
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'clients', reducer });
const withSaga = injectSaga({ key: 'clients', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Clients);