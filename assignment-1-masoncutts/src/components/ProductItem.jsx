import React from 'react'

export default function ProductItem({ product, onDelete }){
  // render a Bootstrap card with product details and a Delete button
  return (
    <div className="border rounded p-3">
      <h3 className="h6">{product.name}</h3>
      <p className="mb-1">Price: ${product.price.toFixed(2)}</p>
      <p className="mb-1">Stock: {product.stock}</p>
      <p className="mb-3">{product.description}</p>
      <button className="btn btn-sm btn-danger" onClick={() => onDelete(product.id)}>Delete</button>
    </div>
  )
}