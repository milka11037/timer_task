import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Timer {
    messages: string[];
    interval: number
}

const initialState: Timer = {
    messages: [],
    interval: 2,
}

export const timerSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        addMessage: (state, action: PayloadAction<string>) => {
            state.messages.push(action.payload);
        },

        changeInterval: (state, action: PayloadAction<number>) => {
            state.interval = action.payload;
        }
    }
})

export default timerSlice.reducer;