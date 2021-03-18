import React from 'react';
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

function App() {
  return (
    <div className="App">
      <h1>The Stock App</h1>
        <StockEventsTable products={fetchedProducts} stockEvents={fetchedStockEvents} />
    </div>
  );
}

export default App;
