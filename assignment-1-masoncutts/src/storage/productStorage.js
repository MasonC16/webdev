// Implement localStorage-based persistence using JSON.parse / JSON.stringify.
export const STORAGE_KEY = 'a1_products';

// return an array of products from localStorage (or [] if none)
export function getAllProducts() {
  const productsJson = localStorage.getItem(STORAGE_KEY)
  if (!productsJson) return []

  try {
    const products = JSON.parse(productsJson)
    if (Array.isArray(products)) {
      return products
    } else {
      return []
    }
  } catch (e) {
    return []
  }
}

// persist a product into storage
export function addProduct(product) {
  const products = getAllProducts()
  products.push(product)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(products))
}

// remove a product by id and persist
export function removeProduct(id) {
  const products = getAllProducts()
  const filteredProducts = products.filter(product => product.id !== id)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredProducts))
  
}