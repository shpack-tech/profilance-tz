import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAction, ISingleLink } from '../Interfaces';

export const allLinksSlice = createSlice({
	name: 'allLinks',
	initialState: [],
	reducers: {
		setLinksThisPage: (state: any, action: IAction) => {
			state.length = 0;
			state.push(...action.payload);
		},
		updateAllLinks: (state: any, action: PayloadAction<ISingleLink>) => {
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

export const { setLinksThisPage, updateAllLinks } = allLinksSlice.actions;
export default allLinksSlice.reducer;
