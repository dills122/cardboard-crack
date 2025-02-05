import { CardModel } from '../models/card.model';
import { ChecklistMap } from '../models/checklist.model';
import { ChecklistVerifier } from './checklist-verifier';
import { v4 as uuidv4 } from 'uuid';

describe('Checklist-Verifier', () => {
  it('should return empty error checklist if none found', () => {
    const list: CardModel[] = [
      {
        id: uuidv4(),
        cardNumber: '123',
        player: 'John',
        club: 'A',
        type: 'veteran',
      },
      {
        id: uuidv4(),
        cardNumber: '456',
        player: 'Doe',
        club: 'B',
        type: 'veteran',
      },
    ];
    const given: ChecklistMap = {
      test: list,
    };

    const result = ChecklistVerifier.verify(given);
    expect(result).toBeDefined();
    expect(result).toEqual({});
  });

  it('should return empty error checklist if given empty checklist', () => {
    const list: CardModel[] = [];
    const given: ChecklistMap = {
      test: list,
    };

    const result = ChecklistVerifier.verify(given);
    expect(result).toBeDefined();
    expect(result).toEqual({});

    const resultTwo = ChecklistVerifier.verify({});
    expect(resultTwo).toBeDefined();
    expect(resultTwo).toEqual({});
  });

  it('should return issue rows if any found', () => {
    const list: CardModel[] = [
      {
        id: uuidv4(),
        cardNumber: '123',
        player: 'John',
        club: 'A',
        type: 'veteran',
      },
      {
        id: uuidv4(),
        cardNumber: '456',
        player: 'Doe',
        club: null,
        type: 'rookie',
      }, // `club` is missing
      {
        id: uuidv4(),
        cardNumber: '789',
        player: null,
        club: 'C',
        type: 'retired',
      }, // `player` is missing
    ];
    const given: ChecklistMap = {
      test: list,
    };

    const result = ChecklistVerifier.verify(given);
    expect(result).toBeDefined();
    const testCategory = result['test'];
    expect(testCategory).toBeDefined();
    expect(testCategory.length).toEqual(2);
    expect(testCategory[0]).toEqual(list[1]);
    expect(testCategory[1]).toEqual(list[2]);
  });
});
