import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
  Paper,
  Typography,
  TextField,
  Button
} from 'material-ui'

class LoginForm extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    window.$user.post('/login', this.state)
      .then(response => {
        console.log('login', response)
        localStorage.setItem('token', response.data.token)
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <Paper className="content" align="center">
          <Typography className="page-title" variant="headline" align="center">
            Login
          </Typography>
          <form onSubmit={this.handleSubmit}>
            <div>
              <TextField 
                name="email"
                label="Email"
                value={this.state.email}
                onChange={this.handleChange}
                margin="normal"
              />
            </div>
            <div>
            <TextField 
              name="password"
              label="Password"
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
              margin="normal"
            />
            </div>
            <div className="content">
              <Link to="/register" className="nav">
                Dont have an account yet? Register
              </Link>
            </div>
            <Button type="submit" variant="raised" color="primary">
              Submit
            </Button>
          </form>
        </Paper>
      </div>
    )
  }
}

export default LoginForm;