import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { useSelector } from "react-redux";
import { CardsInitial } from "./cards.types";

const initialState: CardsInitial = {
  list: [
    {
      id: "1",
      category: "favorite",
      deck: "draft",
      text: "Die Fahrt dauert 40 Minuten",
    },
    {
      id: "2",
      category: "regular",
      deck: "draft",
      text: "Wie viel kostet ein Ausflug zu den Pyramiden?",
    },
    {
      id: "3",
      category: "favorite",
      deck: "draft",
      text: "Ich brauche ein Einzelzimmer mit Dusche.",
    },
  ],
  filters: {},
};

const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    toggle: (state, { payload }: PayloadAction<string>) => {
      console.warn("he");

      const id = state.list.findIndex((card) => card.id === payload);
      if (id) {
        state.list[id].category =
          state.list[id].category === "favorite" ? "regular" : "favorite";
      }
    },
  },
});

export const { toggle } = cardsSlice.actions;

export const cardsSelector = (state: RootState) => state.cards.list;

export const useCard = (cardId: string) =>
  useSelector(
    createSelector(cardsSelector, (cards) =>
      cards.find((card) => card.id === cardId)
    )
  );

export const favoritesSelector = createSelector(cardsSelector, (cards) =>
  cards.filter((card) => card.category === "favorite")
);

export const regularsSelector = createSelector(cardsSelector, (cards) =>
  cards.filter((card) => card.category === "regular")
);

export const cardsReducer = cardsSlice.reducer;
