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
import ViewEvent from "./ViewEvent"
import EditEvent from "./EditEvent"
import MyMap from "./LeafletMap"
import { Nav, Navbar, NavItem, NavLink, NavbarBrand, Button, ListGroup, ListGroupItem, Jumbotron, Container, Form, FormGroup, Input, Label } from 'reactstrap'

class MainApp extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      events: [],
      attends: [],
      success: false
    }
    this.getEvent()
    
  }

                  // =========================================== EVENT METHODS

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
  
  showEvent = (id) => {
    return fetch(`/events/${id}`)
      .then(response => {
      return response.json();
    });
  };
  
  viewEvent = (id) => {
    return fetch(`/events/${id}`)
      .then(resp => {
        if(resp.status === 201){
          this.getEvent()
        }
      })
    }
    
               // ========================================== ATTEND METHODS  
   getAttend = (id) => {
      return fetch(`../attends?event_id=${id}`)
      .then(resp => {
        return resp.json()
      })
      .then(attends => {
        this.setState({attends})
      })
    }
  
    createAttend = (id) => {
      return fetch('/attends',{
        method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({attend: {event_id: id}})
          })
          .then(resp => {
            if(resp.status === 201){
              this.getAttend(id)
            }
      })
    }
    
    deleteAttend = (id) => {
      return fetch(`/attends/${id}`, {
        method: 'DELETE'
      })
      .then((resp) => {
        if(resp.status === 200){
          this.getAttend()
          window.location.href = '/Event'
        }
      })
    }
       
 
  render () {
    const {
      logged_in,
      sign_in_route,
      sign_out_route,
      current_user,
      current_user_id,
      Events,
      createAttend,
      deleteAttend,
      getAttend
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
                  <NavLink href ="/LeafletMap">Map</NavLink>
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
            
          <Route path = '/ViewEvent/:id' 
            render = {(routeProps) => {
              return(
                <ViewEvent {...routeProps}
                  events={this.state.events}
                  attends={this.state.attends}
                  showEvent={this.showEvent} 
                  createAttend={this.createAttend} 
                  deleteAttend={this.deleteAttend} 
                  viewEvent={this.viewEvent}
                  getAttend={this.getAttend}/>
              )
            }}/>

          <Route path = '/leafletmap' 
            render = {(routeProps) => {
            return(
              <MyMap events={this.state.events}/>
            )
           }
          }/>
          
          <Route path = '/Event' 
            render = {(routeProps) => {
            return(
              <Event {...routeProps} 
                events={this.state.events} 
                getAttend={this.state.getAttend} 
                deleteEvent = {this.deleteEvent} 
                editEvent = {this.editEvent}  
                viewEvent = {this.viewEvent}  
                createEvent = {this.createEvent} 
                sign_in_route={this.props.sign_in_route} 
                sign_out_route={this.props.sign_out_route}
                current_user={this.props.current_user}
                current_user_id={this.props.current_user_id}
                logged_in={this.props.logged_in}
              />
              )
            }}
          />

          <Route 
            path = '/EditEvent/:id' 
            render = {(routeProps) => {
            return(
              <EditEvent {...routeProps} 
                events={this.state.events}  
                editEvent = {this.editEvent} 
                showEvent = {this.showEvent}  
                sign_in_route={this.props.sign_in_route} 
                sign_out_route={this.props.sign_out_route}
              />
              )
            }}
          />

          <Route path = '/NewEvent' 
            render = {(routeProps) => {
            return(
              <NewEvent {...routeProps} 
                createEvent = {this.createEvent} 
                success = {this.state.success} 
                sign_in_route={this.props.sign_in_route} 
                sign_out_route={this.props.sign_out_route}
              />
              )
            }}
          />

          <Route exact path="/" 
            render={(routeProps)=> {
              return(
                <Home {...routeProps} 
                  sign_in_route={this.props.sign_in_route} 
                  sign_out_route={this.props.sign_out_route}
                />
              )
            }}
          />

          </Switch>
          
          <footer className="bg-light text-black mt-4">
              <div className="container-fluid py-3">
                  <div className="row">
                      <div className="col-md-3">
                          <h5>Footer</h5></div>
                      <div className="col-md-3"></div>
                      <div className="col-md-3"></div>
                      <div className="col-md-3"></div>
                  </div>
                  <div className="row">
                      <div className="col-md-6">This is our Footer<span className="small"><br/>This will stay stationary</span></div>
                      <div className="col-md-3"></div>
                      <div className="col-md-3 text-right small align-self-end">©2019 Team_404</div>
                  </div>
              </div>
          </footer>

        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default MainApp
