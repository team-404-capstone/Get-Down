import React, { Component } from 'react'
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet'
import { OpenStreetMapProvider } from 'leaflet-geosearch'
import L from 'leaflet'

export default class MyMap extends Component{
  constructor(props){
    super(props)
    this.state ={
      lat: [],
      lng: [],
      zoom: 13,
      markerLat:0,
      markerLng:0,
      markers:[]
      }
  }
  addMarker(latLng){
    this.setState({markers: [...this.state.markers,[latLng.y, latLng.x]]})
  }

  componentDidUpdate(prevProps){
    const { events } = this.props
    const address = events.map(function(item) { return item.address})
    const provider = new OpenStreetMapProvider()
    console.log(address)
    if(prevProps.events != events){
      const latLngs = address.map((address)=>{
        return provider.search({
          query: address
        }).then((result)=>{
          this.addMarker(result[0])
          return result[0]
        })
      })
      Promise.all(latLngs).then((locations)=>{
        let lat = this.state.lat
        let lng = this.state.lng
        locations.forEach(e=>{
          lat.push(e.y)
        })
        locations.forEach(e=>{
            lng.push(e.x)
        })
        this.setState({lat: lat, lng: lng})
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
    const minLat = Math.min(parseFloat(this.state.lat))
    const minLng = Math.min(parseFloat(this.state.lng))
    const maxLat = Math.max(parseFloat(this.state.lat))
    const maxLng = Math.max(parseFloat(this.state.Lng))
    
    return(
      <div>
        <center>
          <LeafletMap
            style={{height:500, width:750}}
            center={[51, 111]}
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
