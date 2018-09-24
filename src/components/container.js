import React, { Component } from 'react'
import Scorebar from './navbar/Scorebar'

export default class Container extends Component {
  render() {
    return (
      <div>
        <Scorebar/>
        <div className='container'>
            <h2 className='center-align'>Click and image to start</h2>
        </div>
      </div>
    )
  }
}
