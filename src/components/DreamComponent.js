import React from 'react';
import { Link } from 'react-router-dom'
import "./styles.css"

export const DreamList = (props) => {
  // console.log('PROPS: ', props);

  return props.dreamProps.map(dreams =>

    <Link key={dreams.id} to={"/dreams/" + dreams.id}>
      <div className="dream-list">
        <div className="img-wrapper">
          <img className="dream-images" src={dreams.dream_images} alt="No Images" />
        </div>
        <div className="copy">
          <h3>{dreams.title}</h3>
          <p>${dreams.price}</p>
        </div>
      </div>
    </Link>

  )
}



