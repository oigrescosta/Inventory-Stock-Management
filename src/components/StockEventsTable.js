import React from 'react'

const StockEventsTable = (props) => {
    console.log(props);
    const {stockEvents} = props
    return (
        <div className="StockEventsTable">
            {stockEvents.map(event => (
                <div className="StockEventTable__Card">
                    <p>Id: {event.id}</p>
                    <p>Type: {event.type}</p>
                    <p>Quantity: {event.qty}</p>
                    <p>Product Name: {event.product.name}</p>
                </div>
            ))}
            
        </div>
    )
}

export default StockEventsTable
