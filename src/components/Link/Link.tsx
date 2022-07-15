import React from 'react';
import { ISingleLink } from '../../Interfaces';

const Link: React.FC<ISingleLink> = ({ short_url, isOdd, num }) => {
	return (
		<div className={isOdd ? 'link box' : 'link'}>
			<div className="link__number">{num}</div>
			<a
				href={short_url.url}
				className="link__full"
				onClick={(e) => {
					e.preventDefault();
					window.open(short_url.url);
				}}
			>
				{short_url.url}
			</a>
			<a
				href={short_url.short_url}
				className="link__shorten"
				onClick={(e) => {
					e.preventDefault();
					window.open(short_url.short_url);
				}}
			>
				{short_url.short_url}
			</a>
			<div className="link__clicks">{short_url.clicks !== null ? short_url.clicks : '0'}</div>
		</div>
	);
};

export default Link;
