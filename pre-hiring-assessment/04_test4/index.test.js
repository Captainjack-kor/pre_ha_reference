/* global test4, printRole */
// 여기서부터
const fs = require('fs');
const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const vm = require('vm');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const { window } = new JSDOM(
  '<!DOCTYPE html><html><body><ul id="container"></ul></body></html>'
);

// runInThisContext의 코드는 전역 변수에는 접근 가능하므로
// document를 전역 변수로 선언
global.document = window.document;

const filename = __dirname + '/index.js';
vm.runInThisContext(fs.readFileSync(filename), filename);

sinon.spy(global, 'printRole');

// 여기까지는 고칠 필요가 없습니다.
// 이 라인 이후로 테스트 케이스를 추가해주세요.

describe('', function () {
  let container = document.getElementById('container');
  let input = [
    { firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk' },
    { firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager' },
  ];

  it('결과 창 안에는 li 엘리먼트가 직원 수만큼 존재해야 합니다', function () {
    test4(input);
    expect(container.children.item(0).nodeName).to.equal('LI');
    expect(container.children.item(1).nodeName).to.equal('LI');
    container.innerHTML = '';
  });

  it('li 엘리먼트의 구성이 문제에 제시된 html과 일치해야 합니다', function () {
    test4(input);
    expect(container.children.item(0).children.item(0).outerHTML).to.equal(
      '<a class="name">Joe Blow</a>'
    );
    expect(container.children.item(0).children.item(1).outerHTML).to.equal(
      '<div class="age">42</div>'
    );
    container.innerHTML = '';
  });

  it('이름을 클릭하면 printRole 함수가 실행되어야 합니다', function () {
    test4(input);
    container.children.item(0).children.item(0).click();
    container.children.item(1).children.item(0).click();
    expect(printRole.callCount).to.equal(2);
  });
});
