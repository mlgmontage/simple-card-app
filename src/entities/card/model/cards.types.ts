export type CategoryT = "regular" | "favorite";

export type Card = {
  id: string;
  text: string;
  category: CategoryT;
  deck: string;
};

export type Cards = Card[];

export type CardsInitial = {
  list: Cards;
  filters: {
    byDeck?: string;
    byCategory?: CategoryT;
  };
};
