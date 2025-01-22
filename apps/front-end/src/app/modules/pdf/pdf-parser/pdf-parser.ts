/* eslint-disable import/no-named-as-default */
import FuzzyClubMatcher from '../club-matcher/fuzzy-match-club';
import { PDFDocumentProxy } from 'pdfjs-dist';

export interface CardObject {
  cardNumber: string | null;
  player: string | null;
  club: string | null;
  type: cardType | null;
}

export interface ChecklistMap {
  [key: string]: CardObject[];
}

export const cardTypes = ['veteran', 'rookie', 'retired', 'debutant'] as const;

export type cardType = (typeof cardTypes)[number];

export const isCardType = (value: string): value is cardType => {
  return (cardTypes as readonly string[]).includes(value);
};

export default class ChecklistParser {
  private fuzzyClubMatcher: FuzzyClubMatcher;
  private currentCategory: string | null | undefined;
  private card: CardObject = {
    cardNumber: null,
    player: null,
    club: null,
    type: null,
  };
  private textMap: ChecklistMap = {};

  constructor() {
    this.fuzzyClubMatcher = new FuzzyClubMatcher();
  }

  async parse(
    pdfData: PDFDocumentProxy,
    isInternationalTeamProduct?: boolean
  ): Promise<ChecklistMap> {
    return this.parseData(pdfData, isInternationalTeamProduct);
  }

  private async parseData(
    pdfData: PDFDocumentProxy,
    isInternationalTeamProduct?: boolean
  ): Promise<ChecklistMap> {
    this.textMap = {};
    this.currentCategory = null;
    this.resetCardObj();

    for (let i = 1; i <= pdfData.numPages; i++) {
      const page = await pdfData.getPage(i);
      const textContent = await page.getTextContent();

      textContent.items.map((item: any) => {
        this.matchStringToCardProperty(item.str, isInternationalTeamProduct);
        return item.str;
      });
    }
    this.checkIfReadyToPushCard();

    return this.textMap;
  }

  private matchStringToCardProperty(
    rawText: string,
    isInternationalTeamProduct?: boolean
  ) {
    const text = decodeURIComponent(rawText);
    do {
      if (this.verifyIfPlayerTypeIsPresent(text)) {
        this.checkIfReadyToPushCard();
        this.card.type = text as cardType;
        continue;
      }

      if (this.verifyIfHeaderTextIsPresent(text)) {
        this.checkIfReadyToPushCard();
        this.currentCategory = text;
        this.textMap[text] = [];
        continue;
      }

      if (this.verifyIfCardNumberIsPresent(text)) {
        this.checkIfReadyToPushCard();
        this.card.cardNumber = text;
        continue;
      }

      // International/National Team checklists seem to not have a club/nation name so skip this
      if (!isInternationalTeamProduct) {
        const clubName = this.fuzzyClubMatcher.getClubNameFromFuzzySearch(text);
        if (clubName != null) {
          this.card.club = clubName;
          continue;
        }
      }

      if (!this.checkIfFirstLetterOfStringIsCaptial(text)) continue;

      if (this.card.player && this.card.player.length > 0) {
        this.card.player += ` ${text}`;
      } else {
        this.card.player = text;
      }
      // eslint-disable-next-line no-constant-condition
    } while (false);
  }

  private checkIfReadyToPushCard() {
    if (
      this.checkIfCardHasAtleastCardNumAndSomeOthers(this.card) ||
      this.checkIfCardHasNoCardNumberButAllOthersAreSet(this.card)
    ) {
      this.pushCardObjToMap();
    }
  }

  private pushCardObjToMap() {
    if (!this.currentCategory) return;
    this.textMap[this.currentCategory].push(this.card);
    this.resetCardObj();
  }

  private resetCardObj() {
    this.card = {
      cardNumber: null,
      player: null,
      club: null,
      type: null,
    };
  }

  private checkIfCardHasAtleastCardNumAndSomeOthers(card: CardObject): boolean {
    if (!card) {
      return false;
    }
    const { cardNumber, player, club, type } = card;
    return !!cardNumber && [player, club, type].some((item) => item != null);
  }

  private checkIfCardHasNoCardNumberButAllOthersAreSet(
    card: CardObject
  ): boolean {
    if (!card) {
      return false;
    }
    const { cardNumber, player, club, type } = card;
    return (
      cardNumber == null && [player, club, type].every((item) => item != null)
    );
  }

  private isAllCaps(text: string): boolean {
    return text === text.toUpperCase() && /[A-Z]/.test(text);
  }

  private verifyIfHeaderTextIsPresent(text: string): boolean {
    const isStringInHeaderFormat = /^[A-Za-z\s]+$/.test(text);
    return (
      text.length > 1 &&
      isStringInHeaderFormat &&
      this.isAllCaps(text) &&
      !this.verifyIfCardNumberIsPresent(text)
    );
  }

  private verifyIfCardNumberIsPresent(text: string): boolean {
    return /^(?:\d+|[A-Z]+-[A-Z\d]+)$/.test(text);
  }

  private verifyIfPlayerTypeIsPresent(text: string): boolean {
    return isCardType(text.toLowerCase());
  }

  private checkIfFirstLetterOfStringIsCaptial(text: string): boolean {
    return /^[A-Z]/.test(text);
  }
}
