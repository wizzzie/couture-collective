import { configureStore } from "@reduxjs/toolkit";
import stageSlice from "./reducers/stage";

const store = configureStore({
  reducer: {
    stage: stageSlice,
  },
});

export default store;
