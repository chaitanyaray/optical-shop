const bcrypt = require("bcrypt");

const userRepository = require(
  "../repositories/user.repository"
);

const AppError = require("../utils/AppError");

const { generateToken } = require(
  "../utils/jwt"
);

const register = async (data) => {
  const existingUser =
    await userRepository.findByEmail(
      data.email
    );

  if (existingUser) {
    throw new AppError(
      "Email already exists",
      400
    );
  }

  const hashedPassword =
    await bcrypt.hash(data.password, 10);

  const user =
    await userRepository.create({
      ...data,
      password: hashedPassword,
    });
  const userObj = user.toObject();
  delete userObj.password;

  const token = generateToken({
    id: user._id,
    role: user.role,
  });

  return {
    user: userObj,
    token,
  };
};

const login = async ({ email, password }) => {
  const user = await userRepository.findByEmail(email);
  if (!user) {
    throw new AppError("Invalid credentials", 401);
  }

  const isMatch = await bcrypt.compare(
    password,
    user.password
  );

  if (!isMatch) {
    throw new AppError("Invalid credentials", 401);
  }

  const token = generateToken({
    id: user._id,
    role: user.role,
  });

  const userObj = user.toObject();
  delete userObj.password;

  return {
    user: userObj,
    token,
  };
};

module.exports = {
  register,
  login,
};