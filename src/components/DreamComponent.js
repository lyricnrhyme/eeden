import React from 'react';
import "./styles.css"

export const DreamList = (props) => {
  // console.log('PROPS: ', props);

  return props.dreamProps.map(dreams =>

    <div key={dreams.id} className="d-flex flex-column dream-container" >
      <div className="p-1">DREAM ID: {dreams.id}</div>
      <div className="p-1">Title: {dreams.title}</div>
      <div className="p-1">${dreams.price}</div>
      <div href="/dreams/:dreams_id" >
        <img className="dream-images" src={dreams.dream_images} alt="No Images"
          onClick={() => props.getDream(dreams.id)} />
      </div>

    </div >
  )
}


