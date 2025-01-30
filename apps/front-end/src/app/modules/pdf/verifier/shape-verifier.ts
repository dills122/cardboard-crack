// import { CardModel, CardModelKeys } from '../models/card.model';

// type GenericObject = Record<string, any>;

// export interface VerificationResults {
//   hasIssues: boolean;
//   propertiesWithIssues: CardModelKeys[];
//   itemsWithIssues: CardModel[];
// }

// export default class ShapeVerifier {
//   verify(cardList: CardModel[]): VerificationResults {
//     const result = {
//       hasIssues: false,
//       propertiesWithIssues: [],
//       itemsWithIssues: [],
//     };
//     if (cardList.length <= 0) return result;

//     for (let card of cardList) {
//         const keys = Object.keys(card);
//     }
//   }

//   private getShape<T extends GenericObject>(list: T[]): Set<string> {
//     const shape = new Set<string>();
//     for (const obj of list) {
//       Object.keys(obj).forEach((key) => shape.add(key));
//     }
//     return shape;
//   }
// }
