import React from 'react'

// Stateless toolbar with search, sort, and toggle form button. Students implement
export default function Toolbar({ search, onSearchChange, sort, onSortChange, showForm, onToggleForm }) {
  return (
    <div className="d-flex flex-column flex-md-row gap-2 align-items-md-center mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Search products..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <select className="form-select" value={sort} onChange={(e) => onSortChange(e.target.value)}>
        <option value="name-asc">Name (A-Z)</option>
        <option value="name-desc">Name (Z-A)</option>
        <option value="price-asc">Price (Low-High)</option>
        <option value="price-desc">Price (High-Low)</option>
      </select>
      <button className="btn btn-outline-primary" onClick={onToggleForm}>
        {showForm ? "Hide Form" : "Show Form"}
      </button>
    </div>
  )
}
