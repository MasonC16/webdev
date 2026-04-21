import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ItemsContext } from '../context/ItemsContext'

export default function DetailView(){
  const { id } = useParams()
  const { items } = useContext(ItemsContext)

  // Find item by id
  const item = items.find(i => i.id === id)

  return (
    <div>
      <div className="mb-3">
        <Link className="btn btn-sm btn-outline-secondary" to="/list">
           Back to list
        </Link>
      </div>

      {/* Not found state */}
      {!item && (
        <div className="alert alert-warning">
          Item not found
        </div>
      )}

      {/* Item details */}
      {item && (
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">{item.name}</h3>

            <p><strong>Category:</strong> {item.category}</p>
            <p><strong>Price:</strong> ${item.price}</p>
            <p><strong>Rating:</strong> {item.rating}</p>

            {item.description && (
              <p className="text-muted">{item.description}</p>
            )}
          </div>

          <div className="card-footer">
            <Link
              to={`/edit/${item.id}`}
              className="btn btn-sm btn-primary"
            >
              Edit
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}