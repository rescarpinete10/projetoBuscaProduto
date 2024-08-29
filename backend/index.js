const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Conectar ao banco de dados MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'R:l1.bwHREl8*kfH@WgiRG9CLiP;Ln/h',
  database: 'world'
});

// Função para gerar hash de senha
const saltRounds = 10;

// Rota para cadastrar varejistas
app.post('/cadastrar-varejista', (req, res) => {
  const { codigo_varejo, razao_social, nome_fantasia, cep, email1, senha } = req.body;

  // Gerar hash da senha
  bcrypt.hash(senha, saltRounds, (err, hash) => {
    if (err) {
      return res.status(500).send('Erro ao criptografar a senha');
    }

    // Inserir no banco de dados
    const query = `
      INSERT INTO tb_varejo (codigo_varejo, razao_social, nome_fantasia, cep, email1, senha_varejo)
      VALUES (?, ?, ?, ?, ?, ?)
    `;

    connection.query(query, [codigo_varejo, razao_social, nome_fantasia, cep, email1, hash], (error, results) => {
      if (error) {
        return res.status(500).send('Erro ao cadastrar varejista');
      }
      res.send('Varejista cadastrado com sucesso!');
    });
  });
});

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
