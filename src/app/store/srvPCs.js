import { createSlice } from "@reduxjs/toolkit";
import srvPCs from "../mockData/srvPCs.json";

const initialState = {
  entities: srvPCs || [],
};

const srvPCsSlice = createSlice({
  name: "srvPCs",
  initialState,
});

const { reducer: srvPCsReducer } = srvPCsSlice;

export const getSrvPCs = () => (state) => state.srvPCs.entities;

export default srvPCsReducer;
