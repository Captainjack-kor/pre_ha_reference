function printRole(user) {
  // Joe Blow를 클릭하면 clerk 이
  // Mary Jenkins를 클릭하면 manager 가 찍힙니다.
  // 이 함수는 수정하지 마십시오.
  console.log(user.role);
}

function makeElement(tag, className, value) {
  let element = document.createElement(tag);
  if (className !== undefined) {
    element.className = className;
  }
  element.textContent = value;
  return element;
}

function test4(arr) {
  let elements = arr.map(function (employee) {
    let employeeLi = makeElement('li');
    let nameAnchor = makeElement(
      'a',
      'name',
      `${employee.firstName} ${employee.lastName}`
    );
    let ageDiv = makeElement('div', 'age', employee.age);

    nameAnchor.addEventListener('click', function () {
      printRole(employee);
    });

    employeeLi.appendChild(nameAnchor);
    employeeLi.appendChild(ageDiv);
    return employeeLi;
  });

  let container = document.querySelector('#container');
  elements.forEach(function (el) {
    container.appendChild(el);
  });

  console.log(container.innerHTML);
}