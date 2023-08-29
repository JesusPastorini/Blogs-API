const { User } = require('../models');

const serviceAddUser = async (displayName, email, password, image) => {
    // Check if email already exists
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
        throw new Error('User already registered');
    }

    // Create user
    const newUser = await User.create({ displayName, email, password, image });

    return newUser;
};

module.exports = {
    serviceAddUser,
};
