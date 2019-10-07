import React, { Component } from 'react'
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet'
import { OpenStreetMapProvider } from 'leaflet-geosearch'

export default class MyMap extends Component{
  constructor(props){
    super(props)
    this.state ={
      lat: 32.7157,
      lng: -117.1611,
      zoom: 13,
      markerLat:0,
      markerLng:0,
      markers:[]
      }
  }

  componentDidUpdate(prevProps){
    const { events } = this.props
    const address = events.map(function(item) { return item.address})
    const provider = new OpenStreetMapProvider()
    console.log(address)
    if(prevProps.events != events){
      address.map((address)=>{
        console.log(address)
        provider.search({
          query: address
      }).then((result)=>{
          this.setState({markerLat: result[0].y, markerLng: result[0].x})
          this.setState({markers: [...this.state.markers,[this.state.markerLat, this.state.markerLng]]})
      })
      })
    }
  }

  render(){
    const {
      events,
      getEvent,
      deleteEvent,
      editEvent
    } = this.props

    const position = [this.state.lat, this.state.lng]

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
          {this.state.markers.map((markers, index)=>{
              return(
                  <Marker key={index} position={markers}>
                  </Marker>
              )
          })}
          </LeafletMap>
        </center>
        </div>
        )
    }
}
