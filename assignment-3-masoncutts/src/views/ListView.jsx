import React from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'

export default function ListView(/* { products, onDelete, ...toolbar handlers } */) {
  // TODO: search/filter/sort UI and derived list

  return (
    <div>
      <div className="d-flex gap-2 align-items-center mb-3">
        {/* TODO: Search input, Category filter, Sort controls */}
        <div className="text-muted">TODO: toolbar</div>
      </div>

      {/* TODO: empty state if none */}

      <div className="row g-3">
        {/* TODO: map derived products to ProductCard elements */}
        <div className="col-12">
          <div className="alert alert-secondary">TODO: render product grid</div>
        </div>
      </div>
    </div>
  )
}
