// Write your code here

import './index.css'
import {Component} from 'react'

class ShowHide extends Component {
  state = {showFirst: false, showLast: false}

  showHideFirst = () => {
    const {showFirst} = this.state
    if (showFirst) {
      this.setState(prevObj => ({showFirst: false}))
    } else {
      this.setState(prevObj => ({showFirst: true}))
    }
  }

  showHideLast = () => {
    const {showLast} = this.state
    if (showLast) {
      this.setState(prevObj => ({showLast: false}))
    } else {
      this.setState(prevObj => ({showLast: true}))
    }
  }

  render() {
    const {showFirst, showLast} = this.state
    return (
      <div className="background">
        <h1 className="heading">Show/Hide</h1>
        <div className="card">
          <div>
            <button onClick={this.showHideFirst} className="button">
              Show/Hide Firstname
            </button>
            {showFirst && <h1 className="nameBox">Joe</h1>}
          </div>
          <div>
            <button onClick={this.showHideLast} className="button">
              Show/Hide Lastname
            </button>
            {showLast && <h1 className="nameBox">Jonas</h1>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
