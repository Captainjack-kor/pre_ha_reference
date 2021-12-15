function test6() {
  // 피보나치의 초항(first term)은 2개
  // 항상 2개의 피보나치 수를 유지하면서, 추가로 구해진 수가 처음 수를 밀어내는 방식으로 구현한다.
  let first = 0,
    second = 1;

  // 클로저의 형태로 리턴이 필요
  return function () {
    // 매 호출마다 아직 사용된 적 없는 수(첫번째 수)를 리턴한다.
    const fibNum = first;

    // 새로운 수를 구하고, 피보나치 수 묶음을 갱신한다.
    const third = first + second;
    first = second;
    second = third;

    return fibNum;
  };
}