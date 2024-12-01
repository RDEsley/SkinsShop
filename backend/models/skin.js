const mongoose = require('mongoose');

const skinSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  preco: { type: Number, required: true }
});

const Skin = mongoose.model('Skin', skinSchema);
module.exports = Skin;
