module.exports = function check(str, bracketsConfig) {
  const open = bracketsConfig.map((it) => it[0]);
  const close = bracketsConfig.map((it) => it[1]);

  // const arr = str.split('');
  // const stack = [];
  // for (let i = 0; i < arr.length; i++) {
  //   const openIndex = open.indexOf(arr[i]);
  //   const closeIndex = close.indexOf(arr[i]);
  //   // if (closeIndex !== -1 && stack.length === 0 ) return false;
  //   if (closeIndex !== -1 && closeIndex !== stack.pop()) return false;
  //   if (openIndex !== -1) stack.push(openIndex);
  // }
  const pairs = new Map(bracketsConfig);
  
  const stack = [];
  
  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (pairs.has(char)) {
      stack.push(char);
    } else {
      const lastOpeningChar = stack.pop();
      if (lastOpeningChar !== char && pairs.get(lastOpeningChar) !== char) {
        return false;
      }
    }
  }
  return !stack.length;
}
