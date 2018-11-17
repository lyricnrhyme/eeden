import React from 'react';
import "./styles.css"


export const StoreInfo = (props) => {
    console.log('STORE COMPONENT PROS: ', props);
    

  return <div>{props.storeProps.title}</div>
}

// StoreInfo.defaultProps = {
//   storeProps: {
//     id: null,
//     title: 'Initial TEs Title',
//   }
// }