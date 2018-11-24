import React from 'react';
import "./styles.css"


export const StoreInfo = (props) => {
  // console.log('STORE COMPONENT PROS: ', props.storeProps);


  return <div className="storeinfo">
    <div className="storename">
      <h1>{props.storeProps.title}</h1>
    </div>
    <div className="storedescription">
      {props.storeProps.description}
    </div>
    {/* <div className="store_owner">Owner: {props.storeProps.created_by}</div> */}
  </div>
}

// StoreInfo.defaultProps = {
//   storeProps: {
//     id: null,
//     title: 'Initial TEs Title',
//   }
// }