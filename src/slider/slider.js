import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Slide } from 'react-slideshow-image';
import img from './greenbanner.jpg';
const slideImages = [
    require('./greenbanner.jpg'),
    require('./greengrass.jpeg'),
    require('./opengreen.jpg')
  ];
   
  const properties = {
    height: 200,
    duration: 9000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
    onChange: (oldIndex, newIndex) => {
      console.log(`slide transition from ${oldIndex} to ${newIndex}`);
    }
  }

class Slider extends Component {
  constructor(props){
    super(props);
  }
  
  render(){
    return (
        <div className="slide-container">
        <Slide {...properties}>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`, 'height': 200+ 'px'}}>
              <span>Slide 1</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`, 'height': 200+ 'px'}}>
              <span>Slide 2</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`, 'height': 200+ 'px'}}>
              <span>Slide 3</span>
            </div>
          </div>
        </Slide>
      </div>
        )
  }
}
Slider.propTypes = {
}

export default Slider;