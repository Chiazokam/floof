/**
 * @description Response format
 * @param {integer} status
 * @param {boolean} success
 * @param {string} source
 * @param {string} message
 * @param {object} res
 * @param {object} data
 * @returns
 */
const Response = (status, success, source, message, res, data) => res.status(status).json({
  status,
  success,
  source,
  message,
  data,
});

export default Response;
