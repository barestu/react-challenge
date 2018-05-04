import React, { Component } from 'react'
import swal from 'sweetalert'
import {
  Paper,
  Typography,
  TextField,
  Button
} from 'material-ui'

class Register extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
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
    window.$user.post('/register', this.state)
      .then(response => {
        swal({
          title: 'Register success!',
          text: 'You can now continue to login',
          icon: 'success',
          buttons: true
        })
          .then(successs => {
            if (successs) {
              this.props.history.push('/')
            }
          })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <Paper className="content" align="center">
          <Typography className="page-title" variant="display2" align="center">
            Register
          </Typography>
          <form onSubmit={this.handleSubmit}>
            <div>
              <TextField 
                name="username"
                label="Name"
                value={this.state.username}
                onChange={this.handleChange}
                margin="normal"
              />
            </div>
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
            <Button type="submit" variant="raised" color="primary">
              Submit
            </Button>
          </form>
        </Paper>
      </div>
    );
  }
}

export default Register;