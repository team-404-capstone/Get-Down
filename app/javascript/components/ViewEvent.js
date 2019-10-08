import React from "react"
import PropTypes from "prop-types"
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Nav, Navbar, NavItem, NavLink, NavbarBrand, Button, ListGroup, ListGroupItem, Jumbotron, Container, Form, FormGroup, Input, Label } from 'reactstrap'



class ViewEvent extends React.Component {
  constructor(props){
    super(props)
    this.state = {  
      eventAttrs: {},
      attendStatus: false
    };
  }
  
  componentDidMount() {
    this.getEvent();
  }
  
  componentDidUpdate(prevProps) {
    if(prevProps.match.params.id != this.props.match.params.id) {
      this.getEvent();
      
    }
  }
  
  getEvent() {
    const { showEvent } = this.props;
    showEvent(this.props.match.params.id).then(response => {
      this.setState({ eventAttrs: response });
    });
  }
  
  localAttend = (el) => {
    el.preventDefault(),
    this.props.createAttend(this.props.match.params.id)
  }
  
  render () {
    const {
      attends,
      deleteAttend
    } = this.props
    
    return (
      <React.Fragment>
      <br/>
      <br/>
        <Jumbotron>
          <h1>View Event</h1>
             <div>
              <Card>
                <CardImg top width="75%"/>
                <CardBody>
                  <CardTitle>Event: {this.state.eventAttrs.name}</CardTitle>
                  <CardText>Date: {this.state.eventAttrs.date}</CardText>
                  <CardText>Time: {this.state.eventAttrs.time}</CardText>
                  <CardText>Address: {this.state.eventAttrs.address}</CardText>
                  <CardText>Description: {this.state.eventAttrs.description}</CardText>
                  <Button href = '/Event'>Back</Button>
                  <Button color = 'success' onClick = {this.localAttend}>Join</Button>
                </CardBody>
              </Card>
            </div>
        </Jumbotron>
        <Jumbotron>
        <h1>Attendees</h1>
          <div>
            <ListGroup>
              { attends.map((attend, index) => {
                return(
                  <div key = {index}>
                   <ListGroupItem>{attend.user_email}        <Button color = 'danger' onClick = {() => deleteAttend(attend.id)}>Leave</Button></ListGroupItem>
                   
                  </div>
                 )
              })}
            </ListGroup>
          </div>
        </Jumbotron>
      </React.Fragment>
    );
  }
}

export default ViewEvent
