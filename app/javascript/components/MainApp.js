import React from "react"
import PropTypes from "prop-types"
import {BrowserRouter,
        Route,
        Link,
        Switch
} from 'react-router-dom'
import Home from './Home'
import Event from './Event'
import NewEvent from "./NewEvent"

class MainApp extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      events: [],
      success: false
    }
    this.getEvent()
  }
  
  getEvent = () => {
    /* global fetch */
    fetch("../events")
    .then(response => {
      return response.json()
    })
    .then(events => {
      this.setState({events})
    })
  }
  
  createEvent = (evt) => {
    return fetch('../events',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({event: evt})
    })
    .then(resp => {
      if(resp === 201){
        this.getEvent()
      }
    })
  }
  
  render () {
    const {
      logged_in,
      sign_in_route,
      sign_out_route,
      Events
    } = this.props

    return (
      <React.Fragment>
        <BrowserRouter>
          <Switch>
          
                
          <Route path = '/Event' render = {(routeProps) => {
            return(
              <Event {...routeProps} events={this.state.events} createEvent = {this.createEvent} />
              )
            }} 
          />
          
          <Route path = '/NewEvent' render = {(routeProps) => {
            return(
              <NewEvent {...routeProps} createEvent = {this.createEvent} success = {this.state.success} />
              )
            }} 
          />
                      
          <Route exact path="/" render={(routeProps)=> {
              return(
                <Home {...routeProps} sign_in_route={this.props.sign_in_route} />
              )
            }} 
          />
                
                
                  {logged_in &&
                    <div>
                      <a href={sign_out_route}>Sign Out</a>
              
                    </div>
                  }
                  
                
                
            {!logged_in &&
              <div>
    
              </div>
            }
            
            
            </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default MainApp
