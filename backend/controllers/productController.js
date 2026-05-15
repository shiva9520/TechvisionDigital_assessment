import { products } from '../data/products.js';

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
export const getProducts = (req, res) => {
  res.json(products);
};
