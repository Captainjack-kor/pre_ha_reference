/* global test7 */
// 여기서부터
const fs = require('fs');
const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const vm = require('vm');

const filename = __dirname + '/index.js';
vm.runInThisContext(fs.readFileSync(filename), filename);

const func = test7;

let spy = null;
afterEach(function () {
  spy && spy.restore();
});

function prepareTest(...args) {
  func(...args);
  spy = sinon.spy(global, func.name);
}

// 여기까지는 고칠 필요가 없습니다.
// 이 라인 이후로 테스트 케이스를 추가해주세요.

let testInput = [
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
        id: 4,
        name: 'katy',
      },
      {
        id: 5,
        name: 'steve',
        children: [
          {
            id: 6,
            name: 'lisa',
          },
          {
            id: 7,
            name: 'penny',
            children: [
              {
                id: 8,
                name: 'john',
              },
              {
                id: 9,
                name: 'hoyong',
              },
            ],
          },
          {
            id: 10,
          },
        ],
      },
      {
        id: 11,
      },
      {
        id: 12,
      },
    ],
  },
  {
    id: 13,
    name: 'Tywin Lannister',
    children: [
      {
        id: 57,
        name: 'Cersei Lannister',
        children: [
          { id: 12, name: 'Joffrey Baratheon' },
          { id: 98, name: 'Myrcella Baratheon' },
          { id: 25, name: 'Tommen Baratheon' },
        ],
      },
      {
        id: 62,
        name: 'Jaime Lannister',
      },
      {
        id: 69,
        name: 'Tyrion Lannister',
      },
    ],
  },
  {
    id: 14,
  },
];

describe('', function () {
  it('object 타입을 리턴해야 합니다', function () {
    const input = [
      {
        id: '1',
        name: 'johnny',
      },
    ];
    const output = test7(input, '1');
    expect(typeof output).to.be.equal('object');
  });

  it("차례대로 [{ id: 1, name: 'john', children: [] }], 1을(를) 입력받은 경우, { id: 1, name: 'john', children: [] }을(를) 리턴해야 합니다", function () {
    const input = [
      {
        id: 1,
        name: 'john',
        children: [],
      },
    ];
    expect(test7(input, 1)).to.deep.equal({
      id: 1,
      name: 'john',
      children: [],
    });
  });

  it("차례대로 (생략된 입력 - Lannisters), 12을(를) 입력받은 경우, { id: 12, name: 'Joffrey Baratheon' }을(를) 리턴해야 합니다", function () {
    const Lannisters = [
      {
        id: 55,
        name: 'Tywin Lannister',
        children: [
          {
            id: 57,
            name: 'Cersei Lannister',
            children: [
              { id: 12, name: 'Joffrey Baratheon' },
              { id: 98, name: 'Myrcella Baratheon' },
              { id: 25, name: 'Tommen Baratheon' },
            ],
          },
          {
            id: 62,
            name: 'Jaime Lannister',
          },
          {
            id: 69,
            name: 'Tyrion Lannister',
          },
        ],
      },
    ];
    expect(test7(Lannisters, 12)).to.deep.equal({
      id: 12,
      name: 'Joffrey Baratheon',
    });
  });

  it('입력받은 id를 가진 객체가 없는 경우, null을 리턴해야 합니다', function () {
    expect(test7(testInput, 0)).to.deep.equal(null);
  });

  it('입력받은 id를 가진 객체가 없는 경우, null을 리턴해야 합니다', function () {
    expect(test7(testInput, 78)).to.deep.equal(null);
  });

  it('재귀 호출의 횟수는 객체가 담겨있는 깊이에 준해야합니다', function () {
    const target = 4;
    prepareTest(testInput, target);
    expect(test7(testInput, target)).to.deep.equal({
      id: 4,
      name: 'katy',
    });
    expect(test7.callCount).to.be.within(2, 4);
  });

  it('재귀 호출의 횟수는 객체가 담겨있는 깊이에 준해야합니다', function () {
    const target = 7;
    prepareTest(testInput, target);
    expect(test7(testInput, target)).to.deep.equal({
      id: 7,
      name: 'penny',
      children: [
        {
          id: 8,
          name: 'john',
        },
        {
          id: 9,
          name: 'hoyong',
        },
      ],
    });

    expect(test7.callCount).to.be.within(3, 7);
  });

  it('재귀 호출의 횟수는 객체가 담겨있는 깊이에 준해야합니다', function () {
    const target = 9;
    prepareTest(testInput, target);
    expect(test7(testInput, target)).to.deep.equal({
      id: 9,
      name: 'hoyong',
    });

    expect(test7.callCount).to.be.within(4, 9);
  });

  it('재귀 호출의 횟수는 객체가 담겨있는 깊이에 준해야합니다', function () {
    const target = 69;
    prepareTest(testInput, target);
    expect(test7(testInput, target)).to.deep.equal({
      id: 69,
      name: 'Tyrion Lannister',
    });

    expect(test7.callCount).to.be.within(2, 19);
  });
});
