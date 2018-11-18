import React, { Component } from 'react';
import FeaturedProductVideo from './FeaturedProductVideoComponent.js';
import DreamInfo from './DreamInfoComponent';
import MoreFromStore from './MoreFromStoreComponent.js'
import './styles.css';

//~~~ Redux ~~~//
import { connect } from 'react-redux';
import { getDream } from '../../actions/actions.js';


const mapStateToProps = state => {
  console.log("redu store state in dream detail", state)
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
    // console.log('PROPS IN RENDER DREAMDTEAIL', this.props)
    const { dreamProps } = this.props;
    const { featured_video, created_by } = dreamProps
    console.log("Dream info", dreamProps)
    return (
      <div className="dreamdetail">
        <FeaturedProductVideo video={featured_video} />
        <DreamInfo info={dreamProps} />
        <MoreFromStore info={created_by} />
      </div>
    )
  }
}

export default connect(mapStateToProps)(DreamDetail);

DreamDetail.defaultProps = {
  dreamProps: {
    id: null,
    title: 'Test',
    featured_video: 'fack'
  }
}