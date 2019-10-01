import React from "react"
import PropTypes from "prop-types"
import { Nav, Navbar, NavItem, NavLink, NavbarBrand, Button, ListGroup, ListGroupItem, Jumbotron, Container, Form, FormGroup, Input, Label } from 'reactstrap'


class EditEvent extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      form: {
        name: "",
        date: "",
        time: "",
        lat: "",
        lng: "",
        description: ""
      }
    }
  }
  
  onChange = (e) => {
    let {form} = this.state
    form[e.target.name] = e.target.value
    this.setState({form: form})
  }
  
  localSubmit = (el) => {
    el.preventDefault(),
    this.setState({success: true})
    this.props.editEvent(this.state.form)
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
                    <Input onChange = { this.onChange } type="text" name="name"placeholder="Event Name" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="date">Date</Label>
                    <Input onChange = { this.onChange } type="date" name="date" placeholder="Date" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="time">Time</Label>
                    <Input onChange = { this.onChange } type="time" name="time" placeholder="Time" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="lat">Latitude</Label>
                    <Input onChange = { this.onChange } type="float" name="lat" placeholder="Float" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="lng">Longitude</Label>
                    <Input onChange = { this.onChange } type="float" name="lng" placeholder="Float" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="description">Description</Label>
                    <Input onChange = { this.onChange } type="textarea" name="description" placeholder="Description" />
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
