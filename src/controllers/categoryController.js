const categoryModel = require("../models/categoryModel");
const slugify = require('slugify');


// create category controller
const createCategoryController = async (req, res) => {
    try {
        const { name } = req.body;

        if (!name) {
            return res.status(401).send({ message: "Name is Required" });
        }

        const existingCategory = await categoryModel.findOne({ name });
        if (existingCategory) {
            return res.status(200).send({
                success: true,
                message: 'Category Already Exists'
            })
        }

        const category = await new categoryModel({ name, slug: slugify(name) }).save();
        res.status(201).send({
            success: true,
            message: "New Category Created",
            category
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "Error in Category"
        })
    }
}



// update category controller

const updateCategoryController = async (req, res) => {
    try {
        const { name } = req.body;
        const { id } = req.params;
        console.log(name, id);
        const category = await categoryModel.findByIdAndUpdate(id, { name, slug: slugify(name) }, { new: true });

        res.status(201).send({
            success: true,
            message: "Category Updated Successfully",
            category
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error while updating the category",
            error
        })
    }
}


// get all categories controller

const categoriesController = async (req, res) => {
    try {
        const categories = await categoryModel.find({});
        res.status(201).send({
            success: true,
            message: "All Categories List",
            categories
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: fasle,
            message: "Error while getting categories",
            error
        })
    }
}



// get single category controller

const categoryController = async (req, res) => {
    try {

        const category = await categoryModel.findOne({ slug: req.params.slug });
        res.status(201).send({
            success: true,
            message: 'Get Single Category Successfully',
            category
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error while getting category",
            error,
        })
    }
}


// delete category controller
const deleteCategoryController = async (req, res) => {
    try {
        const { id } = req.params;
        await categoryModel.findByIdAndDelete(id);
        res.status(200).send({
            success: true,
            message: "Category Deleted Successfully",
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error while deleting the category",
            error
        })
    }
}

module.exports = { createCategoryController, updateCategoryController, categoriesController, categoryController, deleteCategoryController }
