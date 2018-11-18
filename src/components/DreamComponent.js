import React from 'react';
import { Link } from 'react-router-dom'
import "./styles.css"

export const DreamList = (props) => {
  console.log('PROPS: ', props);

  return props.dreamProps.map(dreams =>
    <div key={dreams.id}>
      <Link to={"/dreams/" + dreams.id}>
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
      <button onClick={() => props.deleteDream(dreams.id)}>Delete</button>

      <Link to={"/edit_dream/" + dreams.id}>
        <button>Temp Edit</button>
      </Link>
    </div>




  )
}



