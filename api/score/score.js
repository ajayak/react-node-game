import { take } from 'lodash';

let records = [
  { id: 1, name: 'John Doe', turns: 90 },
  { id: 2, name: 'Jane Doe', turns: 11 }
];

export function getAllHighScores() {
  return take(records.sort((a, b) => a.turns > b.turns), 5);
}

export function addScore(turns) {
  const record = { turns, id: +new Date(), name: 'Awesome You!' };
  return records.push(record);
}

export function resetScores() {
  records = [];
}