import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { Room, SearchFormValues } from "@/lib/types";

interface RoomsSelectorState {
  rooms: Array<Room>;
  isLoading: boolean;
  error: null | string;
}

const initialState: RoomsSelectorState = {
  rooms: [],
  isLoading: false,
  error: null,
};

const base = process.env.NEXT_PUBLIC_API_URL;
const url = `${base}/api`;

export const getRooms = createAsyncThunk(
  "roomsSelector/fetchRooms",
  async (payload: SearchFormValues) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Server error");
      }

      const data = await response.json();
      return data;
    } catch (error: any) {
      return error.message;
    }
  }
);

export const roomsSelectorSlice = createSlice({
  name: "roomsSelector",
  initialState,
  reducers: {
    setRooms: (state, action: PayloadAction<Array<Room>>) => {
      state.rooms = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getRooms.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getRooms.fulfilled, (state, action) => {
      state.isLoading = false;
      state.rooms = action.payload;
    });
    builder.addCase(getRooms.rejected, (state, action) => {
      state.isLoading = false;
      // state.error = action.error.message;
    });
  },
});

export const { setRooms, setIsLoading } = roomsSelectorSlice.actions;

export const selectedRooms = (state: RootState) => state.roomsSelector.rooms;

export const selectedIsLoading = (state: RootState) =>
  state.roomsSelector.isLoading;

export default roomsSelectorSlice.reducer;
