import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Main.scss';
import data from './data';
class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      ScarfData: data,
      displayCategory: 'red',
  }
  this.changeColor = this.changeColor.bind(this);
}
  
changeColor(color){
  this.setState({ 
    displayCategory : color
  })
   
  
}
  render(){

    const constantData = data.filter(
      ( item) =>
        this.state.displayCategory == item.color || this.state.displayCategory === ''
           ).map(item => <div key={item.id} item={item} className="items">Ngjyra shallit eshte: {item.color}
      <p>Edhe cmimi eshte {item.price}</p></div>)
    return (
      
      <div className="Main">
        <button className="allButton" onClick={() => this.changeColor('')}>all</button>
         <button className="redButton" onClick={() => this.changeColor('red')}>Red</button>
         <button className="blueButton" onClick={() => this.changeColor('blue')}>Blue</button>
         <button className="yellowButton" onClick={() => this.changeColor('yellow')}>Yellow</button>
         <button className="purpleButton" onClick={() => this.changeColor('purple')}>Purple</button>
          <button className="greenButton" onClick={() => this.changeColor('green')}>Green</button>
          <div className="hidden">this is hidden</div>
     {constantData}
      </div>
    )
  }
}
Main.propTypes = {
}

export default Main;