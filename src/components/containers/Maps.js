import React, { Component } from 'react';
import "../../../node_modules/leaflet/dist/leaflet.css";
import "../../../node_modules/leaflet/dist/leaflet.js";
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import "./Maps.css";

class Maps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //Latitude
            lat: 48.862725,
            //Longitude
            lng: 2.287592000000018,
            //Zoom de base sur la map
            zoom: 6,
        }
    }
    render() {
        //Définition de la position entière
         const position = [this.state.lat, this.state.lng];
         return (
                <Map className="map" center={position} zoom={this.state.zoom}>
                        <TileLayer attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                                <Marker position={position}>
                                      <Popup>A pretty CSSS3 popup !</Popup>
                                </Marker>
                </Map>
        )
        
    }
 }

export default Maps;