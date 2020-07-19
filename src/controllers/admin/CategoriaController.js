const connection = require('../../database/connection');
module.exports = {
    async index(){
        const categorias = await connection('categorias').select("*")
        return response.json(categorias);
    },
    async store(request, response){
        const {titulo,imagen_id} = request.body;
        const imagem = request.file.path;
        await connection('categorias').insert({titulo,imagem})
        return response.json({mensagem:"Categoria cadastrada!"});
    },
    async show(request, response){
        const id = request.params.id;
        const categoria = await connection('categorias')
        .select('*')
        .where('categorias.id',id);
        return response.json(categoria);
    },
    async update(){

    },
    async delete(){

    }

}