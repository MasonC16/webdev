import React from 'react'

// TODO: Use useState to manage a model with fields:
// { name: '', price: '', stock: '', description: '' }
// TODO: Create a validate() that sets an errors object and returns boolean:
// - All fields required
// - price: number with up to 2 decimals, >= 0
// - stock: non-negative integer
// TODO: On submit: console.log the model; if valid, call onSubmit(normalizedData)

export default function ProductForm({ onSubmit }){
  const [model, setModel] = React.useState({ name: '', price: '', stock: '', description: '' })
  const [errors, setErrors] = React.useState({})

  function validate(){
    const newErrors = {}
    if (!model.name.trim()) newErrors.name = 'Name is required'
    if (!model.price.trim()) {
      newErrors.price = 'Price is required'
    } else {
      const price = parseFloat(model.price)
      if (isNaN(price)) {
        newErrors.price = 'Price must be a number'
      } else if (price < 0) {
        newErrors.price = 'Price must be non-negative'
      } else if (!/^\d+(\.\d{0,2})?$/.test(model.price)) {
        newErrors.price = 'Price must have up to 2 decimal places'
      }
    }
    if (!model.stock.trim()) {
      newErrors.stock = 'Stock is required'
    } else {
      const stock = parseInt(model.stock)
      if (isNaN(stock)) {
        newErrors.stock = 'Stock must be an integer'
      } else if (stock < 0) {
        newErrors.stock = 'Stock must be non-negative'
      }
    }
    if (!model.description.trim()) newErrors.description = 'Description is required'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  function handleSubmit(e){
    e.preventDefault()
    console.log('Submitting:', model)
    if (!validate()) return
    onSubmit({ name: model.name, price: Number(model.price), stock: Number(model.stock), description: model.description })
  }

  return (
    <form className="row g-3" onSubmit={handleSubmit} noValidate>
      <div className="col-md-6">
        <label className="form-label">Product Name</label>
        {/* TODO: Controlled input (value, onChange) and inline error */}
        <input className="form-control" value={model.name} onChange={(e) => setModel({...model, name: e.target.value})} />
        {errors.name && <div className="text-danger">{errors.name}</div>}
      </div>

      <div className="col-md-3">
        <label className="form-label">Price</label>
        {/* TODO */}
        <input className="form-control" value={model.price} onChange={(e) => setModel({...model, price: e.target.value})} />
        {errors.price && <div className="text-danger">{errors.price}</div>}
        <div className="form-text">Format: 12.34</div>
      </div>

      <div className="col-md-3">
        <label className="form-label">Stock</label>
        {/* TODO */}
        <input className="form-control" value={model.stock} onChange={(e) => setModel({...model, stock: e.target.value})} />
        {errors.stock && <div className="text-danger">{errors.stock}</div>}
      </div>

      <div className="col-12">
        <label className="form-label">Description</label>
        {/* TODO */}
        <textarea className="form-control" rows="3" value={model.description} onChange={(e) => setModel({...model, description: e.target.value})}></textarea>
      </div>

      <div className="col-12 d-flex gap-2">
        <button className="btn btn-primary" type="submit">Save Product</button>
      </div>
    </form>
  )
}
