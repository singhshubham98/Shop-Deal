const Category = require("../models/categorySchema");
const { errorHandler } = require("../helpers/dbErrorHandler");

exports.create = (req, res) => {
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
