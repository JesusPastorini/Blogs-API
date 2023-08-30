const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;
const configJwt = { algorithm: 'HS256', expiresIn: '7d' };

const token = (getByUser) => { 
    const tok = jwt.sign(
    { id: getByUser.id, displayName: getByUser.display_name, email: getByUser.email },
    JWT_SECRET,
    configJwt,
  );
  return tok;
};

const validateToken = (req, res, next) => {
    const tokenReq = req.headers.authorization;

    if (!tokenReq) {
        return res.status(401).json({ message: 'Token not found' });
    }
    
    // Verify token
    try {
        const decoded = jwt.verify(tokenReq.split(' ')[1], process.env.JWT_SECRET);
        req.user = decoded; // Store user information in request object
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Expired or invalid token' });
    }
};

module.exports = {
    token,
    validateToken,
};