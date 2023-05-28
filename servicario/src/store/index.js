import {
  configureStore,
  applyMiddleware,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import serviceApp from "reducers/index.js";

import thunk from "redux-thunk";
import { logger } from "redux-logger";

const initStore = () => {
  const middleWares = [thunk];

  const store = configureStore(
    {
      reducer: serviceApp,
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }).concat(logger),
    },
    applyMiddleware(...middleWares)
  );

  // applyMiddlewares(store, middleWares);
  return store;
};

export default initStore;
