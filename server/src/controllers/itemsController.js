const axios = require('axios');
const { formatItemsResponse, formatItemResponse, formatCategoriesResponse } = require('../utils/responseFormatter');
const { getMostPopularCategoryId } = require('../utils/getMostPopularCategory');
const { author } = require('../utils/author');
const { handleErrors } = require('../utils/handleErrors');

const apiBaseURL = 'https://api.mercadolibre.com';

const getFormateddCategories = async (categoryId) => {
  const categoriesResponse = await axios.get(`${apiBaseURL}/categories/${categoryId}`);
  return formatCategoriesResponse(categoriesResponse);
};

const itemsController = {
  searchItems: async (req, res) => {
    try {
      const query = req.query.q;
      if (!query) {
        res.status(400).json({ error: 'No has ingresado un término de búsqueda.' });
        return;
      }
      const itemsResponse = await axios.get(`${apiBaseURL}/sites/MLA/search?limit=4&q=${query}`);
      const categoryId = getMostPopularCategoryId(itemsResponse.data);
      const categories = await getFormateddCategories(categoryId);
      const items = formatItemsResponse(itemsResponse.data);
      res.json({ author, categories, items });
    } catch (error) {
      handleErrors(res, error);
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
      handleErrors(res, error);
    }
  },
};

module.exports = itemsController;
