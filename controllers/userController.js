// const { getUserTokenService } = require('../services/userService');
// const { useErrorResponse, useSuccessResponse } = require('../utils/apiResponse');


// const getUserTokenController =(async (req,res) => {
//   const getUser = await getUserTokenService(req);
   
//   if (!getUser.success) {
//     return useErrorResponse(res, getUser.message, getUser.status);
//   }

//   return useSuccessResponse(res, getUser.message, getUser.data, getUser.status);
// })

// const userLogoutController =async (req,res) => {
//     req.logout();
//     res.redirect('/');
//     // return useSuccessResponse(res, "User Logout Successfully", null, "200");
// }

// module.exports= {
//     getUserTokenController,
//     userLogoutController
// }