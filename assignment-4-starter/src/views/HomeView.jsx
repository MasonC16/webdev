import React from 'react'
import { Link } from 'react-router-dom'

export default function HomeView(){
  return (
    <div className="p-4 bg-light rounded">
      <h2 className="h4 mb-3">Welcome to the Product Catalog</h2>

      <p className="mb-4">
        This app lets you create, view, edit, and manage products.
        You can search, filter, and sort items, and your data is saved locally.
      </p>

      <div className="d-flex gap-2">
        <Link to="/list" className="btn btn-outline-primary">
          View Products
        </Link>

        <Link to="/new" className="btn btn-primary">
          Add New Product
        </Link>
      </div>
    </div>
  )
}