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
import EditEvent from "./EditEvent"
import MyMap from "./LeafletMap"
import { Nav, Navbar, NavItem, NavLink, NavbarBrand, Button, ListGroup, ListGroupItem, Jumbotron, Container, Form, FormGroup, Input, Label } from 'reactstrap'

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
    return fetch("../events")
    .then(resp => {
      return resp.json()
    })
    .then(events => {
      this.setState({events})
        
    })
  }

  createEvent = (evt) => {
    return fetch('/events',{
      method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({event: evt})
        })
        .then(resp => {
          if(resp.status === 201){
            this.getEvent()
            console.log("created")
          }
    })
  }
  
  deleteEvent = (id) => {
    return fetch(`/events/${id}`, {
      method: 'DELETE'
    })
    .then((resp) => {
      if(resp.status === 200){
        this.getEvent()
      }
    })
  }
  
  editEvent = (id, evt) => {
    console.log('it got here')
    return fetch(`/events/${id}`, {
      method: 'PATCH',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({event: evt})
    })
    .then(resp => {
      if(resp.status === 200){
        this.getEvent()
      }
    })
  }
  
  showEvent = id => {
    return fetch(`/events/${id}`).then(response => {
      return response.json();
    });
  };
     
  
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
        
          <Navbar color = 'light'>
            <NavbarBrand href="/"><h1>Get Down</h1></NavbarBrand>
              <Nav>
                <NavItem>
                  <NavLink href ="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href ="/Event">Events</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href ="/LeaftletMap">Map</NavLink>
                </NavItem>
                {!logged_in &&
                  <NavItem>
                    <NavLink href="/users/sign_up">Sign Up</NavLink>
                  </NavItem>
                }
                {!logged_in &&
                  <NavItem>
                    <NavLink href={sign_in_route}>Log In</NavLink>
                  </NavItem>
                }
                {logged_in && 
                  <NavItem>
                    <NavLink href={sign_out_route}>Log Out</NavLink>
                  </NavItem>
                }
              </Nav>
          </Navbar>
        
          <Switch>
          
          
          
          <Route path = '/leafletmap' component = {MyMap} />
                
          <Route path = '/Event' render = {(routeProps) => {
            return(
              <Event {...routeProps} events={this.state.events} deleteEvent = {this.deleteEvent} editEvent = {this.editEvent}  createEvent = {this.createEvent} sign_in_route={this.props.sign_in_route} sign_out_route={this.props.sign_out_route}/>
              )
            }} 
          />
          
          <Route path = '/EditEvent/:id' render = {(routeProps) => {
            return(
              <EditEvent {...routeProps} events={this.state.events}  editEvent = {this.editEvent} showEvent = {this.showEvent}  sign_in_route={this.props.sign_in_route} sign_out_route={this.props.sign_out_route}/>
              )
            }} 
          />
          
          <Route path = '/NewEvent' render = {(routeProps) => {
            return(
              <NewEvent {...routeProps} createEvent = {this.createEvent} success = {this.state.success} sign_in_route={this.props.sign_in_route} sign_out_route={this.props.sign_out_route}/>
              )
            }} 
          />
                      
          <Route exact path="/" render={(routeProps)=> {
              return(
                <Home {...routeProps} sign_in_route={this.props.sign_in_route} sign_out_route={this.props.sign_out_route}/>
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
