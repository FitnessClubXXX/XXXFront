import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import ReactTable from 'react-table-6'

import { UserAPI, CarnetAPI } from '../../services/api'
import LogInUser from './components/LogInUser/LogInUser'
import UserInfo from './components/UserInfo/UserInfo'

const columns = [
  {
    Header: 'No.',
    accessor: 'id',
    width: 80
  },
  {
    Header: 'Type',
    accessor: 'type',
  },
  {
    Header: 'Start',
    accessor: 'startDate',
  },
  {
    Header: 'End',
    accessor: 'endDate',
  },
  {
    Header: 'Due',
    accessor: 'due',
  }
]

class Account extends Component {
  state = {
    carnets: [],
    userId: '',
    email: '',
    password: '',
    name: '',
    surname: '',
    logInUser: false,
    showCarnetsBtnDisabled: false
  }

  _fetchUserInfo = (userId) => {
    UserAPI.single(userId)
      .then(res => {
        return this.setState({
          name: res.data.name,
          surname: res.data.surname,
          email: res.data.mail
        })
      })
      .catch(err => console.log(err))
  }

  componentDidMount() {
    const userId = sessionStorage.getItem('userId')
    if (userId) {
      this.setState({ userId })
      this._fetchUserInfo(userId)
    } else {
      this.setState({ logInUser: true })
    }
  }

  _logInUser = () => {
    const { email, password } = this.state
    if (email === '') {
      return alert('E-mail cannot be empty!')
    }
    if (password === '') {
      return alert('Password cannot be empty!')
    }

    UserAPI.login({
      mail: email,
      password
    })
      .then(res => {
        if (res.data.mail) {
          sessionStorage.setItem('userId', res.data.mail)
          return this.setState({ logInUser: false })
        }
      })
      .catch(err => console.log(err))
    alert('Invalid email or passsword')
  }

  _handleEmailChange = (e) => {
    this.setState({ email: e.target.value })
  }

  _handlePasswordChange = (e) => {
    this.setState({ password: e.target.value })
  }

  _showCarnets = async () => {
    this.setState({ showCarnetsBtnDisabled: true })
    // const { data } = await CarnetAPI.all()
    CarnetAPI.userCarnets(this.state.userId)
      .then(res => {
        if (res.data) {
          return this.setState({ carnets: res.data })
        }
        this.setState({ showCarnetsBtnDisabled: false })
      })
      .catch(err => console.log(err))
  }

  render() {
    const { carnets } = this.state

    if (this.state.logInUser) {
      return (
        <LogInUser
          email={this.state.email}
          onEmailChanged={this._handleEmailChange}
          password={this.state.password}
          onPasswordChanged={this._handlePasswordChange}
          onUserLogIn={this._logInUser}
        />
      )
    }

    return (
      <>
        <UserInfo
          firstName={this.state.name}
          lastName={this.state.surname}
          email={this.state.email}
          onShowCarnetsClicked={this._showCarnets}
          btnDisabled={this.state.showCarnetsBtnDisabled}
        />
        {carnets.length !== 0 &&
          <Grid container style={{ marginTop: '2rem' }}>
            <Grid item xs={1} />
            <Grid item xs={10}>
              <ReactTable
                data={carnets}
                columns={columns}
              />
            </Grid>
          </Grid>
        }
      </>
    )
  }
}

export default Account
