import React, { Component } from 'react'
import Scorebar from './navbar/Scorebar'

// shuffleArray = (array) => {
//   for (let i = array.length -1; i > 0; i--) {
//     let j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
//   return array;
// }

export default class Container extends Component {

  state={
    simpsonsArray: [],
    score: 0,
    highScore: 0,
    input: []
  }

  handleUserInput = (id) => {
    if (this.state.input.indexOf(id) === -1) {
      this.setState({ input: this.state.input.concat(id) });
    }
  }

  

  render() {
    return (
      <div>
        <Scorebar/>
        <div className='center-align container'>
            <h3 className='Header'>Click and image to start</h3>
            <div className='Row'>
            </div>
        </div>
      </div>
    )
  }
}