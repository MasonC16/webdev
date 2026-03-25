import { useEffect, useState } from 'react'

const STORAGE_KEY = 'a3_products'

/**
 * Custom hook contract (student to implement):
 * Returns: { products, addProduct, updateProduct, deleteProduct, resetStorage }
 * - Initialize products from localStorage on mount
 * - Persist products on change (useEffect)
 * - Wrap JSON ops with try/catch
 */
export default function useProducts() {
  const [products, setProducts] = useState([])

  // TODO: load from localStorage once on mount

  // TODO: persist to localStorage whenever products change

  // TODO: implement addProduct(data)

  // TODO: implement updateProduct(id, patch)

  // TODO: implement deleteProduct(id)

  // TODO: implement resetStorage()

  return { products /*, addProduct, updateProduct, deleteProduct, resetStorage */ }
}
