const express = require("express");
const Admin = require("../models/admin");
const jwt = require("jsonwebtoken");
const router = express.Router();

router.post("/login", async (req, res) => {
    
  const { email, senha } = req.body;
  const admin = await Admin.findOne({ email });
  if (!admin) return res.status(400).json({ message: "Admin não encontrado" });

  const isMatch = await bcrypt.compare(senha, admin.senha);
  if (!isMatch) return res.status(400).json({ message: "Senha incorreta" });

  const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  res.json({ token });
});

module.exports = router;
