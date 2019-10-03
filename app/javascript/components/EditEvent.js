import React from "react"
import PropTypes from "prop-types"
import { Nav, Navbar, NavItem, NavLink, NavbarBrand, Button, ListGroup, ListGroupItem, Jumbotron, Container, Form, FormGroup, Input, Label } from 'reactstrap'


class EditEvent extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      // form: {
      //   name: "",
      //   date: "",
      //   time: "",
      //   lat: "",
      //   lng: "",
      //   description: ""
      // },
      eventId: this.props.match.params.id,
      eventUpdate: {}
    }
  }
  
  componentDidMount() {
    /* global fetch */
    fetch('/events/:id')
    console.log(this.props.match.params.id)
  }
  
  onChange = (e) => {
    const{eventUpdate} = this.state
    console.log(e.target.value)
    eventUpdate[e.target.value] = e.target.value
  }
  
  localSubmit = (el) => {
    el.preventDefault(),
    this.setState({success: true})
    this.props.editEvent(this.state.eventId, this.state.eventUpdate)
    window.location.href = '/Event'
  }
  
  render () {
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
                </Nav>
            </Navbar>
            <br/>
            <br/>
            <Jumbotron>
            <Container>
               <h1>Edit Event</h1>
                <Form>
                  <FormGroup>
                    <Label for="name">Event Name</Label>
                    <Input onChange = { this.onChange } type="text" name="name" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="date">Date</Label>
                    <Input onChange = { this.onChange } type="date" name="date" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="time">Time</Label>
                    <Input onChange = { this.onChange } type="time" name="time" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="lat">Latitude</Label>
                    <Input onChange = { this.onChange } type="float" name="lat" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="lng">Longitude</Label>
                    <Input onChange = { this.onChange } type="float" name="lng" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="description">Description</Label>
                    <Input onChange = { this.onChange } type="textarea" name="description" />
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
