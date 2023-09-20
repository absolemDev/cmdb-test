import { createSlice } from "@reduxjs/toolkit";
import tags from "../mockData/tags.json";

const initialState = {
  entities: tags || [],
};

const tagsSlice = createSlice({
  name: "tags",
  initialState,
});

const { reducer: tagsReducer } = tagsSlice;

export const getTags = () => (state) => state.tags.entities;

export default tagsReducer;
