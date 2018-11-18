import React, { Component } from 'react';
import UserInfoComponent from './UserInfoComponent';
import StoreInventoryComponent from './StoreInventoryComponent';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from 'react-router-dom';

class AuthDreamInventory extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  
  render() {
    console.log(this.props, 'wya');
    if (this.props.dreamProps !== undefined) {
    return this.props.dreamProps.map(dreams =>
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
  } else {
    return (
      <div>Hi</div>
    )
  }
  }
}

export default AuthDreamInventory;
