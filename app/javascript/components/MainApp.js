import React from "react"
import PropTypes from "prop-types"
import {BrowserRouter, Route, Link } from 'react-router-dom'
import Home from './Home'

class MainApp extends React.Component {
  render () {
    const {
      logged_in,
      sign_in_route,
      sign_out_route
    } = this.props

    return (
      <React.Fragment>
      <BrowserRouter>
      <Route path="/" render={(routeProps)=> {
          return(
          <Home {...routeProps} sign_in_route={this.props.sign_in_route} />)}
      }></Route>
        {logged_in &&
          <div>
            <a href={sign_out_route}>Sign Out</a>
          </div>
        }
        {!logged_in &&
          <div>

          </div>
        }
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default MainApp
