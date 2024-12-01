const express = require('express');
const Skin = require('../models/skin.js');
const router = express.Router();

// Middleware de autenticação (verifica o token JWT)
const auth = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ message: 'Acesso negado' });

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.admin = verified;
    next();
  } catch (err) {
    res.status(400).json({ message: 'Token inválido' });
  }
};

router.get('/', async (req, res) => {
  const skins = await Skin.find();
  res.json(skins);
});

router.post('/', auth, async (req, res) => {
  const { nome, preco } = req.body;
  const newSkin = new Skin({ nome, preco });
  await newSkin.save();
  res.json(newSkin);
});

router.put('/:id', auth, async (req, res) => {
  const { nome, preco } = req.body;
  const updatedSkin = await Skin.findByIdAndUpdate(req.params.id, { nome, preco }, { new: true });
  res.json(updatedSkin);
});

router.delete('/:id', auth, async (req, res) => {
  await Skin.findByIdAndDelete(req.params.id);
  res.json({ message: 'Skin deletada' });
});

module.exports = router;
