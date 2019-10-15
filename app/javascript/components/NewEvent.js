import React from "react"
import PropTypes from "prop-types"
import { Nav, Navbar, NavItem, NavLink, NavbarBrand, Button, ListGroup, ListGroupItem, Jumbotron, Container, Form, FormGroup, Input, Label } from 'reactstrap'
import {Redirect} from 'react-router-dom'


class NewEvent extends React.Component {
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
    this.props.createEvent(this.state.form)
    window.location.href = '/Event'
  }

  render () {
    const {
      logged_in,
      sign_in_route,
      sign_out_route,
      Events
    } = this.props

    return (
      <React.Fragment>
      <Container>

            <br/>
            <br/>
            <Jumbotron>
              <h1>Create Event</h1>
              <br/>
              <Container>
              <Form>
                <FormGroup>
                  <Label style={{color: "black"}} for="name">Event Name</Label>
                  <Input onChange = { this.onChange } id="name"  type="string" name="name"placeholder="Event Name" />
                </FormGroup>
                <FormGroup>
                  <Label style={{color: "black"}} for="date">Date</Label>
                  <Input onChange = { this.onChange } id="date"  type="date" name="date" placeholder="Date" />
                </FormGroup>
                <FormGroup>
                  <Label style={{color: "black"}} for="time">Time</Label>
                  <Input onChange = { this.onChange }  id="time" type="text" name="time" placeholder="Time" />
                </FormGroup>
                <FormGroup>
                  <Label style={{color: "black"}}  for="description">Description</Label>
                  <Input onChange = { this.onChange } id="description" type="text" name="description" placeholder="Description" />
                </FormGroup>
                <FormGroup>
                  <Label style={{color: "black"}} for="address">Address</Label>
                  <Input onChange = { this.onChange } id="address" type="address" name="address" placeholder="Enter address" />
                </FormGroup>
                <Button onClick = {this.localSubmit} >Create</Button>

              </Form>
              </Container>
            </Jumbotron>
      </Container>
      </React.Fragment>
    );
  }
}

export default NewEvent
