let CommonUtil = {
  formatDate : date => date.toISOString().slice(0, 10),
  compareDate : (date1, date2) => date1.getFullYear() == date2.getFullYear() && date1.getMonth() == date2.getMonth() && date1.getDate() == date2.getDate(),
  sleep: ms => new Promise(resolve => setTimeout(resolve, ms)),
}
export default CommonUtil;
