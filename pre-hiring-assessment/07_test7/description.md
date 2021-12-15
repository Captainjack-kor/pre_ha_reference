# test7

## 문제

객체를 요소로 갖는 배열과 id를 입력받아, 해당 id값을 가지고 있는 객체를 리턴해야 합니다.

## 입력

### 인자 1 : arr

- 객체를 요소로 갖는 배열
- `arr[i]`는 `'id'`, `'name'`, `'children'` 등의 속성을 갖는 객체

### 인자 2 : id

- `number` 타입의 id

## 출력

- `object` 타입을 리턴해야 합니다.

## 주의 사항

- 입력으로 주어지는 배열은 재귀적 구조를 가지고 있습니다. (입출력 예시 참고)
- 배열이 요소인 객체가 `'children'` 속성을 가질 경우, 해당 값은 초기 입력(arr)과 같은 구조를 지닌 배열입니다.
- 중첩 구조의 깊이(depth)에는 제한이 없습니다.
- 함수 `test7`은 **재귀 함수로 구현**되어야 합니다.
- 입력받은 id를 가진 객체가 없을 경우, `null`을 리턴해야 합니다.

## 입출력 예시

```javascript
let input = [
  {
    id: 1,
    name: 'johnny',
  },
  {
    id: 2,
    name: 'ingi',
    children: [
      {
        id: 3,
        name: 'johnson',
      },
      {
        id: 5,
        name: 'steve',
        children: [
          {
            id: 6,
            name: 'lisa',
          },
        ],
      },
      {
        id: 11,
      },
    ],
  },
  {
    id: '13',
  },
];

let output = test7(input, 1);
console.log(output); // --> { id: 1, name: 'johnny' }

output = test7(input, 5);
console.log(output); // --> { id: 5, name: 'steve', children: [{ id: 6, name: 'lisa' }] }

output = test7(input, 99);
console.log(output); // --> null
```
