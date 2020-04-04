
exports.up = function(knex) {
    return knex.schema.createTable('itens_pedido', function(table){
        table.increments();
        table.integer('produto_id').unsigned();
        table.integer('quantidade').unsigned();
        table.string('subtotal').notNullable(); // valor do produto multiplicado pela quantidade
        table.foreign('produto_id').references('id').inTable('produtos');
    
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('itens_pedido');
};
