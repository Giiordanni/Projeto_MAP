const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connectar ao MongoDB
mongoose.connect('mongodb://localhost:27017/userdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB conectado'))
  .catch(err => console.error(err));

// Definir User Schema
const UserSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  telefone: { type: String, required: true },
  cpf: { type: String, required: true },
  birthdate: { type: String, required: true },
  sexo: { type: String, required: true },
  endereco: { type: String, required: true },
  password: { type: String, required: true },
  confirmPassword: { type: String, required: true }
});

const User = mongoose.model('User', UserSchema);

// Definir Routes
app.post('/cadastro', (req, res) => {
  const { username, password, email } = req.body;
  const newUser = new User({ username, password, email });

  newUser.save()
    .then(() => res.json('Usuário registrado!'))
    .catch(err => res.status(400).json('Erro: ' + err));
});

// Iniciar servidor..
app.listen(5000, () => {
  console.log('Server rodando em port 5000');
});
