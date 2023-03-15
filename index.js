import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
// import dotenv from 'dotenv';
import {} from 'dotenv/config';
import helmet from 'helmet';

// FILES IMPORTED FRORM OTHER FOLDERS
import { connection } from './utils/db.js';
import {
  dataUser,
  dataProduct,
  dataProductStat,
  dataTransaction,
} from './data/index.js';
import User from './models/User.js';
import Product from './models/product.js';
import ProductStat from './models/productStat.js';
import Transaction from './models/Transaction.js';
import generalRoutes from './routes/general.js';
import clientRoutes from './routes/client.js';
// CONFIGURATION
// dotenv.config()
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(morgan('common'));
app.use(cors());

connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
  // User.insertMany(dataUser);
  // Product.insertMany(dataProduct);
  // ProductStat.insertMany(dataProductStat);
  // Transaction.insertMany(dataTransaction);
});

app.use('/api/v1/general', generalRoutes);
app.use('/api/v1/client', clientRoutes);
app.use('/api/v1/management', (req, res) => {
  res.send({ success: true });
});
app.use('/api/v1/sales', (req, res) => {
  res.send({ success: true });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
