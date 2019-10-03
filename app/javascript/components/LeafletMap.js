import React, { Component } from 'react'
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet'


export default class MyMap extends Component{
  constructor(props){
    super(props)
    this.state ={
      lat: [],
      lng: [],
      zoom: 13,
      }
  }

  render(){
      const {
        events,
        getEvent,
        deleteEvent,
        editEvent
      } = this.props
      const { position } = [address, address2]
      const address = events.map(function(item) { return item.lat})
      const address2 = events.map(function(item) { return item.lng})
      console.log(address)
      console.log(address2)

      return(
        <div>
        <center>
          <LeafletMap
            style={{height:500, width:750}}
            center={position}
            zoom={this.state.zoom}
            maxZoom={20}
            attributionControl={true}
            zoomControl={true}
            doubleClickZoom={true}
            scrollWheelZoom={true}
            dragging={true}
            animate={true}
            easeLinearity={0.35}
          >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
          />
          </LeafletMap>
        </center>
        </div>
        )
    }
}
