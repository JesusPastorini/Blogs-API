const validateAddUser = async (displayName, email, password) => {
  if (displayName.length < 8) {
    return { data: { message: '"displayName" length must be at least 8 characters long' } };
  }
  if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    return { data: { message: '"email" must be a valid email' } };
  }
  if (password.length < 6) {
    return { data: { message: '"password" length must be at least 6 characters long' } };
  }

  return { data: null };
};

module.exports = {
  validateAddUser,
};
