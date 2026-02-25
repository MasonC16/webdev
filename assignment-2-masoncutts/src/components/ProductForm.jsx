import React from 'react'

/**
 * Controlled form with inline validation.
 * Fields: name, price, stock, description.
 * - Show errors under inputs (on blur and on submit).
 * - On valid submit, call onSave(product). Parent decides create vs edit.
 * - Support Edit mode: parent provides initial values and a cancel action.
 */
export default function ProductForm(/* props */) {
  function handleSubmit(e) {
    e.preventDefault()
    // validate; if ok, onSave(normalizedProduct)
  }

  return (
    <form className="row g-3" onSubmit={handleSubmit} noValidate>
      <div className="col-md-6">
        <label className="form-label">Product Name</label>
        {/* controlled input + error */}
        <input className="form-control" />
      </div>

      <div className="col-md-3">
        <label className="form-label">Price</label>
        {/* controlled input + error */}
        <input className="form-control" />
        <div className="form-text">Format: 12.34</div>
      </div>

      <div className="col-md-3">
        <label className="form-label">Stock</label>
        {/* controlled input + error */}
        <input className="form-control" />
      </div>

      <div className="col-12">
        <label className="form-label">Description</label>
        {/* controlled textarea + error */}
        <textarea className="form-control" rows="3"></textarea>
      </div>

      <div className="col-12 d-flex gap-2">
        <button className="btn btn-primary" type="submit">
          Save
        </button>

        {/* Show Cancel in edit mode */}
      </div>
    </form>
  )
}
