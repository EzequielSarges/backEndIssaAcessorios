const connection = require('../../database/connection');
const { response } = require('express');
module.exports = {
    async index(request, response){
        const categoria = await connection('imagen_produto')
        .join('imagens','imagens_id','=','imagens.id')
        .join('produtos','produtos_id','=','imagens.id')
        .select('*');
        return response.json(categoria);
       
    },

    async store(request, response){
        const {nome, preco, categoria1, categoria2, categoria3} = request.body;
        const imagem = request.file.path;
        const catg_id = [categoria1, categoria2, categoria3];
        const produtos_id = await connection('produtos').insert({nome,preco, imagem}).returning('id');
        
        await Promise.all(catg_id.map(async (valor)=>{
            if(valor){
                const categorias_id = valor
                await connection('categoria_produto').insert({categorias_id, produtos_id})
                 
                console.log(produtos_id)
            }
        }))
            
                     
                 
            return response.json(catg_id);
        
    },

    async show(request, response){
        const id = request.params.id;
        const produto = await connection('imagem_produto')
        .join('produtos','produto_id','=','produtos.id')
        .select('*')
        .where('produto_id', id);
        return response.json(produto);
    },
    async update(){

    },
    async delete(){
        const id = request.params.id;
        const produto = await connection('imagem_produto')
        .join('produtos','produto_id','=','produtos.id')
        .where('produto_id', id)
        .del();

        return response.json(produto);

    }

}