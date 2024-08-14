import React from 'react';
import "./Track.scss"
const Trackgrid = () => {
    // Hardcoded data
    const products = [
        { orderid: 'ORD001', itemName: 'Product A', itemQuantity: 2 },
        { orderid: 'ORD002', itemName: 'Product B', itemQuantity: 1 },
        { orderid: 'ORD003', itemName: 'Product C', itemQuantity: 5 },
        { orderid: 'ORD004', itemName: 'Product D', itemQuantity: 3 },
        { orderid: 'ORD005', itemName: 'Product E', itemQuantity: 4 },
        { orderid: 'ORD006', itemName: 'Product F', itemQuantity: 2 },
        { orderid: 'ORD001', itemName: 'Product A', itemQuantity: 2 },
        { orderid: 'ORD002', itemName: 'Product B', itemQuantity: 1 },
        { orderid: 'ORD003', itemName: 'Product C', itemQuantity: 5 },
        { orderid: 'ORD004', itemName: 'Product D', itemQuantity: 3 },
        { orderid: 'ORD005', itemName: 'Product E', itemQuantity: 4 },
        { orderid: 'ORD006', itemName: 'Product F', itemQuantity: 2 },
        { orderid: 'ORD001', itemName: 'Product A', itemQuantity: 2 },
        { orderid: 'ORD002', itemName: 'Product B', itemQuantity: 1 },
        { orderid: 'ORD003', itemName: 'Product C', itemQuantity: 5 },
        { orderid: 'ORD004', itemName: 'Product D', itemQuantity: 3 },
        { orderid: 'ORD005', itemName: 'Product E', itemQuantity: 4 },
        { orderid: 'ORD006', itemName: 'Product F', itemQuantity: 2 },
        // Add more products as needed
    ];

    return (
        <div className="product-list">
        {products.map((product) => (
            <div className="product-row" key={product.orderid}>
                <div className="product-column">{product.orderid}</div>
                <div className="product-column">{product.itemName}</div>
                <div className="product-column">{product.itemQuantity}</div>
                <div className="product-column">
                    <button className="track-order-button">Track Order</button>
                </div>
            </div>
        ))}
    </div>
    );
};

export default Trackgrid;
