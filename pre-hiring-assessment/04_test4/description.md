# test4

## 문제

사원들의 정보를 배열로 입력받아 HTML 엘리먼트의 형태로 변형해서 `ul#container`에 append 합니다.

## 입력

### 인자 1 : arr

- 객체를 요소로 갖는 배열
- `arr[i]`는 `'firstName'`, `'lastName'`, `'age'`, `'role'` 등의 속성을 갖는 객체
- `'firstName'`, `'lastName'`, `'role'` 등의 속성은 `string` 타입
- `'age'` 속성은 `number` 타입 (1 이상의 정수)

## 출력

- 별도의 리턴문(return statement)을 작성하지 않습니다.

## 주의 사항

- `<a>` 요소로 만들어진 사원의 이름을 클릭할 경우, 제공되는 printRole 함수가 실행되어 해당 사원의 role이 콘솔에 출력되어야 합니다.

## 입출력 예시

```javascript
let list = [
  { firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk' },
  { firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager' },
];

test4(list);
// --> 'ul#container'가 아래와 같이 변경되어야 합니다.
```

```html
<ul id="container">
  <li>
    <a class="name">Joe Blow</a>
    <div class="age">42</div>
  </li>
  <li>
    <a class="name">Mary Jenkins</a>
    <div class="age">36</div>
  </li>
</ul>
```

## 힌트

- `ul#container`는 주어져 있습니다.

```html
<!DOCTYPE html>
<html>
  <body>
    <ul id="container"></ul>
  </body>
</html>
```

- [jsFiddle](https://jsfiddle.net/19fb3zy7/)에서 HTML, JS를 실험해 보실 수 있습니다
