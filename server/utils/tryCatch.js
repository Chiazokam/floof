/**
 * @description Wraps a controller method in a try-catch block
 * @param  {object} req - The request object
 * @param  {object} res - The response object
 * @returns Status code and error message if an error is thrown
 */

const tryCatch = (controller) => async (req, res) => {
  try {
    await controller(req, res);
  } catch (error) {
    return res.status(500).json({
      status: 500,
      success: false,
      source: 'server',
      message: error.message,
    });
  }
  return true;
};

export default tryCatch;
