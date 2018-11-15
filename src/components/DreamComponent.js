import React from 'react';
import "./styles.css"

export const DreamList = (props) => {
  // console.log('PROPS: ', props);

  return props.dreamProps.map(dreams =>

    // <Link to={"/dreams/" + dreams.id}>
    //   <div key={dreams.id} className="dream-list" onClick={() => props.getDream(dreams.id)}>
    //     <div className="img-wrapper">
    //       <img className="dream-images" src={dreams.dream_images} alt="No Images" />
    //     </div>
    //     <div className="copy">
    //       <h3>{dreams.title}</h3>
    //       <p>${dreams.price}</p>
    //     </div>
    //   </div>
    // </Link>


    //~~~ this reloads the page and state is updated ~~~//
    <a href={"/dreams/" + dreams.id} key={dreams.id} className="dream-list" onClick={() => props.getDream(dreams.id)}>
      <div className="img-wrapper">
        <img className="dream-images" src={dreams.dream_images} alt="No Images" />
      </div>
      <div className="copy">
        <h3>{dreams.title}</h3>
        <p>${dreams.price}</p>
      </div>

    </a>
  )
}



