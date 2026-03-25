import React from 'react'
import { Link, useParams } from 'react-router-dom'

export default function DetailView(/* { products } */) {
  const { id } = useParams()
  // TODO: find product by id and render fields

  return (
    <div>
      <div className="mb-3">
        <Link className="btn btn-sm btn-outline-secondary" to="/">← Back to products</Link>
      </div>

      <div className="alert alert-secondary">TODO: DetailView for id: {id}</div>
    </div>
  )
}
