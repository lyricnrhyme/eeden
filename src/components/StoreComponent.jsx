import React from 'react';
import { Link } from 'react-router-dom'
import "./styles.css"


export const StoreList = (props) => {
  // console.log('STORE COMPONENT PROS: ', props);

  return props.storeProps.map(stores =>

    <Link key={stores.id} to={"/stores/" + stores.id}>
      <div className="store-container">
        <div>STORE ID: {stores.id}</div>
        <div>Title: {stores.title}</div>
        <div>Description: {stores.description}</div>
      </div>
    </Link>

  )
}
