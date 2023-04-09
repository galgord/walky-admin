import React from 'react';

import markerIcon from '../../../assets/marker.png';

const Marker: React.FC<any> = ({lat, lng}) => {
  return (
   <img src={markerIcon} alt='marker' style={{width: '57px', height: '57px'}}/>
  )
}

export default Marker