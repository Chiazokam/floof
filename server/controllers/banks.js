import { Op } from 'sequelize';
import client from '../config/redis';
import db from '../dataAccess/db/models';
import Response from '../utils/Response';

const { Bank } = db;
class BanksController {
/**
 * @description Get All Banks/ Search For Banks
 * @param {object} req
 * @param {object} res
 * @returns {object} res
 */
  static async getAllBanks(req, res) {
    const { search } = req.query;
    if (search) {
      const banks = await Bank.findAndCountAll({
        where: {
          name: {
            [Op.iLike]: `%${search}%`,
          },
        },
      });
      if (banks.count === 0) {
        return Response(404, false, 'server', 'No Banks match this search', res);
      }

      return Response(200, true, 'server', 'Successfully retrieved banks', res, banks);
    }

    client.get('banks', async (error, result) => {
      if (result) {
        return Response(200, true, 'cache', 'Successfully retrieved banks', res, JSON.parse(result));
      }
      const banks = await Bank.findAndCountAll();

      if (banks.count === 0) {
        return Response(404, false, 'server', 'No Banks exist', res);
      }
      client.setex('banks', 3600, JSON.stringify(banks));
      return Response(200, true, 'server', 'Successfully retrieved banks', res, banks);
    });
  }
}

export default BanksController;
