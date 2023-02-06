// Write your code here
import {Component} from 'react'

import CryptocurencyList from '../CryptocurrenciesList'

class CryptocurrencyTracker extends Component {
  render() {
    return (
      <div className="cont">
        <h1>Cryptocurrency Tracker</h1>
        <img
          alt="cryptocurrency"
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
        />
        <CryptocurencyList />
      </div>
    )
  }
}
export default CryptocurrencyTracker
