import React, { Component } from 'react';
import './styles.css';


//~~~ Redux ~~~//
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  // console.log('state', state)
  return {
    dreamProps: state.allprops
  }
}

class StoreInventory extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dreams:[]
    }
  }

  
  componentDidMount() {
    // console.log('props', this.props)
    // this.props.dispatch(getDreamByStore())
  }

  render() {
    console.log('render', this.props)
    // const { dreamProps } = this.props;
  
    return (
      <div className="storeinventory">
        Test Store Inventory
      </div>
    )
  }
}

export default connect(mapStateToProps)(StoreInventory);

StoreInventory.defaultProps = {
  id: []
}