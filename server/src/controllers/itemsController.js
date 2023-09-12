const axios = require('axios');
const { formatItemsResponse, formatItemResponse, formatCategoriesResponse } = require('../utils/responseFormatter');
const { getMostPopularCategoryId } = require('../utils/getMostPopularCategory');
const { author } = require('../utils/author');

const apiBaseURL = 'https://api.mercadolibre.com';

const getFormateddCategories = async (categoryId) => {
  const categoriesResponse = await axios.get(`${apiBaseURL}/categories/${categoryId}`);
  return formatCategoriesResponse(categoriesResponse);
};

const itemsController = {
  searchItems: async (req, res) => {
    try {
      const query = req.query.q;
      const itemsResponse = await axios.get(`${apiBaseURL}/sites/MLA/search?q=${query}`);
      const categoryId = getMostPopularCategoryId(itemsResponse.data);
      const categories = await getFormateddCategories(categoryId);
      const items = formatItemsResponse(itemsResponse.data);
      res.json({ author, categories, items });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error en la búsqueda' });
    }
  },

  getItemById: async (req, res) => {
    try {
      const itemId = req.params.id;
      const [itemResponse, descriptionResponse] = await Promise.all([
        axios.get(`${apiBaseURL}/items/${itemId}`),
        axios.get(`${apiBaseURL}/items/${itemId}/description`),
      ]);
      const item = formatItemResponse(itemResponse, descriptionResponse);
      const categories = await getFormateddCategories(itemResponse.data.category_id);

      res.json({ author, item, categories });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener el item' });
    }
  },
};

module.exports = itemsController;
