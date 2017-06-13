import _ from 'lodash';
const config = {
  all : {
    env: process.env.NODE_ENV || 'development',
    dbconfig: {
      host: '127.0.0.1',//数据库服务器
      user: 'root',//数据库用户名
      password: '',//数据库密码
      port: 3306,//数据库服务器端口
      poolSize: 20,
      acquireTimeout: 30000
    },
    host: 'http://xm.lianjia.com',
    threadCount : 1,
    httpDelay: 30,
    mailto: 'johnnyyellow@gmail.com',
    mailuser: 'ngjaying@126.com',
    mailpass: 'Frbv1tr5',
  },
  development: {
    dbconfig: {
      database: 'lianjia_dev'
    }
  },
  production: {
    dbconfig: {
      database: 'lianjia'
    }
  }
};
module.exports = _.merge(config.all, config[config.all.env])
export default module.exports;
