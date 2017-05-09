import { uniq, take } from 'lodash';

const values = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 0, 'J', 'Q', 'K'];
const suits = ['S', 'D', 'C', 'H'];

export function getRandomCardCodes(count) {
  const result = [];
  for (let i = 0; i < 20; i++) {
    const randomValue = values[Math.floor(Math.random() * 13)];
    const randomSuite = suits[Math.floor(Math.random() * 4)];
    result.push(`${randomValue}${randomSuite}`);
  }
  return take(uniq(result), count);
}