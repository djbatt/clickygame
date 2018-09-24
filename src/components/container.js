import React, { Component } from 'react'
import Scorebar from './navbar/Scorebar'
import Simpsons from './simpsons.json'
import Card from './imageCards/card'

function shuffleArray(array) {
  for (let i = array.length -1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

console.log(shuffleArray(Simpsons))

export default class Container extends Component {

  state={
    Simpsons,
    input: [],
    score: 0,
    highScore: 0
  }

  handleUserInput = (id) => {
    if (this.state.input.indexOf(id) === -1) {
      this.setState({ input: this.state.input.concat(id) });
    }
  }

  shuffleSimpsons = () => {
    console.log(shuffleArray(Simpsons));
  }

  

  render() {
    return (
      <div>
        <Scorebar/>
        <div className='center-align container'>
            <h3 className='Header'>Click and image to start</h3>
            <div className='row'>
              {this.state.Simpsons.map(Simpsons => (
                <div className='col s3'>
                <Card
                  Key={Simpsons.id}
                  image={Simpsons.link}
                />
                </div>
              ))}
            </div>
        </div>
      </div>
    )
  }
}