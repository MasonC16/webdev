import { useEffect, useState } from 'react'
const STORAGE_KEY = 'a3_products'

export default function useProducts() {
  const [products, setProducts] = useState([])
  const [loaded, setLoaded] = useState(false)

  // loading from localStorage once on mount
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

  // persisting to localStorage whenever products change
  useEffect(() => {
    if (!loaded) return

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(products))
    } catch (err) {
      console.error('Failed to save products to localStorage:', err)
    }
  }, [products, loaded])

  // implementing addProduct(data)
  function addProduct(data) {
    const newProduct = {
      id: crypto.randomUUID(),
      ...data
    }
    setProducts(prev => [...prev, newProduct])
  }

  // implement updateProduct(id, patch)
  function updateProduct(id, patch) {
    setProducts(prev =>
      prev.map(product => product.id === id 
        ? { ...product, ...patch } 
        : product
      )
    )    
  }

  // implement deleteProduct(id)
  function deleteProduct(id) {
    setProducts(prev =>
      prev.filter(product => product.id !== id)
    )
  }

  // implement resetStorage()
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