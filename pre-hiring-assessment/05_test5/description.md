# test5

## 문제

사람들의 정보를 담은 배열을 입력받아 조건에 맞게 각 개인의 전체 이름을 요소로 갖는 배열을 리턴해야 합니다.

## 입력

### 인자 1 : arr

- 배열을 요소로 갖는 배열
- `arr[i]`는 한 개인에 대한 정보를 담고 있는 배열
- `arr[i]`는 `string` 또는 `number` 타입을 요소로 갖는 배열
- `arr[i]`의 길이는 2

## 출력

- `string` 타입을 요소로 갖는 배열을 리턴해야 합니다.
- 각 요소는 개인의 전체 이름은 이름(firstName)과 성(lastName) 사이에 공백을 표기합니다.
- 사람들의 전체 이름은 각 개인의 **나이순(오름차순)으로** 정렬되어야 합니다.
- 이름과 성이 하나만 있는 경우, 하나만 표기합니다.

## 주의 사항

- 이름과 성이 모두 없는 경우는 없다고 가정합니다.
- 사람들의 나이는 18 이상 120 이하의 자연수입니다.
- 사람들의 나이는 전부 다르다고 가정합니다.

## 입출력 예시

```javascript
let list = [
  [
    ['firstName', 'Joe'],
    ['age', 42],
    ['gender', 'male'],
  ],
  [
    ['firstName', 'Mary'],
    ['lastName', 'Jenkins'],
    ['age', 36],
    ['gender', 'female'],
  ],
  [
    ['lastName', 'Kim'],
    ['age', 40],
    ['gender', 'female'],
  ],
];

let output = test5(list);
console.log(output); // --> ['Mary Jenkins', 'Kim', 'Joe'];
```
