import React, { useState, useContext } from 'react'
import ItemCard from '../components/ItemCard'
import { ItemsContext } from '../context/ItemsContext'

export default function ListView(){
  const { items, deleteItem } = useContext(ItemsContext)

  // UI state
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('')
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')
  const [sortKey, setSortKey] = useState('price')
  const [sortDir, setSortDir] = useState('asc')

  // Derived list
  const filtered = items
    .filter(item =>
      (item.name || '').toLowerCase().includes(search.toLowerCase())
    )
    .filter(item =>
      category ? item.category === category : true
    )
    .filter(item =>
      minPrice !== '' ? item.price >= Number(minPrice) : true
    )
    .filter(item =>
      maxPrice !== '' ? item.price <= Number(maxPrice) : true
    )
    .sort((a, b) => {
      let result = 0

      if (sortKey === 'price') {
        result = a.price - b.price
      } else if (sortKey === 'rating') {
        result = a.rating - b.rating
      }

      return sortDir === 'asc' ? result : -result
    })

  return (
    <div>
      {/* Controls */}
      <div className="row g-2 align-items-end mb-3">

        {/* Search */}
        <div className="col-md">
          <input
            className="form-control"
            placeholder="Search..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>

        {/* Category */}
        <div className="col-md">
          <input
            className="form-control"
            placeholder="Category"
            value={category}
            onChange={e => setCategory(e.target.value)}
          />
        </div>

        {/* Min Price */}
        <div className="col-md">
          <input
            type="number"
            className="form-control"
            placeholder="Min Price"
            value={minPrice}
            onChange={e => setMinPrice(e.target.value)}
          />
        </div>

        {/* Max Price */}
        <div className="col-md">
          <input
            type="number"
            className="form-control"
            placeholder="Max Price"
            value={maxPrice}
            onChange={e => setMaxPrice(e.target.value)}
          />
        </div>

        {/* Sort Key */}
        <div className="col-md">
          <select
            className="form-select"
            value={sortKey}
            onChange={e => setSortKey(e.target.value)}
          >
            <option value="price">Price</option>
            <option value="rating">Rating</option>
          </select>
        </div>

        {/* Sort Direction */}
        <div className="col-md">
          <select
            className="form-select"
            value={sortDir}
            onChange={e => setSortDir(e.target.value)}
          >
            <option value="asc">Asc</option>
            <option value="desc">Desc</option>
          </select>
        </div>
      </div>

      {/* Items + Empty States */}
      <div className="row g-3">

        {/* No data */}
        {items.length === 0 && (
          <div className="col-12">
            <div className="alert alert-info">No data yet</div>
          </div>
        )}

        {/* No results */}
        {items.length > 0 && filtered.length === 0 && (
          <div className="col-12">
            <div className="alert alert-warning">No results found</div>
          </div>
        )}

        {/* Items */}
        {filtered.map(item => (
          <div className="col-md-4" key={item.id}>
            <ItemCard
              item={item}
              onDelete={deleteItem}
            />
          </div>
        ))}
      </div>
    </div>
  )
}