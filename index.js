const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Rota inicial
app.get('/', (req, res) => {
  res.send('API DE crud -- prod--');
});

// Rota para listar todos os produtos
app.get('/produtos', (req, res) => {
  console.log('GET /produtos chamada');
  res.json([
    { id: 1, nome: 'Produto A', preco: 10.0 },
    { id: 2, nome: 'Produto B', preco: 20.0 }
  ]);
});

// Rota para obter um produto específico
app.get('/produtos/:id', (req, res) => {
  const { id } = req.params;
  console.log(`GET /produtos/${id} chamada`);
  res.json({ id, nome: `Produto ${id}`, preco: 15.5 });
});

// Rota para criar um novo produto
app.post('/produtos', (req, res) => {
  const { nome, preco } = req.body;
  console.log('POST /produtos chamada');
  res.status(201).json({ 
    mensagem: 'Produto criado com sucesso', 
    produto: { id: 999, nome, preco } 
  });
});

// Rota para atualizar um produto
app.put('/produtos/:id', (req, res) => {
  const { id } = req.params;
  const { nome, preco } = req.body;
  console.log(`PUT /produtos/${id} chamada`);
  res.json({ 
    mensagem: `Produto ${id} atualizado`, 
    produto: { id, nome, preco } 
  });
});

// Rota para deletar um produto
app.delete('/produtos/:id', (req, res) => {
  const { id } = req.params;
  console.log(`DELETE /produtos/${id} chamada`);
  res.json({ mensagem: `Produto ${id} deletado` });
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});