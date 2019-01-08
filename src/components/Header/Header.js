import React from 'react'
import './Header.css'

function Header(props) {
  return (
    <div>
      <nav className="navbar">
          <p>Cartoon Memories <i className="fas fa-gamepad fa-lg"></i></p>
          <p>Click an image to begin!</p>
          <p>Score: {props.score} | Top Score: {props.topScore}</p>
      </nav>
      <div className='jumbotron header'>
        <h1 className='text-center'>Lets play Cartoon Memories!</h1>
        <p className='text-center'>Click on an image to earn points, but don't click on any more than once!</p>
      </div>
    </div>
  )
}

export default Header