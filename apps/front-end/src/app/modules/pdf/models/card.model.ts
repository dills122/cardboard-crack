import { cardType } from './card-type.model';

export interface CardModel {
  cardNumber: string | null;
  player: string | null;
  club: string | null;
  type: cardType | null;
}

export type CardModelKeys = keyof CardModel;
