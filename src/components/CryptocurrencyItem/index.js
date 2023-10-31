// Write your JS code here
import {Component} from 'react'
import './index.css'
import Loader from 'react-loader-spinner'

class CryptocurrencyItem extends Component {
  state = {CryptoData: [], isLoading: true}

  componentDidMount = () => {
    this.getCryptoItems()
  }

  getCryptoItems = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()

    const updatedList = data.map(eachItem => ({
      id: eachItem.id,
      currency_logo: eachItem.currency_logo,
      CurrencyName: eachItem.currency_name,
      euroValue: eachItem.euro_value,
      UsdValue: eachItem.usd_value,
    }))
    this.setState({CryptoData: updatedList, isLoading: false})
  }

  render() {
    const {CryptoData, isLoading} = this.state

    return (
      <>
        {isLoading ? (
          <Loader
            className="loader"
            type="Rings"
            color="#ffffff"
            height={80}
            width={80}
            data-testid="loader"
          />
        ) : (
          <div className="CryptoList">
            <div>
              <p className="upper-text">Coin Type</p>
              <ul className="common-type-list">
                {CryptoData.map(item => (
                  <li className="Coin-type" key={item.id}>
                    <img
                      src={item.currency_logo}
                      alt="currency_name"
                      className="logoImage"
                    />
                    <p className="currency-text">{item.CurrencyName}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="CurrencyContainer">
              <div>
                <p className="upper-text">USD</p>

                <ul className="common-type-list">
                  {CryptoData.map(eachItem => (
                    <li className="currency-list" key={eachItem.id}>
                      <p>{eachItem.UsdValue}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="upper-text">EURO</p>
                <ul className="common-type-list">
                  {CryptoData.map(eachItem => (
                    <li className="currency-list" key={eachItem.id}>
                      <p>{eachItem.euroValue}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </>
    )
  }
}

export default CryptocurrencyItem
