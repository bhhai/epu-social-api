import { db } from "../connect.js";
import jwt from "jsonwebtoken";

export const getUser = (req, res) => {
  const userId = req.params.userId;
  const q = "SELECT * FROM users WHERE id=?";

  db.query(q, [userId], (err, data) => {
    if (err) return res.status(500).json(err);
    const { password, ...info } = data[0];
    return res.json(info);
  });
};
export const getUserByUsername = (req, res) => {
  const userId = req.params.userId;
  const q = "SELECT * FROM users WHERE username=?";

  db.query(q, [userId], (err, data) => {
    if (err) return res.status(500).json(err);
    const { password, ...info } = data[0];
    return res.json(info);
  });
};
export const getUserAll = (req, res) => {
  const q = "SELECT * FROM users";

  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};
export const getUserByTimeLogin = (req, res) => {
  const q = "SELECT * FROM users ORDER BY users.loginTime DESC";

  db.query(q, [], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};

export const updateUser = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const q =
      "UPDATE users SET `name`=?,`city`=?,`website`=?,`profilePic`=?,`coverPic`=?, `learning`=?, `working`=?, `des`=?, `email`=? WHERE id=? ";
    console.log(req.body.profilePic);
    db.query(
      q,
      [
        req.body.name,
        req.body.city,
        req.body.website,
        req.body.profilePic,
        req.body.coverPic,
        req.body.learning,
        req.body.working,
        req.body.des,
        req.body.email,
        userInfo.id,
      ],
      (err, data) => {
        if (err) res.status(500).json(err);
        if (data.affectedRows > 0) return res.json("Updated!");
        return res.status(403).json("You can update only your post!");
      }
    );
  });
};
export const updateTimeLogin = (req, res) => {
  const q =
    "UPDATE users SET `loginTime`=? WHERE username=? ";
  console.log(req.body.profilePic);
  db.query(
    q,
    [
      req.body.loginTime,
      req.body.username,
    ],
    (err, data) => {
      if (err) res.status(500).json(err);
      if (data) return res.json("time login updated!");
      return res.status(403).json("You can update only your post!");
    }
  );
};
