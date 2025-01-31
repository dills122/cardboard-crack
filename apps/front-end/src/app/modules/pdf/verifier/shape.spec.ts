import { CardModel } from '../models/card.model';
import { isSameShape, Issues } from './shape';

describe('Shape', () => {
  it('should return true if given empty list', () => {
    const given: CardModel[] = [];

    const result = isSameShape(given);
    expect(result).toBeDefined();
    const { isValid, issues, validationStatus } = result;
    expect(isValid).toBeTruthy();
    expect(issues).toEqual({} as Issues);
    expect(validationStatus).toEqual('valid');
  });

  it('should return true if list items are same shape', () => {
    const given: CardModel[] = [
      { cardNumber: '123', player: 'John', club: 'A', type: 'Gold' },
      { cardNumber: '456', player: 'Doe', club: 'B', type: 'Silver' },
    ];

    const result = isSameShape(given);
    expect(result).toBeDefined();
    const { isValid, issues, validationStatus } = result;
    expect(isValid).toBeTruthy();
    expect(validationStatus).toEqual('valid');
    expect(issues).toEqual({} as Issues);
  });

  it('should return issue rows if any found', () => {
    const given: CardModel[] = [
      { cardNumber: '123', player: 'John', club: 'A', type: 'Gold' },
      { cardNumber: '456', player: 'Doe', club: null, type: 'Silver' }, // `club` is missing
      { cardNumber: '789', player: null, club: 'C', type: 'Bronze' }, // `player` is missing
    ];

    const result = isSameShape(given);
    expect(result).toBeDefined();
    const { isValid, issues, validationStatus } = result;
    expect(isValid).toBeFalsy();
    expect(validationStatus).toEqual('partial');
    const issuesWithClubProp = issues.club;
    expect(issuesWithClubProp.length).toEqual(1);
    expect(issuesWithClubProp[0]).toEqual({
      cardNumber: '456',
      player: 'Doe',
      club: null,
      type: 'Silver',
    });
    const issuesWithPlayerProp = issues.player;
    expect(issuesWithPlayerProp.length).toEqual(1);
    expect(issuesWithPlayerProp[0]).toEqual({
      cardNumber: '789',
      player: null,
      club: 'C',
      type: 'Bronze',
    });
  });

  it('should return issue rows if any found, multiple in each category', () => {
    const given: CardModel[] = [
      { cardNumber: '123', player: 'John', club: 'A', type: 'Gold' },
      { cardNumber: '456', player: 'Doe', club: null, type: 'Silver' },
      { cardNumber: '789', player: null, club: 'C', type: 'Bronze' },
      { cardNumber: '289', player: null, club: 'Z', type: 'Triple Gold' },
    ];

    const result = isSameShape(given);
    expect(result).toBeDefined();
    const { isValid, issues, validationStatus } = result;
    expect(isValid).toBeFalsy();
    expect(validationStatus).toEqual('partial');
    const issuesWithClubProp = issues.club;
    expect(issuesWithClubProp.length).toEqual(1);
    expect(issuesWithClubProp[0]).toEqual({
      cardNumber: '456',
      player: 'Doe',
      club: null,
      type: 'Silver',
    });
    const issuesWithPlayerProp = issues.player;
    expect(issuesWithPlayerProp.length).toEqual(2);
    expect(issuesWithPlayerProp[0]).toEqual({
      cardNumber: '789',
      player: null,
      club: 'C',
      type: 'Bronze',
    });
    expect(issuesWithPlayerProp[1]).toEqual({
      cardNumber: '289',
      player: null,
      club: 'Z',
      type: 'Triple Gold',
    });
  });

  it('should NOT flag a null column/property if all of that property is null in the list', () => {
    const given: CardModel[] = [
      { cardNumber: '123', player: 'John', club: null, type: 'Gold' },
      { cardNumber: '456', player: 'Doe', club: null, type: 'Silver' },
      { cardNumber: '789', player: 'Bob', club: null, type: 'Bronze' },
      { cardNumber: '289', player: 'Joe', club: null, type: 'Triple Gold' },
    ];
    const result = isSameShape(given);
    expect(result).toBeDefined();
    const { isValid, issues, validationStatus } = result;
    expect(isValid).toBeTruthy();
    expect(issues).toEqual({} as Issues);
    expect(validationStatus).toEqual('valid');
  });

  it('should only flag mis-match & ignore the fully null club column', () => {
    const given: CardModel[] = [
      { cardNumber: '123', player: 'John', club: null, type: 'Gold' },
      { cardNumber: '456', player: 'Doe', club: null, type: 'Silver' },
      { cardNumber: '789', player: 'Bob', club: null, type: 'Bronze' },
      { cardNumber: '289', player: 'Joe', club: null, type: null },
    ];
    const result = isSameShape(given);
    expect(result).toBeDefined();
    const { isValid, issues, validationStatus } = result;
    expect(isValid).toBeFalsy();
    const issueWithType = issues.type;
    expect(issueWithType.length).toEqual(1);
    expect(issueWithType[0]).toEqual({
      cardNumber: '289',
      player: 'Joe',
      club: null,
      type: null,
    });
    expect(validationStatus).toEqual('partial');
  });

  it('should flag all columns if everything is null', () => {
    const given: CardModel[] = [
      { cardNumber: null, player: null, club: null, type: null },
      { cardNumber: null, player: null, club: null, type: null },
    ];
    const result = isSameShape(given);
    expect(result).toBeDefined();
    const { isValid, issues, validationStatus } = result;
    expect(isValid).toBeFalsy();
    expect(Object.keys(issues).length).toEqual(0);
    expect(validationStatus).toEqual('error');
  });
});
