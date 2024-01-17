import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {numberOfLetters: ''}

  onChangeNumberOfLetters = event => {
    this.setState({numberOfLetters: event.target.value})
  }

  render() {
    const {numberOfLetters} = this.state

    return (
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="image"
        />
        <div className="letters-calculator-container">
          <h1 className="heading"> Calculate the Letters you enter </h1>
          <div className="search-input-container">
            <label className="search-label" htmlFor="letter">
              {' '}
              Enter the phrase{' '}
            </label>
            <input
              type="text"
              className="search-input"
              placeholder="calculator"
              onChange={this.onChangeNumberOfLetters}
              id="letter"
            />
            <p className="button" type="button">
              {' '}
              No.of letters: {numberOfLetters.length}{' '}
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
