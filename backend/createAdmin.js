const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Admin = require('./models/admin'); // Certifique-se de que o caminho está correto para o modelo

const createAdmin = async () => {
  // Conecte-se ao MongoDB (utilizando a mesma URI do seu backend)
  await mongoose.connect('mongodb+srv://RDEsley:010220055RR@firstcluster.uea2q.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash('123456', salt); // Criptografa a senha '123456'
  
  const admin = new Admin({
    nome: 'Admin',
    email: 'admin@gmail.com',
    senha: hashedPassword
  });

  await admin.save(); // Salva o administrador no banco de dados
  console.log('Administrador criado!');
  mongoose.disconnect(); // Desconecta após a operação
};

createAdmin().catch(err => {
  console.error('Erro ao criar o admin:', err);
});
