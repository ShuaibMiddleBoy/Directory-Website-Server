const express = require('express');
const router = express.Router();
const { requireSignIn, isAdmin } = require('../middlewares/authMiddleware');
const { createCategoryController, updateCategoryController, categoriesController, categoryController, deleteCategoryControllers, deleteCategoryController } = require('../controllers/categoryController');

// routes

// create category route
router.post('/create-category', requireSignIn, isAdmin, createCategoryController);

// update category route
router.put('/update-category/:id', requireSignIn, isAdmin, updateCategoryController);

// get all categories route
router.get('/categories', categoriesController);

// get single category route
router.get('/category/:slug', categoryController);

// delete category route
router.delete('/delete-category/:id', requireSignIn, isAdmin, deleteCategoryController);


module.exports = router;
