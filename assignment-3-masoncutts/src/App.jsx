import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import ListView from './views/ListView'
import DetailView from './views/DetailView'
import CreateEditView from './views/CreateEditView'
import useProducts from './hooks/useProducts'

export default function App() {
  // TODO: wire up useProducts and pass data/handlers to views
  const api = useProducts()

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ListView /* {...api} */ />} />
        <Route path="products/:id" element={<DetailView /* {...api} */ />} />
        <Route path="new" element={<CreateEditView /* {...api} */ />} />
        <Route path="edit/:id" element={<CreateEditView /* {...api} */ />} />
        <Route path="*" element={<div className="alert alert-warning">Not Found</div>} />
      </Route>
    </Routes>
  )
}
