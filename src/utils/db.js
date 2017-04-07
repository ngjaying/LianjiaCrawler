import config from '../config';
import logger from './logger';
import mysql from 'mysql';

let pool;
const init = () => {
  logger.debug(config.env + ',' + config.dbconfig.database);
  pool = mysql.createPool(config.dbconfig);
};

const db = {
  query : (sql) => {
    if (!pool || pool._closed) init();
    return new Promise((resolve, reject) => {
      pool.getConnection((err, conn) => {
        if(err){
          reject(err);
          return;
        }        
        conn.query(sql, (err, rows) => {
          if(err){
            reject(err);
            return;
          }
          conn.release();
          resolve(rows);
        });
      })
    });
  }
};

export default db;
