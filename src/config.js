import _ from 'lodash';
const config = {
  all : {
    env: process.env.NODE_ENV || 'development',
    dbconfig: {
      host: '192.168.31.196',//数据库服务器
      user: 'root',//数据库用户名
      password: 'test',//数据库密码
      port: 3306,//数据库服务器端口
      poolSize: 20,
      acquireTimeout: 30000
    },
    startUrl: 'http://xm.lianjia.com/ershoufang/'
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
