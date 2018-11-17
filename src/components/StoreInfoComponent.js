import React from 'react';
import "./styles.css"


export const StoreInfo = (props) => {
    console.log('STORE COMPONENT PROS: ', props);

  return props.storeProps.map(stores => 
    <div className="storeinfo">
      Test store info
    </div>  
    
  )
}

StoreInfo.defaultProps = {
  storeProps: []
}