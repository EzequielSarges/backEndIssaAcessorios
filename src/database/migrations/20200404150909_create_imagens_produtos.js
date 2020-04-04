
exports.up = function(knex) {
    return knex.schema.createTable('imagen_produto', function(table){
        table.increments();
        table.integer('imagens_id').unsigned();
        table.integer('produtos_id').unsigned();

        table.foreign('imagens_id').references('id').inTable('imagens');
        table.foreign('produtos_id').references('id').inTable('produtos');
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('imagen_produto');
};
