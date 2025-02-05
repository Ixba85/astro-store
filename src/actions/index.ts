import { loginUser, logout, registerUser } from './auth';
import { getProductBySlug } from './products/get-product-by-slug.action.ts';
import { getProductsByPage } from './products/get-products-by-page.action.ts';
import { loadProductsFromCart } from '../actions/cart/load-products-from-cart.action.ts';
import { createUpdateProduct } from './products/create-update-product.action';
import { deleteProductImage } from './products/delete-product-image.action.ts';

export const server = {
  // actions

  // Auth
  loginUser,
  logout,
  registerUser,

  //Products
  getProductsByPage,
  getProductBySlug,
  
  // Cart
  loadProductsFromCart,

   // Admin
  // Product
  createUpdateProduct,
  deleteProductImage ,
};
