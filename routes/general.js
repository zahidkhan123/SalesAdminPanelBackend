import express from 'express';
import { getUserController } from '../controllers/general.js';
const route = express.Router();

route.get('/user/:id', getUserController);

export default route;
