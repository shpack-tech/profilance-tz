export interface ISingleLink {
	short_url: {
		clicks: number | null;
		created_at?: string;
		hash?: string;
		id?: string;
		short_url: string;
		updated_at?: string;
		url: string;
		__typename?: string;
	};
	isOdd: boolean;
	num: number;
}

export interface IAction {
	payload: [];
	type: string;
}

export interface IPagination {
	pagInfo: {
		count: number;
		currentPage: number;
		firstItem: number;
		hasMorePages: boolean;
		lastItem: number;
		lastPage: number;
		perPage: number;
		total: number;
		__typename?: string;
	};
}

export interface IPaginationElement extends IPagination {
	handleSwitch: (e: any) => void;
}

declare global {
	interface Window {
		io: any;
	}
}
