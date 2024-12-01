const bcrypt = require('bcryptjs');
const Admin = require('./models/admin');  // Caminho correto para o modelo Admin

const createAdmin = async () => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash('123456', salt);  // Senha que você quer configurar
  
  const admin = new Admin({
    nome: 'Admin',
    email: 'admin@gmail.com',
    senha: hashedPassword
  });
  
  await admin.save();
  console.log('Administrador criado!');
};

createAdmin().catch(console.error);
