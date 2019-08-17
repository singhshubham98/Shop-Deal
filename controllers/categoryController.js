const Category = require("../models/categorySchema");
const { errorHandler } = require("../helpers/dbErrorHandler");

exports.categoryById = (req, res, next, id) => {
  Category.findById(id).exec((err, category) => {
    if (err || !category) {
      return res.status(400).json({ error: "Category not found" });
    }
    req.category = category;
    next();
  });
};

exports.createCategory = (req, res) => {
  const category = new Category(req.body);

  category
    .save()
    .then(data => {
      res.status(200).json({ data });
    })
    .catch(err => {
      return res.status(400).json({
        error: errorHandler(err)
      });
    });
};

exports.readCategory = (req, res) => {
  return res.json(req.category);
};

exports.updateCategory = (req, res) => {
  const category = req.category;
  category.name = req.body.name;

  category.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err)
      });
    }

    res.json(data);
  });
};

exports.deleteCategory = (req, res) => {
  const category = req.category;

  category.remove(err => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err)
      });
    }

    res.json({
      message: "Category deleted successfully"
    });
  });
};

exports.list = (req, res) => {
  Category.find({})
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      return res.status(400).json({
        error: errorHandler(err)
      });
    });
};
