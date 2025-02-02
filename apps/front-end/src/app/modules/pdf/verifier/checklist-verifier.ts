import { ChecklistMap } from '../models/checklist.model';
import { isSameShape } from './shape';

export class ChecklistVerifier {
  static verify(checklist: ChecklistMap) {
    const errorChecklist: ChecklistMap = {};
    for (const [category, list] of Object.entries(checklist)) {
      const { isValid, issues, validationStatus } = isSameShape(list);
      if (isValid && validationStatus === 'valid') continue;
      errorChecklist[category] = [...new Set(Object.values(issues).flat())];
    }
    return errorChecklist;
  }
}
