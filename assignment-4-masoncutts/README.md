# Assignment 4 — Capstone SPA

# Overview
This application is a single-page React product catalog designed to demonstrate routing, state management, form handling, and persistent client-side storage. Users can create, view, edit, and delete products, as well as search, filter, and sort through them. This application highlights the use of React functional components, Context API for shared state, a custom hook for managing data and persistence, and React Router for navigation.

# Implemented Features
- Add, edit, and delete products
- View a list of products and detailed product pages
- Search products by name
- Filter by category and price range
- Sort by price or rating (ascending/descending)
- Persistent storage using localStorage
- Client-side routing with a 404 fallback page

# Routing Map
/	            Home page
/list	        Product list with search, filters, and sorting
/item/:id	    Product detail view
/new	        Create a new product
/edit/:id	    Edit an existing product
*	            404 fallback page

# Data Model
Each product includes:
{
  "id": "string",
  "name": "string",
  "category": "string",
  "price": "number",
  "rating": "number",
  "description": "string"
}

# Storage Key Used
Data is stored in localStorage
Storage key: products_app
Data persists after page refresh

# Run Instructions
1. Clone the repository or download and unzip the folder
2. Navigate to the project directory
3. Install dependencies using: 'npm install'
4. Start the application: 'npm run dev'
5. Open your browser and go to: 'http://localhost:5173'




