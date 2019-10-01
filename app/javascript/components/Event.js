import React from "react"
import PropTypes from "prop-types"
import { Nav, Navbar, NavItem, NavLink, NavbarBrand, Button, ListGroup, ListGroupItem } from 'reactstrap'


class Event extends React.Component {
  render () {
    const {
      events,
      getEvent,
    } = this.props
    
    return (
      <React.Fragment>
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
                <NavLink href="/users/sign_up">Sign Up</NavLink>
              </NavItem>
            </Nav>
        </Navbar>
       <h1>Events</h1>
         <br/>
          <Button color = 'primary'>Create Event</Button>
         <br/>
         <br/>
          <ListGroup>
            {events.map((event, index) => {
              return(
               <ListGroupItem key = {index}>{event.name} <Button color = 'secondary'>Edit Event</Button> <Button color = 'warning'>Delete Event</Button></ListGroupItem>
              )
           })
           }
          </ListGroup>
      </React.Fragment>
    );
  }
}

export default Event
