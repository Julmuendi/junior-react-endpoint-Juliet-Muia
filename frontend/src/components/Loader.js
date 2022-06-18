import React, { Component } from 'react'
import spinner from '../images/spinner.gif'

export default function Loader() {
    return (
      <div className='Loader'>
        <img src={spinner}/>
      </div>
    )
  
}

