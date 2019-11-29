import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Main.scss';
import data from './data';
import { Range } from 'react-range';
class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      ScarfData: data,
      displayCategory: 'red',
      value: 1000,
      values: [100]
    }
  this.changeColor = this.changeColor.bind(this);
  this.changeRange = this.changeRange.bind(this);
}
  
changeColor(color){
  this.setState({ 
    displayCategory : color
  })
}

changeRange(price){
  this.setState({ 
    values : price
  })
}
  render(){

    const constantData = data.filter(
      ( item) =>
        this.state.displayCategory == item.color || this.state.displayCategory === ''
           ).filter((item) =>this.state.values >= item.price
           )
           .map(item => <div key={item.id} item={item} className="items">The color is: {item.color}
      <p>The price is: {item.price}</p></div>)
    return (
      
      <div className="Main">
        <button className="allButton" onClick={() => this.changeColor('')}>all</button>
         <button className="redButton" onClick={() => this.changeColor('red')}>Red</button>
         <button className="blueButton" onClick={() => this.changeColor('blue')}>Blue</button>
         <button className="yellowButton" onClick={() => this.changeColor('yellow')}>Yellow</button>
         <button className="purpleButton" onClick={() => this.changeColor('purple')}>Purple</button>
         <form>
          <button className="greenButton" onClick={() => this.changeColor('green')}>Green</button>
          <Range
        step={0.1}
        min={100}
        max={1000}
        values={this.state.values}
        onChange={values => this.changeRange(values)}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '6px',
              width: '40%',
              backgroundColor: '#ccc'
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '42px',
              width: '42px',
              backgroundColor: '#999'
            }}
          />
        )}
      />
          </form>
          <div className="hidden">this is hidden</div>
     {constantData}
      </div>
    )
  }
}
Main.propTypes = {
}

export default Main;