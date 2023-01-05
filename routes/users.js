import express from "express";
import { getUser, getUserAll, getUserByTimeLogin, getUserByUsername, search, updateTimeLogin, updateUser } from "../controllers/user.js";

const router = express.Router()

router.get("/find/:userId", getUser)
router.post("/search", search)
router.get("/findByName/:userId", getUserByUsername)
router.get("/", getUserAll)
router.put("/", updateUser)
router.get("/timeLogin", getUserByTimeLogin)
router.post("/timeLogin", updateTimeLogin)


export default router