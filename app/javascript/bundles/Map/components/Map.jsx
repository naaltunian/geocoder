import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';

export default class Map extends React.Component {
  componentDidMount() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYW5keXdlaXNzMTk4MiIsImEiOiJIeHpkYVBrIn0.3N03oecxx5TaQz7YLg2HqA'
    let { coordinates } = this.props;
    const mapOptions = {
      container: this.mapContainer,
      style: `mapbox://styles/mapbox/streets-v9`,
      zoom: 12,
      center: coordinates
    }
    this.createMap(mapOptions);
  }
 
  createMap = mapOptions => {
    this.map = new mapboxgl.Map(mapOptions);
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
