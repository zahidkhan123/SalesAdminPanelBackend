import getCountryIso3 from 'country-iso-2-to-3';
import Product from '../models/product.js';
import ProductStat from '../models/productStat.js';
import Transaction from '../models/Transaction.js';
import User from '../models/User.js';
const getProductService = async (req) => {
  let productData;
  try {
    const products = await Product.find();

    const dataproduct = [];

    for (const product of products) {
      const { _id: productId } = product;
      const stat = await ProductStat.find({ productId });
      dataproduct.push({ ...product._doc, stat });
    }

    if (dataproduct?.length <= 0) {
      return (productData = {
        success: false,
        message: 'no user found',
        status: 422,
      });
    }
    return (productData = {
      success: true,
      message: null,
      data: dataproduct,
      status: 200,
    });
  } catch (error) {
    return (productData = {
      success: false,
      message: 'No user found',
      data: null,
      status: 404,
    });
  }
};

const getCustomerService = async (req) => {
  let customerData;
  try {
    const Customer = await User.find({ role: 'user' }).select('-password');

    if (!Customer) {
      return (customerData = {
        success: false,
        message: 'no user found',
        status: 422,
      });
    }
    return (customerData = {
      success: true,
      message: null,
      data: Customer,
      status: 200,
    });
  } catch (error) {
    return (customerData = {
      success: false,
      message: 'No user found',
      data: null,
      status: 404,
    });
  }
};

const getTransactionService = async (req) => {
  const { page = 1, pageSize = 20, search = '', sort = null } = req.query;

  const generateSort = () => {
    const sortParsed = JSON.parse(sort);
    const sortFormatted = {
      [sortParsed.field]: (sortParsed.sort = 'asc' ? 1 : -1),
    };
    return sortFormatted;
  };

  try {
    let transactionData;
    const sortFormatted = Boolean(sort) ? generateSort() : {};

    const transaction = await Transaction.find({
      $or: [
        { cost: { $regex: new RegExp(search, 'i') } },
        { userId: { $regex: new RegExp(search, 'i') } },
      ],
    })
      .sort(sortFormatted)
      .skip(page * pageSize)
      .limit(pageSize);

    const total = await Transaction.countDocuments({
      name: { $regex: search, $options: 'i' },
    });

    if (transaction > 0) {
      return (transactionData = {
        success: false,
        message: 'no transactions found',
        status: 422,
      });
    }
    let data = { transaction, total };
    return (transactionData = {
      success: true,
      message: null,
      data: data,
      status: 200,
    });
  } catch (error) {
    return (transactionData = {
      success: false,
      message: 'No user found',
      data: null,
      status: 404,
    });
  }
};

const getGeographyService = async (req) => {
  let geographyData;
  try {
    const users = await User.find();

    const mappedLocations = users.reduce((acc, { country }) => {
      const countryISO3 = getCountryIso3(country);
      if (!acc[countryISO3]) {
        acc[countryISO3] = 0;
      }
      acc[countryISO3]++;
      return acc;
    }, {});

    const formattedLocations = Object.entries(mappedLocations).map(
      ([country, count]) => {
        return { id: country, value: count };
      }
    );
    if (users <= 0) {
      return (geographyData = {
        success: false,
        message: 'no user found',
        status: 422,
      });
    }
    return (geographyData = {
      success: true,
      message: null,
      data: formattedLocations,
      status: 200,
    });
  } catch (error) {
    return (geographyData = {
      success: false,
      message: 'No user found',
      data: null,
      status: 404,
    });
  }
};

export {
  getProductService,
  getCustomerService,
  getTransactionService,
  getGeographyService,
};
