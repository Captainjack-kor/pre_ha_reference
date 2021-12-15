/* global test5 */
// 여기서부터
const vm = require('vm');
const fs = require('fs');
const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');

const filename = __dirname + '/index.js';
vm.runInThisContext(fs.readFileSync(filename), filename);

// 여기까지는 고칠 필요가 없습니다.
// 이 라인 이후로 테스트 케이스를 추가해주세요.

const testCases = [
  {
    input: [
      [
        ['firstName', 'Mary'],
        ['age', 36],
        ['lastName', 'Jenkins'],
      ],
      [
        ['age', 23],
        ['lastName', 'Revees'],
      ],
      [
        ['firstName', 'Samuel'],
        ['age', 77],
      ],
    ],
    output: ['Revees', 'Mary Jenkins', 'Samuel'],
  },
  {
    input: [
      [
        ['firstName', 'Mary'],
        ['lastName', 'Jenkins'],
        ['age', 77],
        ['middleName', 'Junior'],
      ],
      [
        ['lastName', 'Revees'],
        ['gender', 'male'],
        ['occupation', 'lawyer'],
        ['age', 36],
        ['hobby', 'reading'],
      ],
      [
        ['firstName', 'Samuel'],
        ['age', 22],
      ],
    ],
    output: ['Samuel', 'Revees', 'Mary Jenkins'],
  },
  {
    input: [
      [
        ['age', 77],
        ['firstName', 'Mary'],
        ['lastName', 'Jenkins'],
      ],
      [
        ['age', 36],
        ['firstName', 'Keanu'],
      ],
      [
        ['age', 42],
        ['lastName', 'Jackson'],
      ],
    ],
    output: ['Keanu', 'Jackson', 'Mary Jenkins'],
  },
];

describe('', function () {
  it('배열을 리턴해야 합니다', function () {
    const input = [
      [
        ['firstName', 'Mary'],
        ['lastName', 'Jenkins'],
        ['age', 36],
      ],
    ];
    const output = test5(input);
    expect(Array.isArray(output)).to.be.true;
  });

  it("(생략된 입력 - movieStars)을(를) 입력받은 경우, ['Jamie Foxx', 'Keanu']을(를) 리턴해야 합니다", function () {
    const movieStars = [
      [
        ['firstName', 'Keanu'],
        ['age', 55],
      ],
      [
        ['firstName', 'Jamie'],
        ['lastName', 'Foxx'],
        ['age', 52],
      ],
    ];
    expect(test5(movieStars)).to.deep.equal(['Jamie Foxx', 'Keanu']);
  });

  it("(생략된 입력 - avengers)을(를) 입력받은 경우, ['IronyMan', 'Captain Americano', 'Master Strange']을(를) 리턴해야 합니다", function () {
    const avengers = [
      [
        ['firstName', 'Captain'],
        ['lastName', 'Americano'],
        ['age', 105],
      ],
      [
        ['firstName', 'Master'],
        ['lastName', 'Strange'],
        ['age', 120],
      ],
      [
        ['firstName', 'IronyMan'],
        ['age', 55],
      ],
    ];
    expect(test5(avengers)).to.deep.equal([
      'IronyMan',
      'Captain Americano',
      'Master Strange',
    ]);
  });

  testCases.forEach(function ({ input, output }) {
    it('각 개인의 전체 이름을 나이순으로 담은 배열을 리턴해야 합니다', function () {
      expect(test5(input)).to.deep.equal(output);
    });
  });
});
