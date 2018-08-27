import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';

export default class Map extends React.Component {
  componentDidMount() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYW5keXdlaXNzMTk4MiIsImEiOiJIeHpkYVBrIn0.3N03oecxx5TaQz7YLg2HqA'
    this.createMap();
  }

  createMap = () => {
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: `mapbox://styles/mapbox/streets-v9`
    });
    const map = this.map;
    map.on('load', (event) => {
      map.addSource(
        'places',
        {
          type: 'geojson',
          data: `/places.json`
        }
      );
      map.addLayer({ id: 'places', type: 'circle', source: 'places'});
    });
  }

  render() {
    const style = {
      width: '100%',
      height: '500px',
      backgroundColor: 'azure'
    };
    return <div style={style} ref={el => this.mapContainer = el} />;
  }

  componentWillUnmount() {
    this.map.remove();
  }
}
