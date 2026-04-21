import React from 'react'
import { Link } from 'react-router-dom'

export default function ItemCard({ item, onView, onEdit, onDelete }) {
  return (
    <div className="card h-100">
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        
        <p className="card-text mb-1">
          <strong>Category:</strong> {item.category}
        </p>

        <p className="card-text mb-1">
          <strong>Price:</strong> ${item.price}
        </p>

        <p className="card-text mb-1">
          <strong>Rating:</strong> {item.rating}
        </p>

        {item.description && (
          <p className="card-text text-muted">
            {item.description}
          </p>
        )}
      </div>

      <div className="card-footer d-flex justify-content-end gap-2">
        {/* Navigation */}
        <Link
          to={`/item/${item.id}`}
          className="btn btn-sm btn-outline-primary"
        >
          View
        </Link>

        <Link
          to={`/edit/${item.id}`}
          className="btn btn-sm btn-outline-secondary"
        >
          Edit
        </Link>

        {/* Delete */}
        <button
          className="btn btn-sm btn-danger"
          onClick={() => onDelete(item.id)}
        >
          Delete
        </button>
      </div>
    </div>
  )
}