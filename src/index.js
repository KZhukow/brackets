module.exports = function check(str, bracketsConfig) {
  const open = bracketsConfig.map((it) => it[0]);
  const close = bracketsConfig.map((it) => it[1]);

  const arr = str.split('');
  const stack = [];
  for (let i = 0; i < arr.length; i++) {
    const openIndex = open.indexOf(arr[i]);
    const closeIndex = close.indexOf(arr[i]);
    if (closeIndex !== -1 && closeIndex !== stack.pop()) return false;
    if (openIndex !== -1) arr.push(openIndex);
  }
  return true;
}
