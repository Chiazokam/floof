import client from '../config/redis';
import db from '../dataAccess/db/models';

const { Bank } = db;

class BanksController {
/**
 * @description Get All Banks
 * @param {object} req
 * @param {object} res
 * @returns {object} res
 */
  static async getAllBanks(req, res) {
      client.get('banks', async (error, result) => {
          if(result) {
            return res.status(200).json({
                status: 200,
                success: true,
                source: 'cache',
                message: 'Successfully retrieved banks',
                data: JSON.parse(result)
              });
      }
        const banks = await Bank.findAll();
        if(!banks.lenght) {
            return res.status(404).json({
                status: 404,
                success: false,
                source: 'server',
                message: 'No Banks exist',
            });
        }
        client.set('banks', JSON.stringify(banks));
        return res.status(200).json({
            status: 200,
            success: true,
            source: 'server',
            message: 'Successfully retrieved banks',
            data: banks
        });
    })
}
}

export default BanksController;
