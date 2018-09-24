import React, { Component } from 'react'
import Scorebar from './navbar/Scorebar'

export default class Container extends Component {
  render() {
    return (
      <div>
        <Scorebar/>
        <div className='center-align container'>
            <h3 className='Header'>Click and image to start</h3>
        </div>
      </div>
    )
  }
}
