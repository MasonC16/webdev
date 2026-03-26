import React, { useState } from 'react'

/**
 * Controlled form with inline validation.
 * Props: { initial, onSave, onCancel }
 */
export default function ProductForm({ initial, onSave, onCancel }) {
  const [form, setForm] = useState({
    name: initial?.name || '',
    price: initial?.price || '',
    stock: initial?.stock || '',
    category: initial?.category || '',
    description: initial?.description || ''
  })

  const [errors, setErrors] = useState({})

  function handleChange(e) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  function validate() {
    const newErrors = {}

    if (!form.name) newErrors.name = 'Name is required'
    if (form.price === '' || form.price <= 0) newErrors.price = 'Price must be greater than 0'
    if (form.stock === '' || form.stock <= 0) newErrors.stock = 'Stock must be greater than 0'

    return newErrors
  }

  function handleSubmit(e) {
    e.preventDefault()
    // TODO: validate and call onSave

    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    onSave({
      ...form,
      price: Number(form.price),
      stock: Number(form.stock)
    })
  }

  return (
    <form className="row g-3" onSubmit={handleSubmit} noValidate>
      <div className="col-md-6">
        <label className="form-label">Name</label>
        {/* TODO: controlled input + error */}
        <input
          name="name"
          className="form-control"
          value={form.name}
          onChange={handleChange}
        />
        {errors.name && <div className="text-danger">{errors.name}</div>}
      </div>

      <div className="col-md-3">
        <label className="form-label">Price</label>
        {/* TODO: controlled input + error */}
        <input
          type="number"
          name="price"
          className="form-control"
          value={form.price}
          onChange={handleChange}
        />
        <div className="form-text">Format: 12.34</div>
        {errors.price && <div className="text-danger">{errors.price}</div>}
      </div>

      <div className="col-md-3">
        <label className="form-label">Stock</label>
        {/* TODO: controlled input + error */}
        <input
          type="number"
          name="stock"
          className="form-control"
          value={form.stock}
          onChange={handleChange}
        />
        {errors.stock && <div className="text-danger">{errors.stock}</div>}
      </div>

      <div className="col-md-6">
        <label className="form-label">Category</label>
        {/* TODO: select + error */}
        <select
          name="category"
          className="form-select"
          value={form.category}
          onChange={handleChange}
        >
          <option value="">Choose…</option>
          <option value="Electronics">Electronics</option>
          <option value="Accessories">Accessories</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="col-12">
        <label className="form-label">Description</label>
        {/* TODO: controlled textarea + error */}
        <textarea
          name="description"
          className="form-control"
          rows="3"
          value={form.description}
          onChange={handleChange}
        />
      </div>

      <div className="col-12 d-flex gap-2">
        <button className="btn btn-primary" type="submit">Save</button>
        {/* TODO: Cancel button in edit mode */}
        {onCancel && (
          <button
            type="button"
            className="btn btn-secondary"
            onClick={onCancel}
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  )
}