import { configureStore } from "@reduxjs/toolkit";
import { cardsReducer } from "entities/card/model/cards";
import { decksReducer } from "entities/decks/model/decks";
import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux";

export const store = configureStore({
  reducer: {
    cards: cardsReducer,
    decks: decksReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
