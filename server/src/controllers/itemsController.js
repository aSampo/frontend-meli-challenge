const axios = require('axios');
const { formatSearchResponse, formatItemResponse } = require('../utils/responseFormatter');

const itemsController = {
  searchItems: async (req, res) => {
    try {
      const query = req.query.q;
      const response = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`);
      const searchResult = formatSearchResponse(response.data);
      res.json(searchResult);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error en la búsqueda' });
    }
  },

  getItemById: async (req, res) => {
    try {
      const itemId = req.params.id;
      const [itemResponse, descriptionResponse] = await Promise.all([
        axios.get(`https://api.mercadolibre.com/items/${itemId}`),
        axios.get(`https://api.mercadolibre.com/items/${itemId}/description`),
      ]);
      const itemResult = formatItemResponse(itemResponse, descriptionResponse);
      res.json(itemResult);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener el item' });
    }
  },
};

module.exports = itemsController;
