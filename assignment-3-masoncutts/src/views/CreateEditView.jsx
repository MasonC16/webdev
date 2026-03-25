import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ProductForm from '../components/ProductForm'

export default function CreateEditView(/* { products, addProduct, updateProduct } */) {
  const { id } = useParams()
  const navigate = useNavigate()
  // TODO: if id present, preload data and onSave should update; else create

  return (
    <div>
      <h2 className="h5 mb-3">{id ? 'Edit Product' : 'Add Product'}</h2>
      <ProductForm /* initial={} onSave={} onCancel={() => navigate(-1)} */ />
    </div>
  )
}
