import React from 'react'
import StockDetail from './StockDetail'

const StockEventsTable = (props) => {
    const {products, stockEvents} = props
    return (
        <div className="StockEventsTable">
            {products.map(product => {
                const {id} = product

                const relevantStockEvents = stockEvents.filter(se => se.product.id === product.id)

                const stockTotal = relevantStockEvents.reduce((acc, currentElement) => {
                    return acc + currentElement.qty
                }, 0)

                return (
                    <div className="StockEventTable__ProductContainer">
                        <StockDetail 
                            name={product.name} 
                            total={stockTotal} 
                            stockEvents={relevantStockEvents} 
                        />
                    </div>
                )
            })}
        </div>
    )
} 

export default StockEventsTable
