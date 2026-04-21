import { useEffect, useState } from 'react'

const STORAGE_KEY = 'products_app'

export default function useItems(){
  // Load from localStorage
  const [items, setItems] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      return stored ? JSON.parse(stored) : []
    } catch {
      return []
    }
  })

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [items])

  // Add item
  function addItem(item){
    setItems(prev => [...prev, item])
  }

  // Update item
  function updateItem(id, updatedItem){
    setItems(prev =>
      prev.map(item => item.id === id ? updatedItem : item)
    )
  }

  // Delete item
  function deleteItem(id){
    setItems(prev => prev.filter(item => item.id !== id))
  }

  return {
    items,
    addItem,
    updateItem,
    deleteItem
  }
}