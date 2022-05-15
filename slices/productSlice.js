import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  properties: [],
};
// The Global store setup
export const propertySlice = createSlice({
  name: "property",
  initialState,
  reducers: {
    addPropertyToDb: (state, action) => {
      state.properties = [...state.properties, action.payload];
    },
    removePropertyFromDb: (state, action) => {
      const index = state.properties.findIndex(
        (basketItem) => basketItem.id === action.payload.id
      );
      let newBasket = [...state.properties];
      if (index >= 0) {
        // the item exists in the basket and remove it
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.payload.id}) as its not in `
        );
      }
      state.properties = newBasket;
    },
  },
});

export const { addPropertyToDb, removePropertyFromDb } = propertySlice.actions;
// selectors this is how to pull information from the global scope
export const selectedProperties = (state) => state.property.properties;
export const selectTotal = (state) =>
  state.property.properties.reduce((total, item) => total + item.price, 0);
export default propertySlice.reducer;
