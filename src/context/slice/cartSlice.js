import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  value: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, { payload }) => {
      let index = state.value.findIndex((el) => el.id === payload.id);
      if (index < 0) {
        state.value = [...state.value, { ...payload, amount: 1 }];
      }
    },
    remove: (state, { payload }) => {
      state.value = state.value.filter((el) => el.id !== payload.id);
    },
    increaseAmount: (state, { payload }) => {
      let index = state.value.findIndex((el) => el.id === payload.id);
      state.value = state.value.map((el, inx) => {
        if (index === inx) {
          return { ...el, amount: el.amount + 1 };
        } else {
          return el;
        }
      });
    },
    decreaseAmount: (state, { payload }) => {
      let index = state.value.findIndex((el) => el.id === payload.id);
      state.value = state.value.map((el, inx) =>
        index === inx
          ? { ...payload, amount: el.amount > 1 ? el.amount - 1 : el.amount }
          : el
      );
    },
    removeAll: () => {},
  },
});

export const { add, remove, increaseAmount, decreaseAmount } =
  cartSlice.actions;
export default cartSlice.reducer;
