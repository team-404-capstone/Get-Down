import React from "react"
import PropTypes from "prop-types"
import { Nav, Navbar, NavItem, NavLink, NavbarBrand, Button, ListGroup, ListGroupItem, Jumbotron, Container} from 'reactstrap'


class Event extends React.Component {
  render () {
    const {
      events,
      getEvent,
      deleteEvent
    } = this.props
    
    return (
      <React.Fragment>
      <Container>
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
        <br/>
        <br/>
        <Jumbotron>
          <Container>
            <h1>Events</h1>
             <br/>
              <Button color = 'primary' href = '/NewEvent'>Create Event</Button>
             <br/>
             <br/>
              <ListGroup>
                {events.map((event, index) => {
                  return(
                   <ListGroupItem key = {index}>{event.name} | {event.date} | {event.time} | {event.description} 
                      <Button color = 'secondary'>Edit Event</Button> 
                      <Button color = 'warning' onClick = {() => deleteEvent(event.id)}>Delete Event</Button>
                   </ListGroupItem>
                  )
               })
               }
              </ListGroup>
            </Container>
          </Jumbotron>
      </Container>
      </React.Fragment>
    );
  }
}

export default Event
