// Write your code here.
import './index.css'
import {useState} from 'react'

const LettersCalculator = () => {
  const [count, setCount] = useState(0)

  const LetterCount = event => {
    const inputText = event.target.value
    console.log(inputText)
    setCount(inputText.length)
  }

  return (
    <div className="LettersCalculatorContainer">
      <div className="lettercontent1">
        <h1 className="text">Calculate the Letters you enter</h1>
        <label className="text" htmlFor="phraseInput">
          Enter the phrase
        </label>
        <input
          className="Input"
          onChange={LetterCount}
          id="phraseInput"
          type="text"
        />

        <div>
          <p className="text">No.of letters: {count}</p>
        </div>
      </div>
      <div className="lettercontent2">
        <img
          className="letters-calculator"
          alt="letters calculator"
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
        />
      </div>
    </div>
  )
}

export default LettersCalculator
