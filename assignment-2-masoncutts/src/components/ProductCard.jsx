import React from 'react'

// Product card component. Students implement edit/delete flows in App.jsx and pass handlers here.
export default function ProductCard({ product, onEdit, onDelete }) {
  return (
    <div className="card h-100 mb-3">
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">${product.price.toFixed(2)}</p>
        <p className="card-text">Stock: 
          {product.stock} {product.stock === 0 && <span className="text-danger">Out of Stock</span>}
        </p>
        <p className="card-text">
          {product.description.length > 100 ? product.description.slice(0, 100) + "..." : product.description}
        </p>
        <button className="btn btn-primary me-2" onClick={() => onEdit(product)} aria-label={`Edit ${product.name}`}>Edit</button>

        <button className="btn btn-danger" onClick={() => {if (window.confirm(`Are you sure you want to delete ${product.name}?`))
         onDelete(product.id);}} aria-label={`Delete ${product.name}`}> Delete </button>
      </div>
    </div>
  )
}