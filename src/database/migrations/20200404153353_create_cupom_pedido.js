
exports.up = function(knex) {
    return knex.schema.createTable('cupom_pedidos', function(table){
        table.increments();
        table.integer('cupom_id').unsigned();
        table.integer('pedido_id').unsigned();
        table.string('desconto').notNullable();
        
        table.foreign('cupom_id').references('id').inTable('cupom');
        table.foreign('pedido_id').references('id').inTable('pedidos');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('cupom_pedidos');
};
