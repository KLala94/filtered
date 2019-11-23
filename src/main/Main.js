import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Main.scss';
import data from './data';
class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      ScarfData: data
  }
  }
  render(){

    const constantData = data.map(item => <div key={item.id} item={item} className="items">Ngjyra shallit eshte: {item.colors}
      <p>Edhe cmimi eshte {item.price}</p></div>)
    return (
      <div className="Main">
     {constantData}
      </div>
    )
  }
}
Main.propTypes = {
}

export default Main;