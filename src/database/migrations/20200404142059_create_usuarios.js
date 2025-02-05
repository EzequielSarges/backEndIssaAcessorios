
exports.up = function(knex) {
 return knex.schema.createTable('usuarios', function(table){
      table.increments();
      table.string('nome').notNullable();
      table.string('email').notNullable();
      table.string('password').notNullable();
      table.string('cpf').notNullable();

  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('usuarios');
};
