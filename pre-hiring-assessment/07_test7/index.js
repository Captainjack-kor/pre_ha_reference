function test7(arr, id) {
  // 재귀 알고리즘을 사용
  //  주어진 문제를 중첩의 깊이별로 나누어 해결한다.
  // 1. 기저 사례(base case)는 더이상 검사할 항목이 남아있지 않을 경우
  // 2. recursive case:
  //  2.1. 현재 깊이의 객체만 검사한다.
  //  2.2. 각 객체의 children, 즉 바로 다음 깊이의 객체들을 모은다.
  //  2.3. 현재 깊이에서 목표가 발견되지 않은 경우, 남아 있는 문제를 탐색한다.

  // base case
  if (arr.length === 0) {
    return null;
  }

  // recursive case
  let childrenArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id === id) {
      return arr[i];
    }

    // if (Array.isArray(arr[i].children)) 를 줄이기 위해 '||'로 dafault value 설정
    childrenArr = childrenArr.concat(arr[i].children || []);
  }

  return test7(childrenArr, id);
}

// 다른 풀이 방법 (DFS, 깊이 우선 탐색)
// function test7(arr, id) {
//   // 재귀 알고리즘을 사용
//   //  주어진 문제를 각 객체별로 나누어 해결한다.
//   // 1. 기저 사례(base case)는 더이상 검사할 항목이 남아있지 않을 경우 (children이 없는 경우)
//   // 2. recursive case:
//   //  2.1. 순서대로 각 객체와 해당 객체의 chidren을 검사한다.
//   //  2.2. 모든 경우(loop)에도 목표가 발견되지 않은 경우, null을 리턴한다.

//   // base case
//   if (arr.length === 0) {
//     return null;
//   }

//   // recursive case
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].id === id) {
//       return arr[i];
//     }

//     // if (Array.isArray(arr[i].children)) 를 줄이기 위해 '||'로 dafault value 설정
//     const result = test7(arr[i].children || [], id);
//     if (result !== null) {
//       return result;
//     }
//   }

//   return null;
// }