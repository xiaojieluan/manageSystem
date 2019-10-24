// 判断输入的账号是否是合法的用户名
export function isvalidUsername (str) {
  const validMap = ['admin13724182712', 'editor13724182712']
  return validMap.indexOf(str.trim()) >= 0
  // 传入的账号str去掉首尾的空格后，是否存在在validMap中，如果存在，则是合格的账号
}
