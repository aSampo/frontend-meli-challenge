const { getDecimals } = require('./getDecimals');

const author = {
  name: 'Andres',
  lastname: 'Sampo',
};


// Esta funcion busca si hay available_filters con id category disponibles para ordenarlos por results como pide el challenge
// Hay casos en los que no existen available_filters con id category, en ese caso se usan los de filters
function getCategoryList(data) {
  const availableFilters = data.available_filters || [];
  const categoriesFilter = availableFilters.find(filter => filter.id === 'category');
  const firstFilterValues = data.filters[0]?.values;

  if (categoriesFilter) {
    const validCategories = categoriesFilter.values
      .filter(category => category.results)
      .sort((a, b) => b.results - a.results)
      .map(category => category.name);

    return validCategories;
  } else if (firstFilterValues) {
    return firstFilterValues[0]?.path_from_root.map(category => category.name) || [];
  }

  return [];
}


function formatSearchResponse(data) {
  const categories = getCategoryList(data);
  const items = data.results.map(item => ({
    id: item.id,
    title: item.title,
    price: {
      currency: item.currency_id,
      amount: item.price,
      decimals: getDecimals(item.price),
    },
    picture: item.thumbnail,
    condition: item.condition,
    free_shipping: item.shipping?.free_shipping || false,
  }));

  return {
    author,
    categories,
    items,
  };
}

function formatItemResponse(itemResponse, descriptionResponse) {

  //TODO el breadcrumb de la página de detalle del ítem debe armarse con la categoría propia del ítem

  const item = {
    id: itemResponse.data.id,
    title: itemResponse.data.title,
    price: {
      currency: itemResponse.data.currency_id,
      amount: itemResponse.data.price,
      decimals: getDecimals(itemResponse.data.price),
    },
    picture: itemResponse.data.thumbnail,
    condition: itemResponse.data.condition,
    free_shipping: itemResponse.data.shipping?.free_shipping || false,
    sold_quantity: itemResponse.data.sold_quantity,
    description: descriptionResponse.data.plain_text,
  };

  return {
    author,
    item,
  };
}

module.exports = {
  formatSearchResponse,
  formatItemResponse,
};
