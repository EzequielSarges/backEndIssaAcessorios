const connection = require('../../database/connection');
module.exports = {
    async index(){
       
    },
    async store(request, response){
        const {titulo, descricao, imagen_id} = request.body;
        await connection('categorias').insert({
            titulo,
            descricao,
            imagen_id
        })
        return response.json({mensagem:"legal"});
    },
    async show(request, response){
        const id = request.params.id;
        const categoria = await connection('categorias').join('imagens','categorias.imagen_id','=','imagens.id').select('*').where('categorias.id',id);
        return response.json(categoria);
    },
    async update(){

    },
    async delete(){

    }

}