//sails.config.connections or sails.config.datastores
module.exports.connections = {
  nodeServer: {
    //You can pass an URI connection string. Be aware that this takes precedence
    //uri: 'postgresql://user:password@host:port/database',
    user: 'root',
    password: '',
    database: 'nodeServer',
    //Thisi s a typical Sequelize constructor `options` object
    options: {
      dialect: 'mysql',
      host   : 'localhost',
      logging: console.log //Why not? Just ship it like this to production. No biggie.
    }
  }
}
