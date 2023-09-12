const handleErrors = (res, error) => {
  if (error.response && error.response.data.status === 404) {
    res.status(404).json({ error: 'No se encontraron productos que coincidan con tu búsqueda.' });
  } else {
    res.status(error.response ? error.response.status : 500).json({ error: 'Ocurrió un error interno. Por favor, vuelve a intentarlo más tarde.' });
  }
};

module.exports = {
  handleErrors,
};
