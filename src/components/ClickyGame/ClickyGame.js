import React, { Component } from 'react'
import Pics from '../Pics/Pics'
import friends from '../../friends'
import Header from '../Header/Header'
import shuffle from 'lodash.shuffle'

class ClickyGame extends Component {
  state = {
    friends,
    clicked: [],
    score: 0,
    topScore: 0,
  }

  checkFriendClick = (name) => {
    return this.state.clicked.some(clickedName => {
      if (name === clickedName) {
        return true
      } else {
        return false
      }
    })
  }

  clickedFriend = (name) => {
    const isClicked = this.checkFriendClick(name)
    console.log(isClicked)
    if (isClicked) {
      return {
        clicked: [],
        score: 0
      }
    } else {
      const clicked = this.state.clicked.slice()
      clicked.push(name)
      return {
        clicked,
        score: this.state.score + 1
      }
    }
  }

  topScore = (score)=>{
    if(score >= this.state.topScore){
      return score
    }else{
      return this.state.topScore
    }
  }

  onPicClickHandler = (e) => {
    const { clicked, score } = this.clickedFriend(e.target.name)
    const topScore = this.topScore(score)
    const friends = shuffle(this.state.friends.slice())
    this.setState({ friends, clicked, score, topScore })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <Header score={this.state.score} topScore={this.state.topScore}/>
        <div className='container'>
          <div className='row'>
            {this.state.friends.map((friend, i) => {
              return (
                <div key={i} onClick={this.onPicClickHandler} className='col-md-3'>
                  <Pics name={friend.name} src={friend.image} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default ClickyGame