import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import myLinksReducer from '../features/myLinks';
import allLinksReducer from '../features/allLinks';
// import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
	reducer: {
		myLinks: myLinksReducer,
		allLinks: allLinksReducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
// export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
