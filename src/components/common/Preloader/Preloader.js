import React from 'react';
import preloader from '../../../assets/images/preloader.svg';

let Preloader = (props) => {
  return (
    <div style={ {backgroundColor: 'white', maxHeight: '100px', maxWidth: '100px'} }>
      <img src={preloader} alt=""  />
    </div>
  )
}

export default Preloader;