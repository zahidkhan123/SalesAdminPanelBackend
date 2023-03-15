import express from 'express';
import {
  getCustomerController,
  getGeographyController,
  getProductController,
  getTransactionController,
  //   getProductStatController,
} from '../controllers/clientController.js';
const route = express.Router();

route.get('/product', getProductController);
route.get('/customers', getCustomerController);
route.get('/transaction', getTransactionController);
route.get('/geography', getGeographyController);
// route.get('/productStat', getProductStatController);

export default route;
