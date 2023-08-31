const { BlogPost, PostCategory, Category } = require('../models');

const createNewPost = async (req, title, content) =>
   BlogPost.create({
    title,
    content,
    userId: req.user.id,
    updated: new Date(),
    published: new Date(),
  });

const createPostCategoryAssociations = (postId, categoryIds) =>
  categoryIds.map((categoryId) => ({
    postId,
    categoryId,
  }));

const addPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;

  if (!title || !content || !categoryIds) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  const existingCategories = await Category.findAll({
    where: {
      id: categoryIds,
    },
  });

  if (existingCategories.length !== categoryIds.length) {
    return res.status(400).json({ message: 'one or more "categoryIds" not found' });
  }

  const newPost = await createNewPost(req, title, content);

  const postCategoryAssociations = createPostCategoryAssociations(newPost.id, categoryIds);
  await PostCategory.bulkCreate(postCategoryAssociations);

  return res.status(201).json(newPost);
};

module.exports = {
  addPost,
};
