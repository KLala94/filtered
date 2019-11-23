import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Banner.scss';

class Banner extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="Banner">
    <h1 className="banner">blej shalla</h1>
      </div>
    )
  }
}
Banner.propTypes = {
}

export default Banner;