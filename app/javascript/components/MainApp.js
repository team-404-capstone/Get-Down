import React from "react"
import PropTypes from "prop-types"
import {BrowserRouter, Route, Link } from 'react-router-dom'
import Home from './Home'
import Events from './Events'

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
                } />
                  {logged_in &&
                    <div>
                      <a href={sign_out_route}>Sign Out</a>
                    </div>
                  }
                  
                
                
            {!logged_in &&
              <div>
    
              </div>
            }
            
            <Route path = './Events' component = {Events} />
            
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default MainApp
