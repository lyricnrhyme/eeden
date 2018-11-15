import React from 'react';
import "./styles.css"


export const StoreList = (props) => {
  console.log('STORE COMPONENT PROS: ', props);

  return props.storeProps.map(stores =>

    <div key={stores.id} className="store-container">
      <div>STORE ID: {stores.id}</div>
      <div>Title: {stores.title}</div>
      <div>Description: {stores.description}</div>
    </div>
  )
}


