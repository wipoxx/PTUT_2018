import React, { Component } from 'react';
import "../../../node_modules/leaflet/dist/leaflet.css";
import "../../../node_modules/leaflet/dist/leaflet.js";
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import "./Maps.css";
import Toggle from "./Toggle";

class Maps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //boolean pour bloquer la localisation
            flagBlock : false,
            //Latitude
            lat: 48.862725,
            //Longitude
            lng: 2.287592000000018,
            //Zoom de base sur la map
            zoom: 6,
        }
        this.handleMoveEnd = this.handleMoveEnd.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }


    handleMoveEnd() {
        if(!this.state.flagBlock) {
            this.state.zoom = this.refs.map.leafletElement.getZoom();
            this.state.lat = this.refs.map.leafletElement.getCenter().lat;
            this.state.lng = this.refs.map.leafletElement.getCenter().lng;
        }
    }

    handleClick() {
        this.state.flagBlock = !this.state.flagBlock;
    }

    render() {
        //Définition de la position entière
         const position = [this.state.lat, this.state.lng];
         return (
             <div>
                <Map className="map" center={position} zoom={this.state.zoom} ref='map'  onMoveEnd={this.handleMoveEnd}>
                        <TileLayer attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                                <Marker position={position}>
                                      <Popup>A pretty CSSS3 popup !</Popup>
                                </Marker>
                </Map>
                    <Toggle texte="Bloquer la localisation sur la localisation actuelle" isToggleOn={!this.state.flagBlock} onClick={this.handleClick}/>
                </div>
        )
        
    }
 }

export default Maps;