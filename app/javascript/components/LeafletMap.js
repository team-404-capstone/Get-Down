import React, { Component } from 'react'
// import L from 'react-leaflet'
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet'



export default class MyMap extends Component{
    constructor(props){
        super(props)
        this.state ={
            lat: 51.505,
            lng: -0.09,
            zoom: 13
        }
    }
    render(){
        const position = [this.state.lat, this.state.lng]
        return(
            <div >
            <LeafletMap
            style={{height:500, width:500}}
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

            <h1> hello</h1>
            </div>
        )
    }
}
