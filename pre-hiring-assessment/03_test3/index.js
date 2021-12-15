function test3(num) {
  // 재귀 알고리즘을 사용
  // 1. 기저 사례(base case)는 입력받은 수가 한 자리 수일 경우
  // 2. recursive case:
  //  2.1. 입력받은 수의 각 자리수를 곱하고 (reduce)
  //  2.2. 그 결과를 재귀 호출의 인자로 전달한다.

  // base case: 한 자리 수일 경우
  if (num < 10) {
    return num;
  }

  // recursive case
  let arr = String(num).split('');
  let reducedNum = arr.map(Number).reduce(function (tally, num) {
    return tally * num;
  });

  return test3(reducedNum);
}