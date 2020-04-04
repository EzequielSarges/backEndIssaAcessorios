
exports.up = function(knex) {
    return knex.schema.createTable('categorias', function(table){
        table.increments();
        table.string('titulo').notNullable();
        table.string('descricao').notNullable();
        table.integer('imagen_id').unsigned();

        table.foreign('imagen_id').references('id').inTable('imagens');
  
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('categorias');
};
