import React from "react"
import PropTypes from "prop-types"
import { Nav, Navbar, NavItem, NavLink, NavbarBrand, Button, ButtonGroup, CardGroup, CardFooter, ListGroupItem, Jumbotron, Container, Card, CardTitle, CardText, Row, Col} from 'reactstrap'


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

      <Container fluid>
        <br/>
        <br/>
        <Jumbotron>
          <Container>
          <center>
            <h1>Events</h1>

             <br/>

             { logged_in &&
               <Button color = 'primary' href = '/NewEvent'>
                  Create Event
               </Button>
             }
            </center>
             <br/>
             <br/>
             <div>
              <CardGroup>
                { events.map((event, index) => {
                  return (
                   <Card key = {index}>
                   <div>
                   <Button style={{ backgroundColor: "#fff"}} href = {`/ViewEvent/${event.id}`} onClick = {() => viewEvent(event.id)}>View Event</Button>
                   <br/>
                   <br/>
                       <CardTitle><h4>{event.name}</h4></CardTitle><br/>
                         <CardText>DATE: {event.date}</CardText><br/>
                         <CardText>TIME: {event.time}</CardText><br/>
                         <CardText>ABOUT: {event.description}</CardText><br/>



                        <center>
                            { event.user_id === current_user_id &&
                              <div>
                                <Button style={{ backgroundColor: "#fff"}} href = {`/EditEvent/${event.id}`}>Edit Event</Button>
                                <br />
                                <Button style={{ backgroundColor: "#fff"}} onClick={e =>
                                  window.confirm("Are you sure you wish to delete this item?") &&
                                  deleteEvent(event.id)}>Delete Event</Button>
                              </div>
                          }

                          </center>
                          </div>
                   </Card>
                  )
                })
               }
              </CardGroup>
              </div>
            </Container>
          </Jumbotron>
        </Container>
      </React.Fragment>
    );
  }
}



export default Event
