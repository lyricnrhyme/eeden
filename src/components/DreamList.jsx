import React from 'react';

const DreamList = (props) => {
  return props.props.map(dreams =>
    <div className="d-flex flex-column dream-container" >
      <div className="p-1">Title: {dreams.title}</div>
      <div className="p-1">{dreams.description}</div>
      <div className="p-1">${dreams.price}</div>
      <div className="p-1">Genre: {dreams.genre}</div>

    </div >
  )
}


export default DreamList;


