export const fetchItemsBySearch = async () => {
  return {
    items: [
      {
        id: '1',
        picture: 'camiseta.jpg',
        title: 'Camiseta',
        price: { amount: 100, currency: 'ARS' },
        city: 'Buenos Aires'
      },
      {
        id: '2',
        picture: 'pelota.jpg',
        title: 'Pelota',
        price: { amount: 500, currency: 'ARS' },
        city: 'Cordoba'
      },
      {
        id: '3',
        picture: 'botines.jpg',
        title: 'Botines',
        price: { amount: 1500, currency: 'ARS' },
        city: 'Santa Fe'
      }
    ],
    categories: ['Categoria 1', 'Categoria 2']
  };
};
