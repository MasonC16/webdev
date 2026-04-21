import React, { useState } from 'react'

export default function ItemForm({ initial, onSave, onCancel }) {
  const [form, setForm] = useState(
    initial || {
      name: '',
      category: '',
      price: '',
      rating: '',
      description: ''
    }
  )

  const [errors, setErrors] = useState({})

  const validate = () => {
    const err = {}

    if (!form.name) err.name = 'Name is required'
    if (!form.category) err.category = 'Category is required'

    if (form.price === '') {
      err.price = 'Price is required'
    } else if (form.price < 0) {
      err.price = 'Price must be greater or equal to 0'
}

    if (form.rating === '') {
      err.rating = 'Rating is required'
    } else if (form.rating < 0 || form.rating > 5) {
      err.rating = 'Rating must be between 0 and 5'
    }

    return err
  }

  const handleBlur = () => {
    setErrors(validate())
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const err = validate()
    setErrors(err)

    if (Object.keys(err).length > 0) return

    onSave(form)
  }

  return (
    <form className="row g-3" onSubmit={handleSubmit} noValidate>

      {/* Name */}
      <div className="col-md-6">
        <input
          className="form-control"
          placeholder="Name"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
          onBlur={handleBlur}
        />
        {errors.name && <div className="text-danger">{errors.name}</div>}
      </div>

      {/* Category */}
      <div className="col-md-6">
        <input
          className="form-control"
          placeholder="Category"
          value={form.category}
          onChange={e => setForm({ ...form, category: e.target.value })}
          onBlur={handleBlur}
        />
        {errors.category && <div className="text-danger">{errors.category}</div>}
      </div>

      {/* Price */}
      <div className="col-md-6">
        <input
          type="number"
          className="form-control"
          placeholder="Price"
          value={form.price}
          onChange={e => setForm({...form, price: e.target.value === '' ? '' : Number(e.target.value) })}
          onBlur={handleBlur}
        />
        {errors.price && <div className="text-danger">{errors.price}</div>}
      </div>

      {/* Rating */}
      <div className="col-md-6">
        <input
          type="number"
          className="form-control"
          placeholder="Rating (0–5)"
          value={form.rating}
          onChange={e => setForm({...form, rating: e.target.value === '' ? '' : Number(e.target.value) })}
          onBlur={handleBlur}
        />
        {errors.rating && <div className="text-danger">{errors.rating}</div>}
      </div>

      {/* Description */}
      <div className="col-12">
        <textarea
          className="form-control"
          placeholder="Description"
          value={form.description}
          onChange={e => setForm({ ...form, description: e.target.value })}
        />
      </div>

      {/* Buttons */}
      <div className="col-12 d-flex gap-2">
        <button className="btn btn-primary" type="submit">Save</button>

        <button
          type="button"
          className="btn btn-secondary"
          onClick={onCancel}
        >
          Cancel
        </button>
      </div>
    </form>
  )
}