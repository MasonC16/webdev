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
  const [loaded, setLoaded] = useState(false)

  // TODO: load from localStorage once on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        setProducts(JSON.parse(stored))
      }
    } catch (err) {
      console.error('Failed to load products from localStorage:', err)
      setProducts([]) // fallback to empty array on error
    } finally {
      setLoaded(true)
    }
  }, [])

  // TODO: persist to localStorage whenever products change
  useEffect(() => {

    if (!loaded) return

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(products))
    } catch (err) {
      console.error('Failed to save products to localStorage:', err)
    }
  }, [products, loaded])

  // TODO: implement addProduct(data)
  function addProduct(data) {
    const newProduct = {
      id: crypto.randomUUID(),
      ...data
    }
    setProducts(prev => [...prev, newProduct])
  }

  // TODO: implement updateProduct(id, patch)
  function updateProduct(id, patch) {
    setProducts(prev =>
      prev.map(product => product.id === id 
        ? { ...product, ...patch } 
        : product
      )
    )    
  }

  // TODO: implement deleteProduct(id)
  function deleteProduct(id) {
    setProducts(prev =>
      prev.filter(product => product.id !== id)
    )
  }

  // TODO: implement resetStorage()
  function resetStorage() {
    try{
      localStorage.removeItem(STORAGE_KEY)
      setProducts([])
    } catch (err) {
      console.error('Failed to reset products in localStorage:', err)
    }
  }

  return { products, addProduct, updateProduct, deleteProduct, resetStorage}
}