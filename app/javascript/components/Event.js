import React from "react"
import PropTypes from "prop-types"
import { Nav, Navbar, NavItem, NavLink, NavbarBrand, Button, ListGroup, CardGroup, ListGroupItem, Jumbotron, Container, Card, CardTitle, CardText, Row, Col} from 'reactstrap'


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
      logged_in,
      viewEvent
    } = this.props

    return (
      <React.Fragment>

      <Container>
        <br/>
        <br/>
        <Jumbotron>
          <Container>
          <center>
            <h1>Events</h1>
          </center>
             <br/>
             
             { logged_in &&
               <Button color = 'primary' href = '/NewEvent'>
                  Create Event
               </Button>
             }
             
             <br/>
             <br/>
              <CardGroup>
                { events.map((event, index) => {
                  return (
                   <Card key = {index}>
                   <center>
                   <CardTitle>{event.name}</CardTitle>
                   <CardText>DATE: {event.date} | TIME: {event.time} | ABOUT: {event.description} </CardText>
                   <br/>
                   <Button style={{width: '120px'}} color = 'primary' href = {`/ViewEvent/${event.id}`} onClick = {() => viewEvent(event.id)}>View Event</Button>
                    { event.user_id === current_user_id &&
                      <div>
                        <Button color = 'secondary' href = {`/EditEvent/${event.id}`}>Edit Event</Button>
                        <Button color = 'warning' onClick={e =>
                          window.confirm("Are you sure you wish to delete this item?") &&
                          deleteEvent(event.id)}>Delete Event</Button>
                      </div>
                    }

                    </center>
                   </Card>

                  )
                })
               }
              </CardGroup>
            </Container>
          </Jumbotron>
        </Container>
      </React.Fragment>
    );
  }
}



export default Event
