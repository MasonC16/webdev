import React from 'react'
import ProductCard from './ProductCard'

/**
 * - If no products, show "No products available."
 * - Otherwise map products to <ProductCard />
 * - Do not mutate props; sorting/filtering should happen in parent.
 */
export default function ProductList(/* props */) {
  return (
    <div>
      <h2 className="h5 mb-3">Products</h2>
      <div className="alert alert-secondary">TODO: ProductList</div>
    </div>
  )
}
