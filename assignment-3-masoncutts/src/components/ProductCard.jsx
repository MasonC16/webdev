import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard( { product, onOpen, onEdit, onDelete } ) {
  return (
    <div className="card h-100">
      <div className="card-body">
        {/* showing product name, formatted price, stock, description, and category */}
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text mb-1">Price: ${product.price.toFixed(2)}</p>
        <p className="card-text mb-1">Stock: {product.stock}</p>
        <p className="card-text mb-1">Description: {product.description}</p>
        <p className="card-text text-muted">{product.category}</p>
      </div>

      <div className="card-footer d-flex justify-content-end gap-2">
        {/* adding the View, Edit, and Delete buttons*/}
        <Link
          to={`/products/${product.id}`}
          className="btn btn-sm btn-outline-primary">
          View
        </Link>

        <Link
          to={`/edit/${product.id}`}
          className="btn btn-sm btn-warning">
          Edit
        </Link>

        <button
        className="btn btn-sm btn-danger" 
        onClick={() => onDelete(product.id)}>
          Delete
        </button>
      </div>
    </div>
  )
}