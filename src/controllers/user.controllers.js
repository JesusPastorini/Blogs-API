const jwt = require('jsonwebtoken');
const { User } = require('../models');

const login = async (req, res) => {
    const { email, password } = req.body;
   
    if (!email || !password) {
        return res.status(400).json({ message: 'Some required fields are missing' });
      }

    const getByUser = await User.findOne({ where: { email, password } });
    if (!getByUser) {
        return res.status(400).json({ message: 'Invalid fields' });
      }

    const token = jwt.sign(
        { id: getByUser.id, displayName: getByUser.display_name, email: getByUser.email },
        process.env.JWT_SECRET,
        { algorithm: 'HS256', expiresIn: '7d' },
      );
    return res.status(200).json({ token });
  };

  module.exports = {
    login,
  };