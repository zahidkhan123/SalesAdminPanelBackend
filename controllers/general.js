import getUserService from '../services/userService.js';
import { useErrorResponse, useSuccessResponse } from '../utils/apiResponse.js';
export const getUserController = async (req, res) => {
  const getUser = await getUserService(req);

  if (!getUser.success) {
    return useErrorResponse(res, getUser.message, getUser.status);
  }

  return useSuccessResponse(res, getUser.message, getUser.data, getUser.status);
};
