import React from 'react'

/**
 * Toolbar with:
 * - Search input (filters by name as user types)
 * - Sort dropdown (name A–Z/Z–A, price low–high/high–low)
 * - Toggle button to show/hide the form
 *
 * Receive props for current values and onChange handlers.
 */
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
