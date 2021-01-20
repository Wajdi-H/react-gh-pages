import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import React, { Component } from "react";

class MapContainer extends Component {

    render() {
        const mapStyles = {
            width: '100%',
            height: '100%',
          }
    return (
        <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 47.444, lng: -122.176}}
        >
          <Marker position={{ lat: 48.00, lng: -122.00}} />
        </Map>
    );
      }
      
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyDFTZf5fcMCJzLpyjRaO1h6BRgVRoP__hw'
  })(MapContainer);