import React from "react"
import PropTypes from "prop-types"
import { Nav, Navbar, NavItem, NavLink, NavbarBrand, Button, ListGroup, ListGroupItem, Jumbotron, Container} from 'reactstrap'


class Event extends React.Component {
  
  render () {
    const {
      events,
      getEvent,
      deleteEvent,
      editEvent,
      sign_in_route,
      sign_out_route
    } = this.props
    
    return (
      <React.Fragment>
      <Container>
      
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
                   <ListGroupItem key = {index}>{event.name} | {event.date} | {event.time} | {event.description} <br/>
                      <Button color = 'secondary' href = {`/EditEvent/${event.id}`}>Edit Event</Button>
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
