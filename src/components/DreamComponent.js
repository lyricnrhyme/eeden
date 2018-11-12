import React from 'react';
import "./styles.css"

export const DreamList = (props) => {
  console.log(props);

  return props.props.map(dreams =>

    <div key={dreams.id} className="d-flex flex-column dream-container" >
      <div className="p-1">Title: {dreams.title}</div>
      <div className="p-1">${dreams.price}</div>
      {/* <div className="p-1">{dreams.dream_images}</div> */}
      <div className="p-1">
        <img className="dream-images" src={dreams.dream_images} alt="No Images" />
      </div>
    </div >
  )
}