
exports.up = function(knex) {
    return knex.schema.createTable('imagem_produto', function(table){
        table.increments();
        table.integer('produto_id').unsigned();
        table.string('caminho').notNullable();

        table.foreign('produto_id').references('id').inTable('produtos');
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('imagem_produto');
};
