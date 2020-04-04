
exports.up = function(knex) {
    return knex.schema.createTable('cupom', function(table){
        table.increments();
        table.string('codigo').notNullable();
        table.string('validade_inicial').notNullable();
        table.string('validade_final').notNullable();
        table.enu('destinado',['produtos','usuarios','categorias','todos']);
        table.enu('tipo',['free','porcentagem','fixo']);
        
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('cupom');
};
