import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'
import Ticket from './components/Ticket'
import userProfile from './components/userProfile'
import ShowTickets from './components/TicketShow'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/addTicket" component={Ticket} />
            <Route exact path="/tickets" component={ShowTickets} />
            <Route exact path="/userProfile" component={userProfile} />
          </div>
      </Router>
    )
  }
}

export default App