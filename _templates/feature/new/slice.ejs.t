---
to: src/features/<%= name %>/<%= name %>Slice.ts
---
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState, AppThunk } from '../../app/store';

export interface <%= Name %>State {
    key: string;
    status: string;
}

const initialState: <%= Name %>State = {
    key: 'replaceMe',
    status: 'idle'
}

/*===============================
             Thunks
===============================*/

export const renameMeAsync = createAsyncThunk('<%= name %>/renameMe', async (value: string) => {
    const response = await someAsyncTask(value);
    return response.data;
});

/*===============================
              Slice
===============================*/

export const <%= name %>Slice = createSlice({
    name: '<%= name %>',
    initialState,
    reducers: {
        updateState: (state, action: PayloadAction<string>) => {
            state.key = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(renameMeAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(renameMeAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.value += action.payload;
            })
            .addCase(renameMeAsync.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

/*===============================
            Actions
===============================*/

export const { updateState } = <%= name %>Slice.actions;

/*===============================
           Selectors
===============================*/

export const selectKey = (state: RootState) => state.<%= name %>.value;

export default <%= name %>Slice.reducer;