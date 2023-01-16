// @ts-ignore
import persistStore from "redux-persist/lib/persistStore";
// @ts-ignore
import { PersistGate } from "redux-persist/lib/integration/react";
import { store } from "app/store";

export const withPersist = (component: () => React.ReactNode) => () => {
  const persistor = persistStore(store);

  return (
    <PersistGate loading={null} persistor={persistor}>
      {component()}
    </PersistGate>
  );
};
