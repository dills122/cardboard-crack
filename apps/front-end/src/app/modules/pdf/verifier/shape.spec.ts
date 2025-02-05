import { CardModel } from '../models/card.model';
import { isSameShape, Issues } from './shape';
import { v4 as uuidv4 } from 'uuid';

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

    const result = isSameShape(given);
    expect(result).toBeDefined();
    const { isValid, issues, validationStatus } = result;
    expect(isValid).toBeTruthy();
    expect(validationStatus).toEqual('valid');
    expect(issues).toEqual({} as Issues);
  });

  it('should return issue rows if any found', () => {
    const given: CardModel[] = [
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

    const result = isSameShape(given);
    expect(result).toBeDefined();
    const { isValid, issues, validationStatus } = result;
    expect(isValid).toBeFalsy();
    expect(validationStatus).toEqual('partial');
    const issuesWithClubProp = issues.club;
    expect(issuesWithClubProp.length).toEqual(1);
    expect(issuesWithClubProp[0]).toEqual(given[1]);
    const issuesWithPlayerProp = issues.player;
    expect(issuesWithPlayerProp.length).toEqual(1);
    expect(issuesWithPlayerProp[0]).toEqual(given[2]);
  });

  it('should return issue rows if any found, multiple in each category', () => {
    const given: CardModel[] = [
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
        type: 'veteran',
      },
      {
        id: uuidv4(),
        cardNumber: '789',
        player: null,
        club: 'C',
        type: 'veteran',
      },
      {
        id: uuidv4(),
        cardNumber: '289',
        player: null,
        club: 'Z',
        type: 'veteran',
      },
    ];

    const result = isSameShape(given);
    expect(result).toBeDefined();
    const { isValid, issues, validationStatus } = result;
    expect(isValid).toBeFalsy();
    expect(validationStatus).toEqual('partial');
    const issuesWithClubProp = issues.club;
    expect(issuesWithClubProp.length).toEqual(1);
    expect(issuesWithClubProp[0]).toEqual(given[1]);
    const issuesWithPlayerProp = issues.player;
    expect(issuesWithPlayerProp.length).toEqual(2);
    expect(issuesWithPlayerProp[0]).toEqual(given[2]);
    expect(issuesWithPlayerProp[1]).toEqual(given[3]);
  });

  it('should NOT flag a null column/property if all of that property is null in the list', () => {
    const given: CardModel[] = [
      {
        id: uuidv4(),
        cardNumber: '123',
        player: 'John',
        club: null,
        type: 'veteran',
      },
      {
        id: uuidv4(),
        cardNumber: '456',
        player: 'Doe',
        club: null,
        type: 'veteran',
      },
      {
        id: uuidv4(),
        cardNumber: '789',
        player: 'Bob',
        club: null,
        type: 'veteran',
      },
      {
        id: uuidv4(),
        cardNumber: '289',
        player: 'Joe',
        club: null,
        type: 'veteran',
      },
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
      {
        id: uuidv4(),
        cardNumber: '123',
        player: 'John',
        club: null,
        type: 'veteran',
      },
      {
        id: uuidv4(),
        cardNumber: '456',
        player: 'Doe',
        club: null,
        type: 'veteran',
      },
      {
        id: uuidv4(),
        cardNumber: '789',
        player: 'Bob',
        club: null,
        type: 'veteran',
      },
      {
        id: uuidv4(),
        cardNumber: '289',
        player: 'Joe',
        club: null,
        type: null,
      },
    ];
    const result = isSameShape(given);
    expect(result).toBeDefined();
    const { isValid, issues, validationStatus } = result;
    expect(isValid).toBeFalsy();
    const issueWithType = issues.type;
    expect(issueWithType.length).toEqual(1);
    expect(issueWithType[0]).toEqual(given[3]);
    expect(validationStatus).toEqual('partial');
  });

  it('should flag all columns if everything is null', () => {
    const given: CardModel[] = [
      { id: uuidv4(), cardNumber: null, player: null, club: null, type: null },
      { id: uuidv4(), cardNumber: null, player: null, club: null, type: null },
    ];
    const result = isSameShape(given);
    expect(result).toBeDefined();
    const { isValid, issues, validationStatus } = result;
    expect(isValid).toBeFalsy();
    expect(Object.keys(issues).length).toEqual(0);
    expect(validationStatus).toEqual('error');
  });
});
