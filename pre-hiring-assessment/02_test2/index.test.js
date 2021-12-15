/* global test2 */
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
  { input: 512, output: 8 },
  { input: 705, output: 12 },
  { input: 101010101, output: 5 },
  { input: 2002, output: 4 },
  { input: -999, output: 9 },
  { input: -1000001, output: 0 },
  { input: -0, output: 0 },
];

describe('', function () {
  it('number 타입을 리턴해야 합니다', function () {
    expect(typeof test2(2002)).to.be.equal('number');
  });

  it('0을(를) 입력받은 경우, 0을(를) 리턴해야 합니다', function () {
    expect(test2(0)).to.be.equal(0);
  });

  it('142을(를) 입력받은 경우, 7을(를) 리턴해야 합니다', function () {
    expect(test2(142)).to.equal(7);
  });

  it('100001을(를) 입력받은 경우, 2을(를) 리턴해야 합니다', function () {
    expect(test2(100001)).to.equal(2);
  });

  it('-912을(를) 입력받은 경우, -6을(를) 리턴해야 합니다', function () {
    expect(test2(-912)).to.equal(-6);
  });

  testCases.forEach(function ({ input, output }) {
    it('각 자리수를 더한 값을 정확하게 리턴해야 합니다', function () {
      expect(test2(input)).to.be.equal(output);
    });
  });
});
