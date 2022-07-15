import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAction, ISingleLink } from '../Interfaces';

export const myLinksSlice = createSlice({
	name: 'myLinks',
	initialState: [],
	reducers: {
		addLink: (state: any, action: PayloadAction<IAction>) => {
			state.push(action.payload);
		},
		updateLink: (state: any, action: PayloadAction<ISingleLink>) => {
			const id: string = action.payload.short_url.id + '';
			const replaceObj = action.payload.short_url;
			state.map((el: any, i: number) => {
				if (el.id + '' === id) {
					state[i] = replaceObj;
				}
			});
		},
	},
});

export const { addLink, updateLink } = myLinksSlice.actions;
export default myLinksSlice.reducer;
