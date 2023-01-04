import express from "express";
import { getPosts, addPost, deletePost, getPostsAll } from "../controllers/post.js";

const router = express.Router();

router.get("/:userId", getPosts);
router.get("/", getPostsAll);
router.post("/", addPost);
router.delete("/:id", deletePost);

export default router;
