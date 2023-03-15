import express from 'express';
import { getSalesController } from '../controllers/sales.js';
const route = express.Router();

route.get('/sales', getSalesController);

export default route;
