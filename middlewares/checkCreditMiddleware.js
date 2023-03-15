const { useErrorResponse } = require('../utils/apiResponse');

const checkCredits = (req, res, next) => {
  if (req.user.credits < 1) {
    return useErrorResponse(res, "You don't have have enough credits", 401);
  }
  next();
};

module.exports = {
  checkCredits,
};
