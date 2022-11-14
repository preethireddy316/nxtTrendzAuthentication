// Write your JS code here
import {Component} from 'react'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    errorMsg: '',
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    console.log(response)
    const data = await response.json()
    if (response.ok) {
      this.onSubmitSuccess()
    } else {
      this.setState({errorMsg: data.error_msg})
    }
    console.log(response)
  }

  onUserNameChange = event => {
    this.setState({username: event.target.value})
  }

  onPasswordChange = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {username, password, errorMsg} = this.state
    return (
      <>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
        />
        <form onSubmit={this.onSubmitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
          />
          <label htmlFor="username">USERNAME</label>
          <input
            onChange={this.onUserNameChange}
            type="text"
            id="username"
            placeholder="Username"
            value={username}
          />
          <label htmlFor="password">PASSWORD</label>
          <input
            onChange={this.onPasswordChange}
            type="password"
            id="password"
            placeholder="password"
            value={password}
          />
          <button type="submit">Login</button>
          <p>* {errorMsg}</p>
        </form>
      </>
    )
  }
}
export default LoginForm
