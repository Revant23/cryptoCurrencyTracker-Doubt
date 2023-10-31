// Write your JS code here
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

const CryptocurrencyList = () => (
  <div>
    <h1>Cryptocurrency Tracker</h1>
    <img
      alt="cryptocurrency"
      src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
    />
    <CryptocurrencyItem />
  </div>
)

export default CryptocurrencyList
