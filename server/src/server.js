require('dotenv').config();
const express = require('express');
const cors = require('cors');

const itemsRoutes = require('./routes/items');

const app = express();

app.use(cors());
app.use('/', itemsRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
