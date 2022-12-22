import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { APIFetchMegashops, APIUpdateMegashop } from '../../api/megashops';

import { RootState, AppThunk } from '../../app/store';
import { AllState } from '../../_types';

export interface MegashopsState {
    megashops: AllState.Megashop[];
    selectedMegashop: AllState.Megashop | null;
    selectedShopDirty: boolean;
    status: 'idle' | 'pending' | 'failed';
}

const initialState: MegashopsState = {
    megashops: [],
    selectedMegashop: null,
    selectedShopDirty: false,
    status: 'idle',
};

/*===============================
             Thunks
===============================*/

export const getMegashops = createAsyncThunk('megashops/getMegashops', async () => {
    const response = await APIFetchMegashops();
    return response;
});

export const updateMegashop = createAsyncThunk(
    'megashops/updateMegashop',
    async (dirtyMegashop: AllState.Megashop, { dispatch }) => {
        const response = await APIUpdateMegashop(dirtyMegashop);
        dispatch(getMegashops());
        return response;
    }
);

/*===============================
              Slice
===============================*/

export const MegashopsSlice = createSlice({
    name: 'megashops',
    initialState,
    reducers: {
        setSelectedMegashop: (state, action: PayloadAction<AllState.Megashop | null>) => {
            console.log('Running');
            state.selectedMegashop = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getMegashops.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(getMegashops.fulfilled, (state, action) => {
                state.status = 'idle';
                state.megashops = action.payload;
            })
            .addCase(getMegashops.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

/*===============================
            Actions
===============================*/

export const { setSelectedMegashop } = MegashopsSlice.actions;

/*===============================
           Selectors
===============================*/

export const selectMegashopState = (state: RootState) => state.megashops;

export default MegashopsSlice.reducer;
