let debug = false;//是否调试状态，调试状态下会显示debug类型的日志

let logger = {
  enableDebug : () => debug=true,
  disableDebug : () => debug=false,
  log: (msg) => console.log(`${new Date().toLocaleString()} - ${msg}`),
  debug : (msg) => debug && console.log(`DEBUG: ${new Date().toLocaleString()} - ${msg}`),
  error : (msg) => console.log(`ERROR: ${new Date().toLocaleString()} - ${msg}`),
};
export default logger;
