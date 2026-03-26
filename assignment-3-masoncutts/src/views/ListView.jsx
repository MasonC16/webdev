import React from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'

export default function ListView( { products, deleteProduct } ) {
  // TODO: search/filter/sort UI and derived list

  return (
    <div>
      <div className="d-flex gap-2 align-items-center mb-3">
        {/* TODO: Search input, Category filter, Sort controls */}
        <div className="text-muted">TODO: toolbar</div>
      </div>

      {/* TODO: empty state if none */}
      {(!products || products.lenght === 0) && (
        <div className="alert alert-info"> No products found. </div>
      )}

      <div className="row g-3">
        {/* TODO: map derived products to ProductCard elements */}
        {products && products.map(product => (
          <div key={product.id} className="col-md-4">
            <ProductCard
              product={product}
              onDelete={() => deleteProduct(product.id)}
            />
          </div>
        ))}
      </div>
    </div>
  )
}