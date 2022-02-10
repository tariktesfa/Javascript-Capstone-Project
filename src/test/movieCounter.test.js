import moviesCounter from '../modules/moviesCounter.js';

describe('Testing movie counter', () => {
  const movieArr = [
    {
      id: 7,
    },
    {
      id: 12,
    },
  ];
  const counter = moviesCounter(movieArr);

  expect(counter).toBe(2);
});

test('Testing the counter to check if the there no data ', () => {
  const arr = [];
  const counter = moviesCounter(arr);
  expect(counter).toBe(0);
});
