import React from "react"
import PropTypes from "prop-types"
import Event from "./Event"

import { Nav, Navbar, NavItem, NavLink, NavbarBrand, Jumbotron, Container} from 'reactstrap'




class Home extends React.Component {
  render () {
    const {
      logged_in,
      sign_in_route,
      sign_out_route
    } = this.props



    return (
      <React.Fragment>
      <Container>
      <br/>
      <br/>
        <Jumbotron>
          <h1>THIS IS OUR HOME PAGE</h1>
          <p>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."</p>
        </Jumbotron>
        
        
          
      </Container>
      </React.Fragment>
      
      
    );
  }
}

export default Home


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ORIGINAL NAVBAR
// <nav class="navbar navbar-expand-md navbar-dark bg-primary mb-2">
//       	<a class="navbar-brand" href="./events">Light text</a>
//       	<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
//       		<span class="navbar-toggler-icon"></span>
//       	</button>
//       	<div class="collapse navbar-collapse" id="navbarColor02">
//       		<ul class="navbar-nav ml-auto">
//       			<li class="nav-item">
//       				<a class="nav-link" href="#" title="Current breakpoint tier">
//       					Tier
//       					<span class="d-xl-inline d-none">XL</span>
//       					<span class="d-lg-inline d-xl-none d-none">LG</span>
//       					<span class="d-md-inline d-lg-none d-none">MD</span>
//       					<span class="d-sm-inline d-md-none d-none">SM</span>
//       					<span class="d-inline d-sm-none">XS</span>
//       				</a>
//       			</li>
//       			<li class="nav-item">
//                 <a class="nav-link" href="/users/sign_up">Sign Up</a>
//                 <a class="nav-link" href={sign_in_route}>Log In</a>
//             </li>
//       		</ul>
//       	</div>
//       </nav>