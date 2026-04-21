import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ItemForm from '../components/ItemForm'
import { ItemsContext } from '../context/ItemsContext'

export default function CreateEditView(){
  const { id } = useParams()
  const navigate = useNavigate()
  const { items, addItem, updateItem } = useContext(ItemsContext)

  // Find existing item
  const existingItem = items.find(item => item.id === id)

  // Handle save
  const handleSave = (data) => {
    if (id) {
      updateItem(id, data)
    } else {
      addItem({ ...data, id: crypto.randomUUID() })
    }

    navigate('/list')
  }

  return (
    <div>
      <h2 className="h5 mb-3">
        {id ? 'Edit Item' : 'Add Item'}
      </h2>

      <ItemForm
        initial={existingItem || {
          name: '',
          category: '',
          price: '',
          rating: '',
          description: ''
        }}
        onSave={handleSave}
        onCancel={() => navigate(-1)}
      />
    </div>
  )
}