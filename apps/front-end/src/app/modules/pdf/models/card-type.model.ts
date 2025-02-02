export const cardTypes = ['veteran', 'rookie', 'retired', 'debutant'] as const;

export type cardType = (typeof cardTypes)[number];

export const isCardType = (value: string): value is cardType => {
  return (cardTypes as readonly string[]).includes(value);
};
