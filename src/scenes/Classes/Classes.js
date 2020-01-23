import React, { Component } from 'react'
import ReactTable from 'react-table-6'

import { ClassAPI } from '../../services/api'

import styles from './styles.module.css'

const columns = [
  {
    Header: 'No.',
    accessor: 'id',
    Cell: row => (
      <div className={styles.tableCell}>{row.value}</div>
    ),
    width: 80
  },
  {
    Header: () => (
      <div className={styles.nameHeader}>Name</div>
    ),
    accessor: 'classTitle',
    Cell: row => (
      <div className={styles.nameColumn}>{row.value}</div>
    )
  },
  {
    Header: 'Start',
    accessor: 'startDate',
    Cell: row => (
      <div className={styles.tableCell}>{row.value}</div>
    )
  },
  {
    Header: 'End',
    accessor: 'endDate',
    Cell: row => (
      <div className={styles.tableCell}>{row.value}</div>
    )
  },
  {
    Header: 'Price',
    accessor: 'cost',
    Cell: row => (
      <div className={styles.tableCell}>{row.value}</div>
    )
  },
  {
    Header: 'People limit',
    accessor: 'peopleLimit',
    Cell: row => (
      <div className={styles.tableCell}>{row.value}</div>
    )
  }
]

class Classes extends Component {
  state = {
    classes: [],
    loading: true
  }

  componentDidMount() {
    ClassAPI.all()
      .then(res => {
        return this.setState({
          classes: res.data,
          loading: false
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    if (this.state.loading) {
      return (
        <div className={styles.loading}>
          <p>Loading...</p>
        </div>
      )
    }

    return (
      <ReactTable
        data={this.state.classes}
        columns={columns}
        className={styles.classesTable}
        defaultPageSize={25}
      />
    )
  }
}

export default Classes
