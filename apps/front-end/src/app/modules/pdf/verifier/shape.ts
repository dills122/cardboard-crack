import { CardModel, CardModelKeys } from '../models/card.model';

export type Issues = Record<CardModelKeys, CardModel[]>;

export interface ShapeCheckResult {
  isValid: boolean;
  issues: Issues;
}

export function isSameShape(list: CardModel[]): ShapeCheckResult {
  if (list.length === 0) {
    return { isValid: true, issues: {} as Issues };
  }

  const keys = Object.keys(list[0]) as CardModelKeys[];
  const issues: Issues = {} as Issues;

  for (const key of keys) {
    let hasValue = false;

    // Check if any object has a non-null/non-undefined value
    for (const obj of list) {
      if (obj[key] !== null && obj[key] !== undefined) {
        hasValue = true;
        break;
      }
    }

    // If any object has a value, ensure all objects have a value
    if (hasValue) {
      for (const obj of list) {
        if (obj[key] === null || obj[key] === undefined) {
          if (!issues[key]) {
            issues[key] = [];
          }
          issues[key].push(obj); // Store the actual object with the issue
        }
      }
    }
  }

  return {
    isValid: Object.keys(issues).length === 0,
    issues,
  };
}
