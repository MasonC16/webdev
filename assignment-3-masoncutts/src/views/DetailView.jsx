import React from 'react'
import { Link, useParams } from 'react-router-dom'

export default function DetailView( { products, deleteProduct } ) {
  const { id } = useParams()
  // TODO: find product by id and render fields
  const product = products.find(p => p.id === id)

  if (!product) {
    return <div className="alert alert-warning">Product not found.</div>
  }

  return (
    <div>
      <div className="mb-3">
        <Link className="btn btn-sm btn-outline-secondary" to="/">← Back to products</Link>
      </div>

      <div className="card p-4">
        <h2>{product.name}</h2>

        <p><strong>Price: </strong> ${product.price}</p>
        <p><strong>Stock: </strong>{product.stock}</p>
        <p><strong>Category: </strong>{product.category}</p>

        <p>
          <strong>Description:</strong>{' '}
          {product.description || 'No description provided. '}
        </p>

        <div className="mt-3">
          <button
          className="btn btn-danger"
          onClick={()=> deleteProduct(product.id)}
          >
            Delete Product
          </button>
        </div>
      </div>
    </div>
  )
}