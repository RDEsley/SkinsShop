const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

// Conexão com MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Conectado ao MongoDB"))
  .catch(err => console.log("Erro na conexão com MongoDB: ", err));

const port = process.env.PORT || 5000;

// Rotas de admin e CRUD de skins
app.use('/api/admins', require('./routes/adminRoutes'));
app.use('/api/skins', require('./routes/skinRoutes'));

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
