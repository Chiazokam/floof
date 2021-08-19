import Error from './error';

/**
 * @description Response Handler
 * @param {object} param Contains response type, res object, status, response message, body of response
 */
 const responseHandler = (param) => {
     const {type, res, status, message, body} = param;
    if (type === 'success') {
      return res.status(status).json({
        status,
        message,
        data: body
      });
    }
    return Error(message, status, res, body)
  };
  
  export default responseHandler;
  