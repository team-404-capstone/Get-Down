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
      sign_out_route,
      current_user,
      current_user_id,
      logged_in
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
             { logged_in &&
               <Button color = 'primary' href = '/NewEvent'>Create Event</Button>
             }
             <br/>
             <br/>
              <ListGroup>
                { events.map((event, index) => {
                  return (
                   <ListGroupItem key = {index}>NAME: {event.name} | DATE: {event.date} | TIME: {event.time} | ABOUT: {event.description} <br/>
                    { event.index_events_on_user_id === current_user_id &&
                      <div>
                        <Button color = 'secondary' href = {`/EditEvent/${event.id}`}>Edit Event</Button>
                        <Button color = 'warning' onClick = {() => deleteEvent(event.id)}>Delete Event</Button>
                      </div>
                    }
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
