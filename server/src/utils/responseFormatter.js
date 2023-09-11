const { getDecimals } = require('./getDecimals');

const author = {
  name: 'Andres',
  lastname: 'Sampo',
};

function formatSearchResponse(data) {
  console.log(data.filters)
  const categories = data.filters.find(filter => filter.id === 'category')?.values[0]?.path_from_root.map(category => category.name) || [];

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
