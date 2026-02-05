import React from 'react'
import ProductItem from './ProductItem'

export default function ProductList({ items, onDelete }){
  // if items is empty, show "No products available." otherwise, map items to <ProductItem />
  if (items.length === 0) {
        return <div className="alert alert-info">No products available.</div>
      }

  return (
    <div>
      <h2 className="h5 mb-3">Products</h2>

      {items.map(item => (
        <div className="mb-3" key={item.id}>
          <ProductItem product={item} onDelete={onDelete} />
        </div>
      ))}
      
    </div>
  )
}