import React, { useEffect, useMemo, useState } from 'react'
import Toolbar from './components/Toolbar'
import Message from './components/Message'
import ProductList from './components/ProductList'
import ProductForm from './components/ProductForm'
import { readAll, writeAll, resetAll } from './storage/storage'


export default function App() {
  // Products
  const [products, setProducts] = useState([])

  // UI
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState(null)

  // Toolbar
  const [query, setQuery] = useState('')
  const [sortKey, setSortKey] = useState('name-asc')

  // Banners
  const [banner, setBanner] = useState(null)

  // Load products from localStorage on mount
  useEffect(() => {
    const saved = readAll()
    setProducts(saved)
  }, [])

  // Save products to localStorage on change
  useEffect(() => {
    try {
      writeAll(products)
    } catch (error) {
      setBanner({ type: 'danger', text: 'Failed to save products' })
    }
  }, [products])

  // Auto-dismiss banner
  useEffect(() => {
    if (banner) {
      const timeout = setTimeout(() => setBanner(null), 2000)
      return () => clearTimeout(timeout)
    }
  }, [banner])

  // Derived list
  const visible = useMemo(() => {
    let list = [...products]
    
    // filter
    if (query.trim() !== '') {
      list = list.filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase())
      )
    }

    //sort 
    list.sort((a, b) => {
      if (sortKey === 'name-asc') return a.name.localeCompare(b.name)
      if (sortKey === 'name-desc') return b.name.localeCompare(a.name)
      if (sortKey === 'price-asc') return a.price - b.price
      if (sortKey === 'price-desc') return b.price - a.price
      return 0
  })
  return list
  }, [products, query, sortKey])

  function handleSave(product) {
    if (editingId) {
      // update
      const updated = products.map((p) => (p.id === editingId ? {...p, ...product} : p))
      setProducts(updated)
      setBanner({ type: 'success', text: 'Product updated' })
    } else {
      // create
      const newProduct = { ...product, id: crypto.randomUUID() }
      setProducts([...products, newProduct])
      setBanner({ type: 'success', text: 'Product created' })
    }
    setEditingId(null)
    setShowForm(false)
  }

  function handleDelete(id) {
    // delete
    const filtered = products.filter((p) => p.id !== id)
    setProducts(filtered)
    setBanner({ type: 'success', text: 'Product deleted' })
  }

  function handleResetStorage() {
    // clear persisted products
    try{
      resetAll()
      setProducts([])
      setBanner({ type: 'success', text: 'Storage reset' })
    }catch(error) {
      setBanner({ type: 'danger', text: 'Failed to reset storage' })
    }
  }

  function startEdit(id) {
    setEditingId(id)
    setShowForm(true)
  }

  function startCreate() {
    setEditingId(null)
    setShowForm(true)
  }

  //find products being edited
  const editingProduct = products.find((p) => p.id === editingId)

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
        search={query}
        onSearchChange={setQuery}
        sort={sortKey}
        onSortChange={setSortKey}
        showForm={showForm}
        onToggleForm={() => setShowForm(prev => !prev)}
      />

      {banner && (<Message
        type={banner.type}
        text={banner.text}
      />)}

      {showForm ? (
        <div className="mb-3">
          <ProductForm
            name={editingProduct?.name || ''}
            price={editingProduct?.price || ''}
            stock={editingProduct?.stock || ''}
            description={editingProduct?.description || ''}
            onSave={handleSave}
            onCancel={() => {
              setEditingId(null)
              setShowForm(false)}}
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
        products={visible}
        onEdit={(product) => startEdit(product.id)}
        onDelete={handleDelete}
      />
    </div>
  )
}