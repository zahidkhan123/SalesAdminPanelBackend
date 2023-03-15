import { useErrorResponse, useSuccessResponse } from '../utils/apiResponse.js';
import {
  getCustomerService,
  getGeographyService,
  getProductService,
  getTransactionService,
} from '../services/clientService.js';

const getProductController = async (req, res) => {
  const getProduct = await getProductService(req);

  if (!getProduct.success) {
    return useErrorResponse(res, getProduct.message, getProduct.status);
  }

  return useSuccessResponse(
    res,
    getProduct.message,
    getProduct.data,
    getProduct.status
  );
};

const getCustomerController = async (req, res) => {
  const getCustomer = await getCustomerService(req);

  if (!getCustomer.success) {
    return useErrorResponse(res, getCustomer.message, getCustomer.status);
  }

  return useSuccessResponse(
    res,
    getCustomer.message,
    getCustomer.data,
    getCustomer.status
  );
};

const getTransactionController = async (req, res) => {
  const getTransaction = await getTransactionService(req);

  if (!getTransaction.success) {
    return useErrorResponse(res, getTransaction.message, getTransaction.status);
  }

  return useSuccessResponse(
    res,
    getTransaction.message,
    getTransaction.data,
    getTransaction.status
  );
};

const getGeographyController = async (req, res) => {
  const getGeography = await getGeographyService(req);

  if (!getGeography.success) {
    return useErrorResponse(res, getGeography.message, getGeography.status);
  }

  return useSuccessResponse(
    res,
    getGeography.message,
    getGeography.data,
    getGeography.status
  );
};

export {
  getProductController,
  getCustomerController,
  getTransactionController,
  getGeographyController,
};
