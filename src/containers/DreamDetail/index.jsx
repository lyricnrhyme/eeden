import React, { Component } from 'react';
import FeaturedProductVideo from './FeaturedProductVideoComponent.js';
import DreamInfo from './DreamInfoComponent';
import './styles.css';

//~~~ Redux ~~~//
import { connect } from 'react-redux';
import { getDream } from '../../actions/actions.js';

const mapStateToProps = state => {
  return {
    dreamProps: state.props
  }

}

class DreamDetail extends Component {

  // Lifecycle method
  componentDidMount() {
    let dreamId = this.props.match.params.dreams_id;
    this.props.dispatch(getDream(dreamId));
  }
  render() {
    // console.log('render', this.props.dreamProps)
    const { dreamProps } = this.props;
    // console.log("dreamprops", dreamProps)
    return (
      <div className="dreamdetail">
        <FeaturedProductVideo video={dreamProps.featured_video} />
        <DreamInfo info={dreamProps} />
      </div>
    );
  }
}

export default connect(mapStateToProps)(DreamDetail);