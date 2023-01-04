import express from "express";
import { getStories, addStory, deleteStory, viewStory, getViewStory } from "../controllers/story.js";

const router = express.Router();

router.get("/", getStories);
router.post("/", addStory);
router.post("/view", viewStory);
router.get("/viewList", getViewStory);
router.delete("/:id", deleteStory);

export default router;
