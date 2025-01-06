import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  stage: 5,
};

const stageSlice = createSlice({
  name: "stage",
  initialState,
  reducers: {
    nextStage: (state) => {
      state.stage += 1;
    },
    prevStage: (state) => {
      state.stage -= 1;
    },
  },
});

export const { nextStage, prevStage } = stageSlice.actions;
export default stageSlice.reducer;
