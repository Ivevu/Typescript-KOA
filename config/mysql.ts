const Sequelize = require('sequelize');

export const sequelize = new Sequelize('liww_koa_blog', 'root', 'S@lww520.', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    timezone: '+08:00' //东八时区
});

