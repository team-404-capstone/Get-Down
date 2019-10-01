import React from "react"
import PropTypes from "prop-types"


class Home extends React.Component {
  render () {
    const {
      logged_in,
      sign_in_route,
      sign_out_route
    } = this.props

    return (
      <React.Fragment>
      <h1>Get Down</h1>
      <nav className="navbar navbar-expand-md navbar-dark bg-primary mb-2">
      	<a className="navbar-brand" href="#">Light text</a>
      	<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
      		<span className="navbar-toggler-icon"></span>
      	</button>
      	<div className="collapse navbar-collapse" id="navbarColor02">
      		<ul className="navbar-nav ml-auto">
      			<li className="nav-item">
      				<a className="nav-link" href="#" title="Current breakpoint tier">
      					Tier
      					<span className="d-xl-inline d-none">XL</span>
      					<span className="d-lg-inline d-xl-none d-none">LG</span>
      					<span className="d-md-inline d-lg-none d-none">MD</span>
      					<span className="d-sm-inline d-md-none d-none">SM</span>
      					<span className="d-inline d-sm-none">XS</span>
      				</a>
      			</li>
      			<li className="nav-item">
                <a className="nav-link" href="/users/sign_up">Sign Up</a>
                <a className="nav-link" href={sign_in_route}>Log In</a>
                </li>
      		</ul>
      	</div>
      </nav>
      </React.Fragment>
    );
  }
}

export default Home
