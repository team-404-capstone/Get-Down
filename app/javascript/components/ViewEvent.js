import React from "react"
import PropTypes from "prop-types"
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Nav, Navbar, NavItem, NavLink, NavbarBrand, Button, ListGroup, ListGroupItem, Jumbotron, Container, Form, FormGroup, Input, Label } from 'reactstrap'



class ViewEvent extends React.Component {
  constructor(props){
    super(props)
    this.state = {  
      eventAttrs: {},
      attendStatus: false,
      form: {
        comment: "",
        event_id: this.props.match.params.id
      }
    };
   
  }
  
  componentDidMount() {
    this.getEvent();
    this.props.getAttend(this.props.match.params.id)
    this.props.getComment(this.props.match.params.id)
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
  
  onChange = (e) => {
    let {form} = this.state
    form[e.target.name] = e.target.value
    this.setState({form: form})
  }
  
   localSubmit = (el) => {
    el.preventDefault(),
    this.props.createComment(this.state.form)
  }
  
  render () {
    const {
      attends,
      deleteAttend,
      logged_in,
      current_user_id,
      current_user,
      deleteComment,
      comments
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
                
                      { logged_in &&
                          <Button color = 'success' onClick = {this.localAttend}>
                            Join
                          </Button>
                      }
                  
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
                     <ListGroupItem>{attend.user_email}
                       { attend.user_id === current_user_id &&
                          <div>
                             <Button color = 'danger' onClick={e =>
                              window.confirm("Are you sure you want to leave?") && deleteAttend(attend.id)}>Leave</Button>
                          </div>
                       }
                     </ListGroupItem>
                  </div>
                 )
              })}
            </ListGroup>
          </div>
        </Jumbotron>
        <Jumbotron>
        <h1>Discussion</h1>
          <div>
            <Form>
                <FormGroup>
                  <Label for="comment">Comment</Label>
                  <Input onChange = { this.onChange }  type="string" name="comment"placeholder="Enter Comment Here" />
                </FormGroup>
                <Button onClick = {this.localSubmit} >Post Comment</Button>
            </Form>
            <ListGroup>
            { comments.map((comment, index) => {
              return(
              <div key = {index}>
                <ListGroupItem>{comment.user_email} says: {comment.comment}
                {console.log(comment.comment)}
                  { comment.user_id === current_user_id && 
                    <div>
                      <Button color = 'danger' onClick={e => window.confirm("Are you sure you want to delete this comment?") && deleteComment(comment.id)}>Delete</Button>
                    </div>
                  }
                  </ListGroupItem>
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
