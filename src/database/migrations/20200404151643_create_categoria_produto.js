
exports.up = function(knex) {
    return knex.schema.createTable('categoria_produto', function(table){
        table.increments();
        table.integer('categorias_id').unsigned();
        table.integer('produtos_id').unsigned();

        table.foreign('categorias_id').references('id').inTable('categorias');
        table.foreign('produtos_id').references('id').inTable('produtos');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('categoria_produto');
};
