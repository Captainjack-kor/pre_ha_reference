function test2(num) {
  // 입력받은 수를 문자열로 바꾸고 이를 다시 배열로 바꾼다.
  let arr = String(num).split('');

  // ['1', '1', '4', '8'] 이면 그대로 숫자로 만들어 더하면 되지만,
  // ['-', '3', '1', '6'] 이라면, ['-3', '1', '6'] 으로 바꿔주는 것이 유리하다.

  if (arr[0] === '-') {
    arr = arr.slice(1);
    arr[0] = '-' + arr[0];
  }

  // 배열의 요소를 숫자로 변환 후, 하나의 값으로 만들기 위해 reduce 사용한다.
  return arr.map(Number).reduce(function (tally, digit) {
    return tally + digit;
  });
}