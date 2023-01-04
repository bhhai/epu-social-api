import express from "express";
import { getRelationships, addRelationship, deleteRelationship, getHotUsers } from "../controllers/relationship.js";

const router = express.Router()

router.get("/", getRelationships)
router.get("/hotUser", getHotUsers)
router.post("/", addRelationship)
router.delete("/", deleteRelationship)


export default router