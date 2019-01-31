import React, { Component } from 'react';
import L from "leaflet";
import "../../../node_modules/leaflet/dist/leaflet.css";
// import "../../../node_modules/leaflet/dist/leaflet.js";
import { Map, TileLayer, Marker, Popup, ScaleControl } from 'react-leaflet';
import "./Maps.css";
import Toggle from "./Toggle";
import MarkerClusterGroup from 'react-leaflet-markercluster/dist/react-leaflet-markercluster';
import 'react-leaflet-markercluster/dist/styles.min.css';
import 'leaflet/dist/leaflet.css?url=false';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import 'react-leaflet-markercluster/dist/styles.min.css';
import {bindActionCreators} from "redux";
import * as companieActions from "../../actions/companiesActions"
import {connect} from "react-redux"

var myIcon = L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.0.3/dist/images/marker-icon-2x.png',
    iconSize: [25, 40],
    });

class Maps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //boolean pour bloquer la localisation
            flagBlock : false,
            //Latitude
            lat: 45.764043,
            //Longitude
            lng: 4.835659,
            //Zoom de base sur la map
            zoom: 10,
            //Zoom maxi sur la map
            maxZoom: 18,
        }
        this.handleMoveEnd = this.handleMoveEnd.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.props.actions.loadCompanies({long:this.state.lng,lat:this.state.lat,range:100});
        this.props.actions.loadCompaniesStatsActivities({long:this.state.lng,lat:this.state.lat,range:100});

    }


    handleMoveEnd() {
        if(!this.state.flagBlock) {
            this.state.zoom = this.refs.map.leafletElement.getZoom();
            this.state.lat = this.refs.map.leafletElement.getCenter().lat;
            this.state.lng = this.refs.map.leafletElement.getCenter().lng;
            this.props.actions.loadCompanies({long:this.state.lng,lat:this.state.lat,range:100});
            this.props.actions.loadCompaniesStatsActivities({long:this.state.lng,lat:this.state.lat,range:100});
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
                <Map className="map" center={position} zoom={this.state.zoom} maxZoom={this.state.maxZoom} ref='map'  onMoveEnd={this.handleMoveEnd}>
                        <TileLayer attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                        <ScaleControl position="bottomleft" metric={true} imperial={false} maxWidth={300} />
                        <MarkerClusterGroup iconCreateFunction={createClusterCustomIcon}>
                               <Marker position={position}/>
                         {this.props.donneesMap.map(function(donnee){
                            return <Marker position={[donnee.coordonnees[0], donnee.coordonnees[1]]} icon={myIcon}>
                               <Popup>{donnee.l1_declaree} <br/> {donnee.l4_normalisee}  {donnee.l6_declaree} <br/>{donnee.activite}</Popup>
                            </Marker>
                            })
                          }
                        </MarkerClusterGroup>
                </Map>
                    <Toggle texte="Bloquer la localisation sur l'actuelle" isToggleOn={!this.state.flagBlock} onClick={this.handleClick}/>
                </div>
        )
        
    }

 }

 const createClusterCustomIcon = (cluster) => {
    const count = cluster.getChildCount();
    let size = 'LargeXL';
  
    if (count < 5) {
      size = 'Small';
    }
    else if (count >= 5 && count < 50) {
      size = 'Medium';
    }
    else if (count >= 50 && count < 100) {
      size = 'Large';
    } else if(count > 100) {
      size = 'LargeXL';}
    const options = {
      cluster: `markerCluster${size}`,
    };
  
    return L.divIcon({
      html:
        `<div>
          <span class="markerClusterLabel ${options.cluster}">${count}</span>
        </div>`,
      className: `${options.cluster}`,
    });
  };

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(companieActions, dispatch)
    };
}

function mapStateToProps(state){
    return {
        activities: state.companiesStats.activities,
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Maps);