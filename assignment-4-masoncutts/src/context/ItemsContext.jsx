import React, { createContext, useContext } from 'react'
import useItems from '../hooks/useItems'

// Create context
export const ItemsContext = createContext(null)

// Provider
export function ItemsProvider({ children }) {
  const itemsData = useItems()

  return (
    <ItemsContext.Provider value={itemsData}>
      {children}
    </ItemsContext.Provider>
  )
}

// Helper hook
export function useItemsContext() {
  return useContext(ItemsContext)
}