import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ProductForm from '../components/ProductForm'

export default function CreateEditView( { products, addProduct, updateProduct } ) {
  const { id } = useParams()
  const navigate = useNavigate()

  // if id present, preload data and onSave should update; else create
  const existingProduct = products.find(p => p.id === id)

  function handleSave(data){
    if (id) {
      updateProduct(id,data)
    } else {
      addProduct(data)
    }

    navigate('/') // go back to list after saving
  }

  return (
    <div>
      <h2 className="h5 mb-3">{id ? 'Edit Product' : 'Add Product'}</h2>
      <ProductForm 
      initial={existingProduct} 
      onSave={handleSave} 
      onCancel={() => navigate(-1)} 
      />
    </div>
  )
}