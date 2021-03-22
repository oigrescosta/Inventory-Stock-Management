import React from 'react';
import axios from 'axios';
import StockEventsTable from './components/StockEventsTable'
import './App.css';

//Products
const fetchedProducts = [
  {
    id: 1,
    name: "Super Mario",
  },
  {
    id: 2,
    name: "Pokemon",
  }
]

//stockEvents
const fetchedStockEvents = [
  {
    id: 1,
    type: 'add',
    qty: 100,
    product: fetchedProducts[0]
  },
  {
    id: 2,
    type: 'remove',
    qty: -20,
    product: fetchedProducts[0]
  },
  {
    id: 3,
    type: 'remove',
    qty: 10,
    product: fetchedProducts[0]
  },
  {
    id: 4,
    type: 'add',
    qty: 10,
    product: fetchedProducts[1]
  },
  {
    id: 5,
    type: 'remove',
    qty: 20,
    product: fetchedProducts[1]
  },
]

class App extends React.Component {
  state = {
    fetchedProducts,
    fetchedStockEvents
  }

  async componentDidMount() {

    const productRes = await axios({
      method: 'GET',
      url: 'http://localhost:1337/products'
    })

    const stockEventsRes = await axios({
      method: 'GET',
      url: 'http://localhost:1337/stockevents'
    })

    console.log("App.componentDidMount stockEventsRes", stockEventsRes)
 
    const fetchedProducts = productRes.data
    const fetchedStockEvents = stockEventsRes.data

    this.setState({fetchedProducts, fetchedStockEvents})
  }

  render() {
    const {fetchedProducts, fetchedStockEvents} = this.state
    return (
      <div className="App">
        <h1>The Stock App</h1>
          <StockEventsTable products={fetchedProducts} stockEvents={fetchedStockEvents} />
      </div>
    );
  }
}

export default App;
