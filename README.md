# FakeStore App

A modern, responsive React + Vite web app that lets you browse, search, add, edit, and delete products using the [FakeStoreAPI](https://fakestoreapi.com/).

## Features

- Home page with welcome and store background
- Product listing with search and category filter
- Product details page with edit and delete (with confirmation modal)
- Add product form
- Edit product form
- Responsive design with React Bootstrap
- Colorful, modern UI

## Getting Started

### Prerequisites

- Node.js and npm installed

### Installation

1. Clone the repo:
   ```sh
   git clone https://github.com/KimiCubb/FakeStoreApp.git
   cd FakeStoreApp
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```
4. Open your browser to the local URL shown (usually http://localhost:5173)

## Project Structure

- `src/` — Main source code
  - `App.jsx` — Main app and routing
  - `components/ProductCard.jsx` — Reusable product card component
  - `ProductListing.jsx` — Product list, search, filter
  - `ProductDetails.jsx` — Single product details, edit/delete
  - `AddProduct.jsx` — Add product form
  - `EditProduct.jsx` — Edit product form
- `public/` — Static assets
- `App.css` — Custom styles

## API

- Uses [FakeStoreAPI](https://fakestoreapi.com/) for all product data

## Customization

- Easily change colors, layout, or add new features
- Try adding a cart, authentication, or more advanced UI!

## License

MIT

---

Made with ❤️ by KimiCubb
