
exports.up = function(knex) {
    return knex.schema.createTable('categorias', function(table){
        table.increments();
        table.string('titulo').notNullable();
        table.string('imagem').notNullable();
  
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('categorias');
};
