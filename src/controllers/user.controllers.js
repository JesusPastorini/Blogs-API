const { User } = require('../models');
const validaToken = require('../middleware/token');

const login = async (req, res) => {
    const { email, password } = req.body;
   
    if (!email || !password) {
        return res.status(400).json({ message: 'Some required fields are missing' });
      }

    const getByUser = await User.findOne({ where: { email, password } });
    if (!getByUser) {
        return res.status(400).json({ message: 'Invalid fields' });
      }
    const token = validaToken.token(getByUser);
    return res.status(200).json({ token });
  };

  const addUser = async (req, res) => {
    const { email, displayName, image, password } = req.body;

    if (displayName.length < 8) {
        return res.status(400).json({
          message: '"displayName" length must be at least 8 characters long' });
    }
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        return res.status(400).json({ message: '"email" must be a valid email' });
    }
    if (password.length < 6) {
        return res.status(400).json({
          message: '"password" length must be at least 6 characters long' });
    }
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) return res.status(409).json({ message: 'User already registered' });

    const newUser = await User.create({ displayName, email, password, image });
    const token = validaToken.token(newUser);

    return res.status(201).json({ token });
};

const getUsers = async (req, res) => {
  try {
      const users = await User.findAll({
          attributes: ['id', 'displayName', 'email', 'image'],
      });

      return res.status(200).json(users);
  } catch (error) {
      return res.status(500).json({ message: 'Internal server error' });
  }
};

  module.exports = {
    login,
    addUser,
    getUsers,
  };