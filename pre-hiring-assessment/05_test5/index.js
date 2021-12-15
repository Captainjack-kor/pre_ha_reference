function test5(arr) {
  // 주어진 배열의 각 요소(배열)를 객체로 바꾼다.
  const people = arr.map(function (person) {
    return person.reduce(function (obj, tuple) {
      let key = tuple[0];
      let value = tuple[1];
      obj[key] = value;
      return obj;
    }, {});
  });

  // 사원들을 나이순(오름차순)으로 정렬한다.
  people.sort(function (person1, person2) {
    return person1.age - person2.age;
  });

  // 사원들의 전체 이름을 배열로 만든다.
  const names = people.map(function (person) {
    if (person.firstName === undefined) {
      return person.lastName;
    } else if (person.lastName === undefined) {
      return person.firstName;
    } else {
      return `${person.firstName} ${person.lastName}`;
    }
  });

  return names;
}