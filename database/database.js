const Sequelize = require("sequelize");

const connection = new Sequelize('db_blog','root','123456',{
    host:'localhost',
    dialect: 'mysql'
});

module.exports = connection;

