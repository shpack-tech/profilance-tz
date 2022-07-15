import { gql } from '@apollo/client';

export const GET_LINKS_LIST = gql`
	query ($page: Int!, $first: Int!) {
		short_urls(page: $page, first: $first) {
			paginatorInfo {
				count
				currentPage
				firstItem
				hasMorePages
				lastItem
				lastPage
				perPage
				total
			}
			data {
				id
				url
				short_url
				clicks
				created_at
				updated_at
			}
		}
	}
`;
