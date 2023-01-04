import express from 'express';
import { follow, getUserFollow } from '../controllers/follow.js';
const Router = express.Router();


Router.post('/', follow);
Router.get('/getAll', getUserFollow);

export default Router;