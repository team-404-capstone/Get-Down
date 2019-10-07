import React from "react"
import PropTypes from "prop-types"
import { Nav, Navbar, NavItem, NavLink, NavbarBrand, Button, ListGroup, ListGroupItem, Jumbotron, Container, Form, FormGroup, Input, Label } from 'reactstrap'
import { Redirect } from "react-router-dom"


class EditEvent extends React.Component {
  constructor(props){
    super(props)
    this.state = {  
    eventAttrs: {},
    editSuccess: false
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
  
  localSubmit = e => {
    e.preventDefault();
    const { editEvent } = this.props;
    const { eventAttrs } = this.state;
    editEvent(eventAttrs.id, eventAttrs).then(() => {
      this.setState({ editSuccess: true });
    window.location.href = '/Event'
    });
  };
  
  handleSubmit = event => {
    this.setState({ event });
  };
  
  onChange = e => {
    const { eventAttrs } = this.state;
    const { name, value } = e.target;
    eventAttrs[name] = value;
    this.setState({ eventAttrs });
  };
  
  getEvent() {
    const { showEvent } = this.props;
    showEvent(this.props.match.params.id).then(response => {
      this.setState({ eventAttrs: response });
    });
  }
  
  render () {
    const { eventAttrs, editSuccess, event } = this.state;
    const {
      logged_in,
      sign_in_route,
      sign_out_route,
      Events
    } = this.props
    return (
      <React.Fragment>
      {editSuccess && <Redirect to="/Event" />}
      <Container>
          
            <br/>
            <br/>
            <Jumbotron>
            <Container>
               <h1>Edit Event</h1>
                <Form onSubmit={this.localSubmit}>
                  <FormGroup>
                    <Label for="name">Event Name</Label>
                    <Input onChange = { this.onChange } type="text" value={eventAttrs.name} name="name" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="date">Date</Label>
                    <Input onChange = { this.onChange } type="date" value={eventAttrs.date} name="date" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="time">Time</Label>
                    <Input onChange = { this.onChange } type="time" value={eventAttrs.time} name="time" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="lat">Latitude</Label>
                    <Input onChange = { this.onChange } type="float" value={eventAttrs.lat} name="lat" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="lng">Longitude</Label>
                    <Input onChange = { this.onChange } type="float" value={eventAttrs.lng} name="lng" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="description">Description</Label>
                    <Input onChange = { this.onChange } type="textarea" value={eventAttrs.description} name="description" />
                  </FormGroup>
                  <Button onClick = {this.localSubmit} >Edit Event</Button>
                </Form>
            </Container>
            </Jumbotron>
      </Container>
      </React.Fragment>
    );
  }
}

export default EditEvent
