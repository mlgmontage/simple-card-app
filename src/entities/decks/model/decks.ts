import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { Decks, Deck } from "./decks.types";

const initialState: Decks = [
  {
    name: "draft",
  },
  {
    name: "language",
  },
];

const decksSlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    create: (state, { payload }: PayloadAction<Deck>) => {
      state.push(payload);
    },
  },
});

export const decksSelector = (state: RootState) => state.decks;

export const decksReducer = decksSlice.reducer;
export const { create } = decksSlice.actions;
