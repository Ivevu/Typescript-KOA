const Sequelize = require('sequelize');
import sequelize from '../config/mysql';

const Diary = sequelize.define('diary', {
  content: {
    type: Sequelize.STRING
  },
  subject: {
    type: Sequelize.STRING
  }
});

// force: true 如果表已经存在，将会丢弃表
Diary.sync({ force: true }).then(() => {
  // 表已创建
  return Diary.create({
    content: 'uhuhu',
    subject: '5959'
  });
});