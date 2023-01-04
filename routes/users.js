import express from "express";
import { getUser, getUserAll, getUserByTimeLogin, getUserByUsername, updateTimeLogin, updateUser } from "../controllers/user.js";

const router = express.Router()

router.get("/find/:userId", getUser)
router.get("/findByName/:userId", getUserByUsername)
router.get("/", getUserAll)
router.put("/", updateUser)
router.get("/timeLogin", getUserByTimeLogin)
router.post("/timeLogin", updateTimeLogin)


export default router