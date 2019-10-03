import React, { Component } from 'react'
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet'
import { OpenStreetMapProvider } from 'leaflet-geosearch'

export default class MyMap extends Component{
  constructor(props){
    super(props)
    this.state ={
      lat: 51,
      lng: -1,
      zoom: 13,
      }
  }

  render(){

      const provider = new OpenStreetMapProvider()
      provider.search({
          query:"704 J Street San Diego California"
      }).then((result)=>console.log(result))
      const {
        events,
        getEvent,
        deleteEvent,
        editEvent
      } = this.props
      const { position } = [this.state.lat, this.state.lng]
       const address = events.map(function(item) { return item.address})
      console.log(address)


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
