import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
// @ts-ignore
import storage from "redux-persist/lib/storage";
import { cardsReducer } from "entities/card/model/cards";
import { decksReducer } from "entities/decks/model/decks";
import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux";
import { persistReducer } from "redux-persist";

const rootReducer = combineReducers({
  cards: cardsReducer,
  decks: decksReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({ serializableCheck: false }),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
