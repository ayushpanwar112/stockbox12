import jwt from "jsonwebtoken";

export const generateJWT = (user) => {
  const payload = {
    userId: user._id,
    username: user.username,
  };

  const options = {
    expiresIn: "1h",
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET, options);

  return token;
};

export const sendTokenInCookie = (res, token) => {
  res.cookie("jwt", token, {
    httpOnly: true,
    secure:true,
   
    sameSite: "None",
     maxAge: 3600000
  });
};
