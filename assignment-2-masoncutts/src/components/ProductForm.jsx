import React, { useEffect } from 'react'

/**
 * Controlled form with inline validation.
 * Fields: name, price, stock, description.
 * - Show errors under inputs (on blur and on submit).
 * - On valid submit, call onSave(product). Parent decides create vs edit.
 * - Support Edit mode: parent provides initial values and a cancel action.
 */
export default function ProductForm({ name = '', price = '', stock = '', description = '', onSave, onCancel }) {

  const [errors, setErrors] = React.useState({})
  const [formData, setFormData] = React.useState({ name, price, stock, description })

  useEffect(() => {
    setFormData({ name, price, stock, description })
  }, [name, price, stock, description])


  function validateField(e) {
    const { name, value } = e.target;
    let error = '';

    if (!value.trim()){
      error = 'This field is required.';
    } else if (name === 'price') {
      const num = parseFloat(value);
      if (isNaN(num) || num < 0) {
        error = 'Price must be a positive number.';
      }
    } else if (name === 'stock') {
      const num = parseInt(value);
      if (isNaN(num) || num < 0) {
        error = 'Stock must be a positive integer.';
      }
    }

    setErrors(prev => ({ ...prev, [name]: error }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.description.trim()) newErrors.description = 'Description is required.';
    if (!formData.price || parseFloat(formData.price) <= 0) newErrors.price = 'Price must be a positive number.';
    if (!Number.isInteger(parseInt(formData.stock)) || parseInt(formData.stock) < 0) newErrors.stock = 'Stock must be a positive integer.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onSave({
      name: formData.name.trim(),
      price: parseFloat(formData.price),
      stock: parseInt(formData.stock),
      description: formData.description.trim()
    });

    setFormData({ name: '', price: '', stock: '', description: '' });
    setErrors({});
  }
  

  return (
    <form className="row g-3" onSubmit={handleSubmit} noValidate>
      <div className="col-md-6">
        <label htmlFor="name" className="form-label">Product Name</label>
        <input className="form-control" id="name" name="name" value={formData.name} 
        onChange={(e) => setFormData({...formData, name: e.target.value})} onBlur={validateField} />
        {errors.name && <div className="form-text text-danger">{errors.name}</div>}
      </div>

      <div className="col-md-3">
        <label htmlFor="price" className="form-label">Price</label>
        <input className="form-control" id="price" name="price" value={formData.price} 
        onChange={(e) => setFormData({...formData, price: e.target.value})} onBlur={validateField} />
        {errors.price && <div className="form-text text-danger">{errors.price}</div>}
      </div>

      <div className="col-md-3">
        <label htmlFor="stock" className="form-label">Stock</label>
        <input className="form-control" id="stock" name="stock" value={formData.stock} 
        onChange={(e) => setFormData({...formData, stock: e.target.value})} onBlur={validateField} />
        {errors.stock && <div className="form-text text-danger">{errors.stock}</div>}
      </div>

      <div className="col-12">
        <label htmlFor="description" className="form-label">Description</label>
        <textarea className="form-control" id="description" rows="3" value={formData.description} 
        onChange={(e) => setFormData({...formData, description: e.target.value})} onBlur={validateField}> </textarea>
        {errors.description && <div className="form-text text-danger">{errors.description}</div>}
      </div>

      <div className="col-12 d-flex gap-2">
        <button className="btn btn-primary" type="submit"> Save </button>
        {onCancel && (
          <button className="btn btn-secondary" type="button" onClick={onCancel}> cancel </button>
        )}
      </div>
    </form>
  );
}
