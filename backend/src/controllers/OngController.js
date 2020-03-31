const connection = require('../database/connection');
const generateUniqueID = require('../utils/generateUniqueID'); 

module.exports = {
  async index(request, response) {
    const ongs = await connection('ongs').select('*');
  
    return response.json(ongs);
  },

  async create(request, response) {
    const { name, email, whatsapp, city, uf } = request.body;

    const id = generateUniqueID();

    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp: `55${whatsapp}`,
      city,
      uf
    });

    return response.json({ id });
  },
}