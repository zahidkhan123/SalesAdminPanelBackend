import OverallStats from '../models/OverallStats.js';
import OverallStat from '../models/OverallStats.js';

const getSalesService = async (req) => {
  let allSales;
  try {
    const overallStats = await OverallStats.find();

    if (!overallStats) {
      return (allSales = {
        success: false,
        message: 'no Sales found',
        status: 422,
      });
    }
    return (allSales = {
      success: true,
      message: null,
      data: overallStats[0],
      status: 200,
    });
  } catch (error) {
    return (allSales = {
      success: false,
      message: 'No Sales found',
      data: null,
      status: 404,
    });
  }
};

export default getSalesService;
