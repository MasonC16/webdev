import React from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'

export default function ListView( { products, deleteProduct } ) {
  // TODO: search/filter/sort UI and derived list
  const [search, setSearch] = React.useState('')
  const [category, setCategory] = React.useState('')
  const [sort, setSort] = React.useState('')

  let filteredProducts = [...products]

  filteredProducts = filteredProducts.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  )

  //filter
  if (category) {
    filteredProducts = filteredProducts.filter(p => p.category === category)
  }

  //sort
  if (sort === 'name') {
    filteredProducts.sort((a, b) => a.name.localeCompare(b.name))
  }

  if (sort === 'price') {
    filteredProducts.sort((a, b) => a.price - b.price)
  }

  return (
    <div>
      <div className="d-flex gap-2 align-items-center mb-3">
        {/* TODO: Search input, Category filter, Sort controls */}
        <input
          type="text"
          placeholder="search..."
          className="form-control"
          value={search}
          onChange={e => setSearch(e.target.value)}
          />
        <select
          className="form-select"
          value={category}
          onChange={e => setCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Accessories">Accessories</option>
          <option value="Other">Other</option>
        </select>

        <select
          className="form-select"
          value={sort}
          onChange={e => setSort(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="name">Name</option>
          <option value="price">Price</option>
        </select>
      </div>

      {/* TODO: empty state if none */}
      {filteredProducts.length === 0 && (
        <div className="alert alert-info"> No products found. </div>
      )}

      <div className="row g-3">
        {/* TODO: map derived products to ProductCard elements */}
        {filteredProducts.map(product => (
          <div key={product.id} className="col-md-4">
            <ProductCard
              product={product}
              onDelete={deleteProduct}
            />
          </div>
        ))}
      </div>
    </div>
  )
}