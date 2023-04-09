import './index.css';

import GoogleMapReact from 'google-map-react';
import React from 'react';

import PageHeader from '../../components/common/PageHeader';
import Marker from '../../components/markers/Marker';

const Markers: React.FC = () => {
  
  const defaultProps = {
    center: {
      lat: -23.58739,
      lng: -46.68286
    },
    zoom: 19
  };

  const drawLinesBetweenMarkers = (map: any, maps: { Polyline: new (arg0: { path: { lat: number; lng: number; }[]; strokeColor: string; strokeWeight: number; strokeDasharray: string; strokeLineCap: string; }) => any; }) => {
    const markers = [
      { lat: -23.58729, lng: -46.68326 },
      { lat: -23.5866142, lng: -46.6833522 },
      { lat: -23.587293, lng: -46.682226 }
    ];
  
    const path = markers.map(marker => ({
      lat: marker.lat,
      lng: marker.lng
    }));
  
    path.push({ lat: markers[0].lat, lng: markers[0].lng });
  
    const polyline = new maps.Polyline({
      path: path,
      strokeColor: "#5476b4",
      strokeWeight: 5,
      strokeDasharray: "15 10",
      strokeLineCap: "round",
    });
  
    polyline.setMap(map);
  };
  return (
    <div className="marker-container">
      <PageHeader title="Markers" />
      <div
        style={{
          height: '80%',
          width: '100%',
          marginTop: '50px',
          display: 'flex',
          alignSelf: 'center'
        }}
      >
        <GoogleMapReact
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) =>
            drawLinesBetweenMarkers(map, maps)
          }
        >
          <Marker lat={-23.58729} lng={-46.68326} />
          <Marker lat={-23.5866142} lng={-46.6833522} />
          <Marker lat={-23.587293} lng={-46.682226} />
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default Markers;


/* 
import './index.css';

import GoogleMapReact from 'google-map-react';
import React, { useEffect, useState } from 'react';

import PageHeader from '../../components/common/PageHeader';
import Marker from '../../components/markers/Marker';

const Markers: React.FC = () => {
  const defaultProps = {
    center: {
      lat: -23.58729,
      lng: -46.682226
    },
    zoom: 17
  };

  const [polyline, setPolyline] = useState<any>(null);

  const drawLinesBetweenMarkers = (map: any, maps: any) => {
    const lineSymbol = {
      path: 'M 0,-1 0,1',
      strokeOpacity: 1,
      scale: 4,
      strokeColor: 'blue',
      strokeWeight: 2,
      strokeDasharray: [5, 5] // sets the stroke to be dashed
    };

    const flightPath = new maps.Polyline({
      path: [
        { lat: -23.58729, lng: -46.68326 },
        { lat: -23.5866142, lng: -46.6833522 },
        { lat: -23.587293, lng: -46.682226 }
      ],
      icons: [{
        icon: lineSymbol,
        offset: '0',
        repeat: '20px'
      }],
      map: map
    });
    setPolyline(flightPath);
  }

  useEffect(() => {
    if (polyline) {
      polyline.setMap(null); // clear the old line when new markers are added
      setPolyline(null);
    }
  }, [polyline]);

  const [markers, setMarkers] = useState([
    { lat: -23.58729, lng: -46.68326 },
    { lat: -23.5866142, lng: -46.6833522 },
    { lat: -23.587293, lng: -46.682226 }
  ]);

  const handleAddMarker = (event: any) => {
    const newMarkers = [
      ...markers,
      { lat: event.lat, lng: event.lng }
    ];
    setMarkers(newMarkers);
  }

  const handleApiLoaded = ({ map, maps }: { map: any; maps: any; }) => {
    drawLinesBetweenMarkers(map, maps);
  }

  return (
    <div className='marker-container'>
      <PageHeader title='Markers'/>
      <div style={{ height: '80%', width: '100%', marginTop:'50px', display: 'flex', alignSelf: 'center'}}>
        <GoogleMapReact
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={handleApiLoaded}
          onClick={handleAddMarker}
        >
          {markers.map((marker, index) => (
            <Marker
              key={index}
              lat={marker.lat}
              lng={marker.lng}
            />
          ))}
        </GoogleMapReact>
      </div>
    </div>
  );
}

export default Markers;
*/