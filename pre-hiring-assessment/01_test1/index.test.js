/* global test1 */
// 여기서부터
const vm = require('vm');
const fs = require('fs');
const chai = require('chai');
const sinon = require('sinon');
const expect = chai.expect;

const filename = __dirname + '/index.js';
vm.runInThisContext(fs.readFileSync(filename), filename);

sinon.spy(String.prototype, 'trim');
beforeEach(function () {
  String.prototype.trim.resetHistory();
});

// 여기까지는 고칠 필요가 없습니다.
// 이 라인 이후로 테스트 케이스를 추가해주세요.

const testCases = [
  {
    input: 'yes yes Yes YES no NO NO NOOOO nono NONO   ',
    output: { yes: 4, no: 3, noooo: 1, nono: 2 },
  },
  {
    input:
      'I felt happy because I saw the others were HAPPY and because I knew I should feel happy but I was not really happy     ',
    output: {
      i: 5,
      and: 1,
      because: 2,
      but: 1,
      feel: 1,
      felt: 1,
      happy: 4,
      knew: 1,
      not: 1,
      others: 1,
      really: 1,
      saw: 1,
      should: 1,
      the: 1,
      was: 1,
      were: 1,
    },
  },
  {
    input:
      '       So I said yes to Thomas Clinton and later thought that I had said yes TO God and later still realized I had said yes only to Thomas Clinton',
    output: {
      clinton: 2,
      god: 1,
      i: 3,
      so: 1,
      thomas: 2,
      and: 2,
      had: 2,
      later: 2,
      only: 1,
      realized: 1,
      said: 3,
      still: 1,
      that: 1,
      thought: 1,
      to: 3,
      yes: 3,
    },
  },
  {
    input:
      'James      while John Had hAd haD HAd had had HAD had had had had a better effect on the teacher',
    output: {
      james: 1,
      john: 1,
      a: 1,
      better: 1,
      effect: 1,
      had: 11,
      on: 1,
      teacher: 1,
      the: 1,
      while: 1,
    },
  },
  {
    input:
      '  That   that is   is that   that is   not is     not is that it it is  ',
    output: { is: 6, it: 2, not: 2, that: 5 },
  },
];

describe('', function () {
  it('str.trim 사용은 금지됩니다', function () {
    testCases.forEach(function ({ input }) {
      test1(input);
    });
    expect(String.prototype.trim.called).to.equal(false);
  });

  it('객체를 리턴해야 합니다', function () {
    const output = test1('test input');
    expect(typeof output).to.be.equal('object');
    expect(output === null).to.be.equal(false);
    expect(Array.isArray(output)).to.be.false;
  });

  it("'ask a ask'을(를) 입력받은 경우, { ask: 2, a: 1 }을(를) 리턴해야 합니다", function () {
    expect(test1('ask a ask')).to.deep.equal({ ask: 2, a: 1 });
  });

  it("'  a  b c d C b A '을(를) 입력받은 경우, { a: 2, b: 2, c: 2, d: 1 }을(를) 리턴해야 합니다", function () {
    expect(test1('a b c d C b A ')).to.deep.equal({ a: 2, b: 2, c: 2, d: 1 });
  });

  it('빈 문자열을 입력받은 경우, 빈 객체를 리턴해야 합니다', function () {
    expect(test1('')).to.deep.equal({});
  });

  it("'   '을(를) 입력받은 경우, 빈 객체를 리턴해야 합니다", function () {
    expect(test1('   ')).to.deep.equal({});
  });

  testCases.forEach(function ({ input, output }) {
    it('문자열에 등장하는 단어의 개수를 정확하게 리턴해야 합니다', function () {
      expect(test1(input)).to.deep.equal(output);
    });
  });
});
