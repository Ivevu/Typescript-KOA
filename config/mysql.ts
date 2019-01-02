const Sequelize = require('sequelize');
const sequelize = new Sequelize('liww_node_blog', 'root', 'S@lww520.', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});
export default sequelize;
