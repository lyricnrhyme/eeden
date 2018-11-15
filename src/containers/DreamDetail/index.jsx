import React, { Component } from 'react';
import FeaturedProductVideo from './FeaturedProductVideoComponent.js';
import DreamInfo from './DreamInfoComponent';
import './styles.css';

//~~~ Redux ~~~//
import { connect } from 'react-redux';
import { getDream } from '../../actions/actions.js';

const mapStateToProps = state => {
  // console.log("state", state)
  return {
    dreamProps: state.detailedProps
  }

}
class DreamDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dreams: []
    }
  }


  // Lifecycle method
  componentDidMount() {
    let dreamId = this.props.match.params.dreams_id;
    this.props.dispatch(getDream(dreamId));
  }

  render() {
    const { dreamProps } = this.props;
    return (
      <div className="dreamdetail">
        <FeaturedProductVideo video={dreamProps.featured_video} />
        <DreamInfo info={dreamProps} />
      </div>
    );
  }
}

export default connect(mapStateToProps)(DreamDetail);