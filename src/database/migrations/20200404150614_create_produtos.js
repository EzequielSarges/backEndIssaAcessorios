
exports.up = function(knex) {
    return knex.schema.createTable('produtos', function(table){
        table.increments();
        table.string('nome').notNullable();
        table.string('preco').notNullable();
        table.string('imagem').notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('produtos');
};
