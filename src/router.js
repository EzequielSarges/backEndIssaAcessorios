const express = require('express')
const routes = express.Router();
const multer = require('multer');
const configMulter = require('./config/multer')

//Controllers Cliente

//Controllers Admin
const CategoriaController = require('./controllers/admin/CategoriaController');
const ImagensController = require('./controllers/admin/ImagensController.js');
const ProdutosController = require('./controllers/admin/ProdutosController.js');

// ========================== ROTAS ADMIN===========================================
//rota de categorias
routes.get('/categorias',CategoriaController.index);
routes.get('/categorias/:id',CategoriaController.show);
routes.post('/categorias',multer(configMulter).single('file'),CategoriaController.store);

//rota de produtos
routes.get('/produto/:id',ProdutosController.show);
routes.post('/produto',multer(configMulter).single('file'),ProdutosController.store);
routes.put('/produto/:id',ProdutosController.update);
routes.delete('/produto/:id',ProdutosController.delete);

// rota de imagens
routes.post('/imagens/:produto_id',multer(configMulter).array('file',3),ImagensController.store);
routes.get('/imagens',ImagensController.show);



//=========================== ROTAS CLIENTE=========================================

module.exports = routes;