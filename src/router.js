const express = require('express')
const routes = express.Router();
const multer = require('multer');
const configMulter = require('./config/multer')

//Controllers Cliente

//Controllers Admin
const CategoriaController = require('./controllers/admin/CategoriaController');
const ImagensController = require('./controllers/admin/ImagensController.js');

// ========================== ROTAS ADMIN===========================================
//rota de categorias
routes.get('/categorias/:id',CategoriaController.show);
routes.post('/categorias',CategoriaController.store);

// rota de imagens
routes.post('/imagens',multer(configMulter).single('file'),ImagensController.store);
//=========================== ROTAS CLIENTE=========================================

module.exports = routes;