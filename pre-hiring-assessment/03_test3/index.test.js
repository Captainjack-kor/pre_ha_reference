/* global test3 */
// 여기서부터
const vm = require('vm');
const fs = require('fs');
const chai = require('chai');
const expect = chai.expect;

const filename = __dirname + '/index.js';
vm.runInThisContext(fs.readFileSync(filename), filename);

// 여기까지는 고칠 필요가 없습니다.
// 이 라인 이후로 테스트 케이스를 추가해주세요.

const testCases = [
  {
    input: 0,
    output: 0,
  },
  {
    input: 123,
    output: 6,
  },
  {
    input: 23489,
    output: 2,
  },
  {
    input: 111111211111111151,
    output: 0,
  },
];

describe('', function () {
  it('number 타입을 리턴해야 합니다', function () {
    expect(typeof test3(234)).to.be.equal('number');
  });

  it('234을(를) 입력받은 경우, 8을(를) 리턴해야 합니다', function () {
    expect(test3(234)).to.be.eql(8);
  });

  it('786을(를) 입력받은 경우, 0을(를) 리턴해야 합니다', function () {
    expect(test3(786)).to.be.eql(0);
  });

  it('2248을(를) 입력받은 경우, 6을(를) 리턴해야 합니다', function () {
    expect(test3(2248)).to.be.eql(6);
  });

  it('2300을(를) 입력받은 경우, 0을(를) 리턴햐야 합니다', function () {
    expect(test3(2300)).to.be.eql(0);
  });

  testCases.forEach(function ({ input, output }) {
    it('각 자리수를 반복해서 곱한 값을 정확하게 리턴해야 합니다', function () {
      expect(test3(input)).to.equal(output);
    });
  });
});
