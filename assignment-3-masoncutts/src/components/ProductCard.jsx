import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard( { product, onOpen, onEdit, onDelete } ) {
  return (
    <div className="card h-100">
      <div className="card-body">
        {/* TODO: show name, formatted price, stock, description */}
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text mb-1">Price: ${product.price}</p>
        <p className="card-text mb-1">Stock: {product.stock}</p>
        <p className="card-text text-muted">{product.category}</p>
      </div>

      <div className="card-footer d-flex justify-content-end gap-2">
        {/* TODO: buttons: View / Edit / Delete */}
        <Link
          to={`/products/${product.id}`}
          className="btn btn-sm btn-outline-primary"
          >
            View
          </Link>

        <button
        className="btn btn-sm btn-danger" 
        onClick={() => onDelete(product.id)}
        >
          Delete
        </button>

      </div>
    </div>
  )
}
