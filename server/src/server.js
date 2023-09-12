const express = require('express');

const app = express();
const itemsRoutes = require('./routes/items');

app.use('/', itemsRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
