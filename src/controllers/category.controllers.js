const { Category } = require('../models');

const addCategory = async (req, res) => {
  const { name } = req.body;

  if (!name) return res.status(400).json({ message: '"name" is required' });
    const newCategory = await Category.create({ name });
    return res.status(201).json({ id: newCategory.id, name: newCategory.name });
};

module.exports = {
  addCategory,
};
