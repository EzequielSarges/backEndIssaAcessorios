const connection = require('../../database/connection');
module.exports = {
    async store(request, response){
        const imagens = request.files;
        const produto_id = request.params.produto_id;

        //const nomeImg1 = imagens[0].filename;
        const caminhoImg1 = imagens[0].path;

        //const nomeImg2 = imagens[1].filename;
        const caminhoImg2 = imagens[1].path;

        //const nomeImg3 = imagens[2].filename;
        const caminhoImg3 = imagens[2].path;

        await connection('imagem_produto').insert([{produto_id: produto_id,caminho: caminhoImg1},
            {produto_id: produto_id,caminho: caminhoImg2},
            {produto_id: produto_id,caminho: caminhoImg3}])
        return response.json({mensagem: "Imagens cadastradas"})
        
    },
    async show(request, response){
        const imagens = await connection('imagem_produto').select('*');
        return response.json(imagens);
        
    } 
}