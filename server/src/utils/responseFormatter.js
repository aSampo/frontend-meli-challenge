const { getDecimals } = require('./getDecimals');

const conditionMappings = {
  new: 'Nuevo',
  used: 'Usado',
  refurbished: 'Reacondicionado',
  not_specified: 'Estado sin especificar',
};

function formatItemsResponse(data) {
  const items = data.results.map((item) => ({
    id: item.id,
    title: item.title,
    price: {
      currency: item.currency_id,
      amount: item.price,
      decimals: getDecimals(item.price),
    },
    picture: item.thumbnail,
    condition: conditionMappings[item.condition] || 'Desconocido',
    free_shipping: item.shipping?.free_shipping || false,
    city: item.address.city_name,
  }));

  return items;
}

function formatCategoriesResponse(data) {
  return data.data.path_from_root.map((category) => category.name);
}

function formatItemResponse(itemResponse, descriptionResponse) {
  const item = {
    id: itemResponse.data.id,
    title: itemResponse.data.title,
    price: {
      currency: itemResponse.data.currency_id,
      amount: itemResponse.data.price,
      decimals: getDecimals(itemResponse.data.price),
    },
    picture: itemResponse.data.pictures[0]?.url || itemResponse.data.thumbnail,
    condition: conditionMappings[itemResponse.data.condition] || 'Desconocido',
    free_shipping: itemResponse.data.shipping?.free_shipping || false,
    sold_quantity: itemResponse.data.sold_quantity,
    description: descriptionResponse.data.plain_text,
  };

  return item;
}

module.exports = {
  formatItemsResponse,
  formatItemResponse,
  formatCategoriesResponse,
};
