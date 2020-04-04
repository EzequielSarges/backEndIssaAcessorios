
exports.up = function(knex) {
    return knex.schema.createTable('pedidos', function(table){
        table.increments();
        table.string('total').notNullable();
        table.enu('status',['pendente','cancelado','pago','encaminhado','finalizado']);
        table.integer('usuario_id').unsigned();
        
        table.foreign('usuario_id').references('id').inTable('usuarios');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('pedidos');
};
