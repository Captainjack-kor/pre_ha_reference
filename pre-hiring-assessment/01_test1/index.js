function test1(str) {
  return str
    .toLowerCase()
    .split(' ') // 공백을 기준으로 문자열을 나눈다.
    .filter((letter) => letter !== '') // 빈 문자열을 걸러낸다.
    .reduce(function (frequency, word) {
      if (frequency[word] === undefined) {
        frequency[word] = 1;
      } else {
        frequency[word]++;
      }
      return frequency;
    }, {});
}