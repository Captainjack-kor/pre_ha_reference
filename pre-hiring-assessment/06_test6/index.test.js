/* global test6 */
// 여기서부터
const vm = require('vm');
const fs = require('fs');
const chai = require('chai');
const expect = chai.expect;

const filename = __dirname + '/index.js';
vm.runInThisContext(fs.readFileSync(filename), filename);

// 여기까지는 고칠 필요가 없습니다.
// 이 라인 이후로 테스트 케이스를 추가해주세요.

describe('', function () {
  it('함수를 리턴해야 합니다', function () {
    expect(typeof test6()).to.be.equal('function');
  });

  it('리턴된 함수를 한번 실행했을 때는 0을(를) 리턴해야 합니다', function () {
    const fn = test6();
    expect(fn()).to.be.equal(0);
  });

  it('리턴된 함수를 두번째 실행했을 때는 1을(를) 리턴해야 합니다', function () {
    const fn = test6();
    fn();
    expect(fn()).to.be.equal(1);
  });

  it('리턴된 함수의 실행마다, 다음 피보나치 수를 리턴해야 합니다', function () {
    const fn = test6();
    expect(fn()).to.be.equal(0);
    expect(fn()).to.be.equal(1);
    expect(fn()).to.be.equal(1);
    expect(fn()).to.be.equal(2);
    expect(fn()).to.be.equal(3);
    expect(fn()).to.be.equal(5);
    expect(fn()).to.be.equal(8);
    expect(fn()).to.be.equal(13);
    expect(fn()).to.be.equal(21);
    expect(fn()).to.be.equal(34);
    expect(fn()).to.be.equal(55);
    expect(fn()).to.be.equal(89);
  });
});
