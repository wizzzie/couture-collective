import { createSlice } from "@reduxjs/toolkit";

const stage =
  localStorage.getItem("apply_stage") !== null
    ? JSON.parse(localStorage.getItem("apply_stage"))
    : 1;

const initialState = {
  stage,
};

const stageSlice = createSlice({
  name: "stage",
  initialState,
  reducers: {
    nextStage: (state) => {
      state.stage += 1;
      localStorage.setItem("apply_stage", JSON.stringify(state.stage));
    },
    prevStage: (state) => {
      state.stage -= 1;
      localStorage.setItem("apply_stage", JSON.stringify(state.stage));
    },
  },
});

export const { nextStage, prevStage } = stageSlice.actions;
export default stageSlice.reducer;
