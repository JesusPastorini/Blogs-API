const jwt = require('jsonwebtoken');

const token = (getByUser) => { 
    const tok = jwt.sign(
    { id: getByUser.id, displayName: getByUser.display_name, email: getByUser.email },
    process.env.JWT_SECRET,
    { algorithm: 'HS256', expiresIn: '7d' },
  );
  return tok;
};

module.exports = {
    token,
};