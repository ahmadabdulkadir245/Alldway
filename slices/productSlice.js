import { createSlice } from "@reduxjs/toolkit";
import { Properties } from "../data/properties";

const initialState = {
  properties: Properties,
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
        (property) => property.id === action.payload.id
      );
      let newProperties = [...state.properties];
      if (index >= 0) {
        // the item exists in the basket and remove it
        newProperties.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.payload.id}) as its not in `
        );
      }
      state.properties = newProperties;
    },
    updateProperty: (state, action) => {
      const index = state.properties.findIndex(
        (property) => property.id === action.payload.id
      );
      let newProperties = [...state.properties];
      newProperties[index] = action.payload.updatedProperty;
      state.properties = newProperties;
    },
  },
});

export const { addPropertyToDb, removePropertyFromDb, updateProperty } =
  propertySlice.actions;
// selectors this is how to pull information from the global scope
export const selectedProperties = (state) => state.property.properties;
export const selectTotal = (state) =>
  state.property.properties.reduce((total, item) => total + item.price, 0);
export default propertySlice.reducer;
