import React, { Component } from 'react'
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet'
import { OpenStreetMapProvider } from 'leaflet-geosearch'

export default class MyMap extends Component{
  constructor(props){
    super(props)
    this.state ={
      lat: [],
      lng: [],
      zoom: 13,
      markerLat:0,
      markerLng:0,
      markers:[],
      centerLat: 0,
      distanceLat: 0,
      bufferLat: 0,
      centerLng: 0,
      distanceLng: 0,
      bufferLng: 0,
      maxLat: 0,
      minLat: 0,
      maxLng: 0,
      minLng: 0
      }
  }
  addMarker(addrs){
    this.setState({markers: [...this.state.markers,[addrs.latLng.y, addrs.latLng.x, addrs.name, addrs.time, addrs.date, addrs.id]]})
    console.log(addrs)
  }

  componentDidUpdate(prevProps){
    const { events } = this.props
    const addresses = events.map(function(item) { return {address: item.address, name: item.name, time: item.time, date: item.date, id: item.id}
    })
    const provider = new OpenStreetMapProvider()
    console.log(addresses)
    if(prevProps.events != events){
      const latLngs = addresses.map((address)=>{
        return provider.search({
          query: address.address
        }).then((result)=>{
          this.addMarker({latLng: result[0], name: address.name, time: address.time, date: address.date, id: address.id})
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
        const minLat = Math.min(...lat)
        const maxLat = Math.max(...lat)
        const minLng = Math.min(...lng)
        const maxLng = Math.max(...lng)
        const centerLat = (minLat + maxLat) / 2
        const distanceLat = (maxLat - minLat)
        const bufferLat = distanceLat * 0.05
        const centerLng = (minLng + maxLng) / 2
        const distanceLng = (maxLng - minLng)
        const bufferLng = distanceLng * 0.15
        this.setState({
            centerLat: centerLat,
            distanceLat: distanceLat,
            bufferLat: bufferLat,
            centerLng: centerLng,
            distanceLng: distanceLng,
            bufferLng: bufferLng,
            minLng: minLng,
            minLat: minLat,
            maxLng: maxLng,
            maxLat: maxLat
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
    console.log(this.state.markers)
    return(
      <div>
        <center>
          <LeafletMap
            style={{height:500, width:750}}
            center={[this.state.centerLat, this.state.centerLng]}
            bounds={[
                [this.state.minLat - this.state.bufferLat, this.state.minLng - this.state.bufferLng],
                [this.state.maxLat + this.state.bufferLat, this.state.maxLng + this.state.bufferLng]
            ]}
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
                  <Marker key={index} position={[markers[0], markers[1]]}>
                  <Popup>
                      {"Name:"+ " " + markers[2]}
                    <br />
                      {"Time:"+ " " + markers[3]}
                    <br />
                      {"Date:"+ " " + markers[4]}
                    <br />
                      <a style={{color: "black"}} href={`/ViewEvent/${markers[5]}`}>Event Details</a>
                  </Popup>
                  </Marker>
              )
          })}
          </LeafletMap>
        </center>
        </div>
        )
    }
}
