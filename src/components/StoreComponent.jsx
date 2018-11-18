import React from 'react';
import { Link } from 'react-router-dom'
import "./styles.css"


export const StoreList = (props) => {
  // console.log('STORE COMPONENT PROS: ', props);

  return props.storeProps.map(stores =>
    <div key={stores.id}>
      <Link to={"/stores/" + stores.id}>
        <div className="store-container">
          <span className="store-icon txt-tan"><i className="fas fa-store"></i></span>
          <span className="store-title"><h3>{stores.title}</h3></span>
          <span className="store-description txt-grey">{stores.description}</span>
        </div>
        {/* <div className="store-container">
        <div className="store-icon"><i class="fas fa-store"></i></div>
        <div className="store-title">{stores.title}</div>
        <div className="store-description">{stores.description}</div>
      </div> */}
      </Link>
      <Link to={"/edit_store/" + stores.id}>
        <button>Temp Edit</button>
      </Link>
    </div>


  )
}
