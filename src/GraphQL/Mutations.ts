import { gql } from '@apollo/client';

export const SHORT_LINK_MUTATION = gql`
	mutation shorten_url($url: String!) {
		shorten_url(url: $url) {
			short_url {
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
