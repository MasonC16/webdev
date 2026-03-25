import React from 'react'

/**
 * Controlled form with inline validation.
 * Props: { initial, onSave, onCancel }
 */
export default function ProductForm(/* props */) {
  function handleSubmit(e) {
    e.preventDefault()
    // TODO: validate and call onSave
  }

  return (
    <form className="row g-3" onSubmit={handleSubmit} noValidate>
      <div className="col-md-6">
        <label className="form-label">Name</label>
        {/* TODO: controlled input + error */}
        <input className="form-control" />
      </div>

      <div className="col-md-3">
        <label className="form-label">Price</label>
        {/* TODO: controlled input + error */}
        <input className="form-control" />
        <div className="form-text">Format: 12.34</div>
      </div>

      <div className="col-md-3">
        <label className="form-label">Stock</label>
        {/* TODO: controlled input + error */}
        <input className="form-control" />
      </div>

      <div className="col-md-6">
        <label className="form-label">Category</label>
        {/* TODO: select + error */}
        <select className="form-select">
          <option value="">Choose…</option>
        </select>
      </div>

      <div className="col-12">
        <label className="form-label">Description</label>
        {/* TODO: controlled textarea + error */}
        <textarea className="form-control" rows="3"></textarea>
      </div>

      <div className="col-12 d-flex gap-2">
        <button className="btn btn-primary" type="submit">Save</button>
        {/* TODO: Cancel button in edit mode */}
      </div>
    </form>
  )
}
