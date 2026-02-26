import React from 'react'
import ProductCard from './ProductCard'

/**
 * - If no products, show "No products available."
 * - Otherwise map products to <ProductCard />
 * - Do not mutate props; sorting/filtering should happen in parent.
 */
export default function ProductList({ products = [], onEdit, onDelete }) {
  if (products.length === 0) {
    return (
      <div>
        <h2 className="h5 mb-3">Products</h2>
        <div className="alert alert-secondary">No products available.</div>
      </div>
    )
  }

  return (
    <div>
      <h2 className="h5 mb-3">Products</h2>
      <div className="row">
        {products.map(product => (
          <div key={product.id} className="col-md-4">
            <ProductCard
          product={product} onEdit={onEdit} onDelete={onDelete} 
          />
          </div>
        ))}
      </div>
    </div>
  );
}