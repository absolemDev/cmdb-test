import { createSlice } from "@reduxjs/toolkit";
import types from "../mockData/types.json";

const initialState = {
  entities: types || [],
};

const typesSlice = createSlice({
  name: "types",
  initialState,
});

const { reducer: typesReducer } = typesSlice;

export const getTypes = () => (state) => state.types.entities;

export default typesReducer;
