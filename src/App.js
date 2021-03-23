import React from 'react';
import axios from 'axios';
import StockEventsTable from './components/StockEventsTable'
import AddStockEvent from './components/AddStockEvent'
import AddProduct from './components/AddProduct'
import './App.css';

class App extends React.Component {
  state = {
    fetchedProducts: [],
    fetchedStockEvents: []
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
          <AddProduct />
          <AddStockEvent products={fetchedProducts} />
          <StockEventsTable products={fetchedProducts} stockEvents={fetchedStockEvents} />
      </div>
    );
  }
}

export default App;
