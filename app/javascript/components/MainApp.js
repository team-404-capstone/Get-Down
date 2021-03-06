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
      success: false,
      comments: []
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

      // ========================================= COMMENT METHODS

  getComment = (id) => {
     return fetch(`../comments?event_id=${id}`)
      .then(resp => {
        return resp.json()
      })
      .then(comments => {
        this.setState({comments})
      })
  }

  createComment = (comment) => {
    return fetch('/comments',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({comment: comment})
    })
    .then(resp => {
      if(resp.status === 201){
        this.getComment(comment),
        window.location.reload();
      }
    })
  }

  deleteComment = (id) => {
      return fetch(`/comments/${id}`, {
        method: 'DELETE'
      })
      .then((resp) => {
        if(resp.status === 200){
          this.getComment(),
          window.location.reload();
        }
      })
    }

  // ========================================= RENDER STARTS HERE

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
      getAttend,
      getComment,
      createComment,
      deleteComment

    } = this.props

    return (
      <React.Fragment>
        <BrowserRouter>
          <Navbar >
            <NavbarBrand href="/"><h1 style={{color: "#fff"}}>Get Down</h1></NavbarBrand>
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
                  getAttend={this.getAttend}
                  logged_in={this.props.logged_in}
                  current_user={this.props.current_user}
                  current_user_id={this.props.current_user_id}
                  getComment={this.getComment}
                  createComment={this.createComment}
                  deleteComment={this.deleteComment}
                  comments={this.state.comments}/>
              )
            }}/>

          <Route path = '/leafletmap'
            render = {(routeProps) => {
            return(
              <MyMap {...routeProps}
                events={this.state.events}
                viewEvent = {this.viewEvent}
              />
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
                      <div className="col-md-3 text-center small align-self-end" style={{color:"#fff"}}>©2019 Team_404</div>
                  </div>
              </div>
          </footer>

        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default MainApp
