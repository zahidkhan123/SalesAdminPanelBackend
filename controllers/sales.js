import getSalesService from '../services/SalesService.js';
import { useErrorResponse, useSuccessResponse } from '../utils/apiResponse.js';
export const getSalesController = async (req, res) => {
  const getSales = await getSalesService(req);

  if (!getSales.success) {
    return useErrorResponse(res, getSales.message, getSales.status);
  }

  return useSuccessResponse(
    res,
    getSales.message,
    getSales.data,
    getSales.status
  );
};
