export interface CardModel {
  cardNumber: string | null;
  player: string | null;
  club: string | null;
  type: string | null;
}

export type CardModelKeys = keyof CardModel;
