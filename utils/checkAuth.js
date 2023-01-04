export const checkAuth = (token, res) => {
  if (!token) return res.status(401).json({
    code: 401,
    msg: "Not logged in!"
  });
}