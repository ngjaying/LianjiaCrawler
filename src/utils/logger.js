
import nodemailer from 'nodemailer';
import config from '../config';

let debug = false;//是否调试状态，调试状态下会显示debug类型的日志
let fatalErrors = [];
let mailsender = {
    host: 'smtp.126.com',
    secureConnection:true,
    port: 465,
    auth: {
        user: config.mailuser,
        pass: config.mailpass
    }
};
const sendMail = (subject, body) => {
    var mailOptions = {
        from: config.mailuser,
        to: config.mailto,
        subject: subject,
        html: body
    };
    var smtpTransport = nodemailer.createTransport(mailsender);
    console.log(mailOptions);
    smtpTransport.sendMail(mailOptions, function (error, response) {
        if (error) {
            console.log(error);
        } else {
          console.log(`email sent ${mailOptions}`);
        }
        smtpTransport.close();
    })
}
let logger = {
  enableDebug : () => debug=true,
  disableDebug : () => debug=false,
  log: (msg) => console.log(`${new Date().toLocaleString()} - ${msg}`),
  debug : (msg) => debug && console.log(`DEBUG: ${new Date().toLocaleString()} - ${msg}`),
  error : (msg, fatalObj) => {
    console.log(`ERROR: ${new Date().toLocaleString()} - ${msg}`);
    if(fatalObj){
      fatalErrors.push(fatalObj);
    }
  },
  summary : () => {
    if(fatalErrors.length > 0){
      console.log('Run logger summary with errors');
      let body = `今日有以下错误，请重视:<br/>${JSON.stringify(fatalErrors)}`;
      sendMail(`今日汇报-有错误`, body);
      fatalErrors = [];
    }else{
      console.log('Run logger summary without errors');
      sendMail(`今日汇报-正常运行`, '今日无错误');
    }
  },
};
export default logger;
