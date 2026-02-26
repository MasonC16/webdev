export const STORAGE_KEY = 'a2_products'

/**
 * Return an array of products from localStorage.
 * Safely parse JSON with try/catch.
 * Return [] if missing or malformed.
 */
export function readAll() {
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    console.error('Failed to read products from localStorage:', e);
    return [];
  }
}

/**
 * Persist the full list of products to localStorage.
 * Use JSON.stringify with try/catch.
 * If write fails (quota), surface an error to the caller.
 */
export function writeAll(list) {
  try{
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  } catch (e) {
    console.error('Failed to write products to localStorage:', e);
    throw e;
  }
}

//Clear all persisted products.
export function resetAll() {
  try{
    localStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    console.error('Failed to reset products in localStorage:', e);
    throw e;
  }
}