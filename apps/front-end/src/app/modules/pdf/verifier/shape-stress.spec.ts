import { isSameShape, Issues } from './shape';
import { CardModel } from '../models/card.model';
import { v4 as uuidv4 } from 'uuid';

describe('Shape-Stress', () => {
  it('should process a massive dataset efficiently', () => {
    const NUM_RECORDS = 100000; // Adjust this to test different scales
    const startTime = performance.now(); // Start timing

    // Generate a massive list with a consistent shape
    const largeTestData: CardModel[] = Array.from(
      { length: NUM_RECORDS },
      (_, i) => ({
        id: uuidv4(),
        cardNumber: i.toString(),
        player: `Player${i}`,
        club: i % 2 === 0 ? 'ClubA' : i % 5 ? null : 'ClubB', // Alternating club values
        type: i % 3 === 0 ? null : 'veteran', // Inject some null values
      })
    );

    // Run function and measure execution time
    const result = isSameShape(largeTestData);
    const endTime = performance.now(); // Stop timing

    console.log(
      `Processed ${NUM_RECORDS} records in ${(endTime - startTime).toFixed(
        2
      )} ms`
    );

    expect(result).toBeDefined();
    expect(result.isValid).toBeFalsy(); // Should be valid since all rows follow the same pattern
    expect(result.validationStatus).toEqual('partial');
    const { cardNumber, club, player, type } = result.issues;
    console.log('-----------ISSUES-----------');
    console.log(
      `cardNumber: ${cardNumber ? cardNumber.length : 'N/A'} -- club: ${
        club ? club.length : 'N/A'
      } -- player: ${player ? player.length : 'N/A'} -- type: ${
        type ? type.length : 'N/A'
      }`
    );
  });
});
