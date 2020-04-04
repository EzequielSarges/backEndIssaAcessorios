
exports.up = function(knex) {
    return knex.schema.createTable('produtos', function(table){
        table.increments();
        table.string('nome').notNullable();
        table.string('descricao').notNullable();
        table.string('preco').notNullable();
        table.integer('imagen_id').unsigned();
        
        table.foreign('imagen_id').references('id').inTable('imagens');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('produtos');
};
