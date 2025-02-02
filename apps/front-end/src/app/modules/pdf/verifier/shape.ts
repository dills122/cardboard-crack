import { CardModel, CardModelKeys } from '../models/card.model';

export type Issues = Record<CardModelKeys, CardModel[]>;

export interface ShapeCheckResult {
  isValid: boolean;
  validationStatus: 'valid' | 'partial' | 'error';
  issues: Issues;
}

/**
 * Detect any missing and/or mismatched data given a set of card objects
 * @param {CardModel[]} list of CardModels
 * @returns {ShapeCheckResult}
 */
export function isSameShape(list: CardModel[]): ShapeCheckResult {
  if (list.length === 0) {
    return { isValid: true, issues: {} as Issues, validationStatus: 'valid' };
  }

  const keys = Object.keys(list[0]) as CardModelKeys[];
  const issues = {} as Issues;
  let allNullOrUndefined = true;
  const nonNullTracker: Partial<Record<CardModelKeys, boolean>> = {};

  // Pass 1: Identify non-null properties and check if all rows are empty
  for (const obj of list) {
    let rowHasValue = false;
    for (const key of keys) {
      if (obj[key] !== null && obj[key] !== undefined) {
        nonNullTracker[key] = true;
        rowHasValue = true;
      }
    }
    if (rowHasValue) {
      allNullOrUndefined = false;
    }
  }

  if (allNullOrUndefined) {
    return { isValid: false, issues: {} as Issues, validationStatus: 'error' };
  }

  // Pass 2: Identify issues (only for keys that had at least one value)
  for (const obj of list) {
    for (const key of keys) {
      if (!nonNullTracker[key]) continue; // Skip columns that are fully null
      if (obj[key] === null || obj[key] === undefined) {
        (issues[key] ||= []).push(obj);
      }
    }
  }

  const isValid = Object.keys(issues).length === 0;
  return {
    isValid,
    issues,
    validationStatus: isValid ? 'valid' : 'partial',
  };
}
