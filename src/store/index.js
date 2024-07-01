// store/index.js

import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import jobReducer from "./reducers/jobReducer";
import jobSaga from "./saga/jobSaga";
function initStore() {
  const sagaMiddleware = createSagaMiddleware();

  const store = configureStore({
    reducer: {
      job: jobReducer, // Assuming jobReducer is the default export
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(sagaMiddleware),
  });

  store.sagaTask = sagaMiddleware.run(jobSaga);

  return store;
}

export default initStore();
