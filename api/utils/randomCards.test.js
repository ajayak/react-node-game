import { getRandomCardCodes } from './randomCards';
import { uniq } from 'lodash';

describe('RandomCard Utility', () => {
  it('should return exact number of cards as requested', () => {
    const cards = getRandomCardCodes(10);
    expect(cards.length).toBe(10);
  });

  it('should return unique cards', () => {
    const cards = getRandomCardCodes(10);
    expect(uniq(cards).length).toBe(10);
  });
});