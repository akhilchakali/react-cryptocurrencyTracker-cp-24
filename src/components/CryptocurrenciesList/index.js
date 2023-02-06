// Write your JS code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import CryptcurrencyItem from '../CryptocurrencyItem'

class CryptocurrenciesList extends Component {
  state = {list: [], isLoading: true}

  componentDidMount() {
    this.rendering()
  }

  rendering = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(each => ({
      currencyName: each.currency_name,
      usdValue: each.usd_value,
      euroValue: each.euro_value,
      id: each.id,
      currencyLogo: each.currency_logo,
    }))
    this.setState({list: updatedData, isLoading: false})
  }

  render() {
    const {list, isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <ul>
            {list.map(each => (
              <CryptcurrencyItem key={each.id} details={each} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList
