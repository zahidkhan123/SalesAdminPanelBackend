import User from '../models/User.js';

const getUserService = async (req) => {
  const { id } = req.params;
  let userData;
  try {
    const user = await User.findById(id);

    if (!user) {
      return (userData = {
        success: false,
        message: 'no user found',
        status: 422,
      });
    }
    return (userData = {
      success: true,
      message: null,
      data: user,
      status: 200,
    });
  } catch (error) {
    return (userData = {
      success: false,
      message: 'No user found',
      data: null,
      status: 404,
    });
  }
};

export default getUserService;
