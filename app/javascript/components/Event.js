import React from "react"
import PropTypes from "prop-types"


class Event extends React.Component {
  render () {
    const {
      events,
      getEvent,
    } = this.props
    
    return (
      <React.Fragment>
       <h1>Events</h1>
        <ul>
          {events.map((event, index) => {
            return(
              <li key = {index}>{event.name}</li>
            )
          })
          }
        </ul>
      </React.Fragment>
    );
  }
}

export default Event
