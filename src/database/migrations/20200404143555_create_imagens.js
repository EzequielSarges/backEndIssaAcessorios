
exports.up = function(knex) {
    return knex.schema.createTable('imagens', function(table){
        table.increments();
        table.string('nome').notNullable();
        table.string('caminho').notNullable();
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('imagens');
};
