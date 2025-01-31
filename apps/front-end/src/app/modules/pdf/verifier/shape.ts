import { CardModel, CardModelKeys } from '../models/card.model';

export type Issues = Record<CardModelKeys, CardModel[]>;

export interface ShapeCheckResult {
  isValid: boolean;
  validationStatus: 'valid' | 'partial' | 'error';
  issues: Issues;
}

export function isSameShape(list: CardModel[]): ShapeCheckResult {
  if (list.length === 0) {
    return { isValid: true, validationStatus: 'valid', issues: {} as Issues };
  }

  const keys = Object.keys(list[0]) as CardModelKeys[];
  const issues: Issues = {} as Issues;
  let hasAnyValidData = false;

  // Track properties that are entirely null/undefined
  const fullyNullKeys = new Set<CardModelKeys>(keys);

  for (const obj of list) {
    let objHasData = false;

    for (const key of keys) {
      const value = obj[key];

      if (value !== null && value !== undefined) {
        objHasData = true;
        hasAnyValidData = true;
        fullyNullKeys.delete(key); // If we find a non-null value, it's not fully null
      }
    }

    if (!objHasData) {
      // If any object is completely empty, mark it as an error
      return {
        isValid: false,
        validationStatus: 'error',
        issues: {} as Issues,
      };
    }
  }

  // Second pass to collect issues (ignoring fully null/undefined keys)
  for (const obj of list) {
    for (const key of keys) {
      if (
        !fullyNullKeys.has(key) &&
        (obj[key] === null || obj[key] === undefined)
      ) {
        (issues[key] ||= []).push(obj);
      }
    }
  }

  const isValid = Object.keys(issues).length === 0;
  return {
    isValid,
    validationStatus: isValid ? 'valid' : 'partial',
    issues,
  };
}
