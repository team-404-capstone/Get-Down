import React from "react"
import PropTypes from "prop-types"
import { Nav, Navbar, NavItem, NavLink, NavbarBrand, Button, ListGroup, ListGroupItem, Jumbotron, Container, Form, FormGroup, Input, Label } from 'reactstrap'



class ViewEvent extends React.Component {
  render () {
    const {
      Events,
      showEvent
    } = this.props
    
    return (
      <React.Fragment>
      <br/>
      <br/>
        <Jumbotron>
          <h1>VIEW EVENT</h1>
        </Jumbotron>
      </React.Fragment>
    );
  }
}

export default ViewEvent
