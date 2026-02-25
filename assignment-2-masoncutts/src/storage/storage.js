export const STORAGE_KEY = 'a2_products'

/**
 * Return an array of products from localStorage.
 * Safely parse JSON with try/catch.
 * Return [] if missing or malformed.
 */
export function readAll() {
  /* your code */
}

/**
 * Persist the full list of products to localStorage.
 * Use JSON.stringify with try/catch.
 * If write fails (quota), surface an error to the caller.
 */
export function writeAll(list) {
  /* your code */
}

/**
 * Clear all persisted products.
 */
export function resetAll() {
  /* your code */
}
