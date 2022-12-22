import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import megashopsReducer from 'features/megashops/megashopsSlice';

export const store = configureStore({
    reducer: {
        megashops: megashopsReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
