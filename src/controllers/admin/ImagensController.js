const connection = require('../../database/connection');
module.exports = {
    async store(request, response){
        await connection('imagens').insert({
            nome:request.file.originalname,
            caminho: request.file.key
        })
        
        return response.json({mensagem: "OK"})
    } 
}