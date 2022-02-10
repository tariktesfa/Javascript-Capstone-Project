/**
 * @jest-environment jsdom
 */

import { commentCounter } from '../modules/commentCounter.js';

describe('Testing comment counter', () => {
  const commentArr = [
    {
      id: 1,
      name: 'Tarik T.',
      comment: 'I loved it',
    },
    {
      id: 12,
      username: 'Josphat',
      comment: 'Great movie ever',
    },
    {
      id: 19,
      username: 'Tarikwa',
      comment: 'Not interesting',
    },
  ];
  const counter = commentCounter(commentArr);
  expect(counter).toBe(3);
});

test('Testing the number of comments is 3', () => {
  const arr = ['Amzing movie', 'Never watch such Movie', 'Very annoying'];
  const counter = commentCounter(arr);
  expect(counter).toBe(3);
});
