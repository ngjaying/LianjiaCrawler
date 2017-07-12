let CommonUtil = {
  formatDate : date => {
    let tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
    return (new Date(date - tzoffset)).toISOString().slice(0, 10);
  },
  getHour : () => new Date().getHours(),
  compareDate : (date1, date2) => {
    if(date1.getFullYear()>date2.getFullYear()) return 1;
    else if(date1.getFullYear()<date2.getFullYear()) return -1;
    if(date1.getMonth()>date2.getMonth()) return 1;
    else if(date1.getMonth()<date2.getMonth()) return -1;
    if(date1.getDate()>date2.getDate()) return 1;
    else if(date1.getDate()<date2.getDate()) return -1;
    return 0;
  },
  sleep: ms => new Promise(resolve => setTimeout(resolve, ms)),
  convertStringToInt: (str) => parseInt(str.replace( /^\D+/g, '')),
}
export default CommonUtil;
