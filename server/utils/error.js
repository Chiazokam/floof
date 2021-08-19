import logger from "../log";

/**
 * @description Error Logger and Response
 * @param message Error Message
 * @param status status code of error
 * @param res Response object
 * @param errror Body of error
 */
export default Error = (
		message,
		status,
		res,
		error
	) => {
		logger.error(error ? error.toString() : message);
		return res.status(status).json({
			status,
      		message,
      		error: body
		});
	}
