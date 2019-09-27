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
      <div id="navbar">
    <nav className="navbar navbar-default" role="navigation">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">Get Down</a>
        </div>
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            <li><a href="#">Create New Event</a></li>
            <li><a href="/users/sign_up">Sign Up</a></li>
            <li><a href={sign_in_route}>Log in</a></li>
            <li><a href="#">Groups</a></li>
          </ul>
        </div>
      </div>
    </nav>
    <h1 className="h1 text-primary">Get Down</h1>
</div>
      </React.Fragment>
    );
  }
}

export default Home
