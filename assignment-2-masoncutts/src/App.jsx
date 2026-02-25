import React, { useEffect, useMemo, useState } from 'react'
import Toolbar from './components/Toolbar'
import Message from './components/Message'
import ProductList from './components/ProductList'
import ProductForm from './components/ProductForm'

/**
 * Shell-only app. Students must implement:
 * - localStorage read/write with try/catch (see storage.js)
 * - create, edit, delete flows
 * - search & sort (in memory)
 * - confirmation banners that auto-dismiss
 */

export default function App() {
  // Products
  const [products, setProducts] = useState([])

  // UI
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState(null) // null=create; string=edit

  // Toolbar
  const [query, setQuery] = useState('')
  const [sortKey, setSortKey] = useState('name') // 'name' | 'price'
  const [sortDir, setSortDir] = useState('asc') // 'asc' | 'desc'

  // Banners
  const [banner, setBanner] = useState(null) // { type, text } | null

  // Derived list (students implement filter/sort)
  const visible = useMemo(() => {
    return products
  }, [products, query, sortKey, sortDir])

  // Auto-dismiss banner (students implement)
  useEffect(() => {
    // if (banner) setTimeout(() => setBanner(null), 2000)
  }, [banner])

  function handleSave(product) {
    // create vs update
  }

  function handleDelete(id) {
    // delete
  }

  function handleResetStorage() {
    // clear persisted products
  }

  function startEdit(id) {
    setEditingId(id)
    setShowForm(True)
  }

  function startCreate() {
    setEditingId(null)
    setShowForm(true)
  }

  return (
    <div className="container py-3">
      <header className="mb-3 d-flex justify-content-between align-items-center">
        <h1 className="h3 m-0">Product Manager</h1>

        <button
          className="btn btn-sm btn-outline-secondary"
          onClick={handleResetStorage}
        >
          Reset Storage
        </button>
      </header>

      <Toolbar
        /* query, setQuery, sortKey, setSortKey, sortDir, setSortDir, showForm, setShowForm */
      />

      {banner && <Message /* type, text */ />}

      {showForm ? (
        <div className="mb-3">
          <ProductForm
            /* initialValues (if editing), onSave, onCancel */
          />
        </div>
      ) : (
        <div className="mb-3">
          <button className="btn btn-primary" onClick={startCreate}>
            Add Product
          </button>
        </div>
      )}

      <ProductList
        /* products={visible} onEdit={startEdit} onDelete={handleDelete} */
      />
    </div>
  )
}
