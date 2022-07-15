import React from 'react';
import Link from '../Link/Link';
import { RootState } from '../../app/store';
import { useSelector } from 'react-redux';

const MyLinks: React.FC = () => {
	const myLinks = useSelector((state: RootState) => state.myLinks);

	return (
		<div>
			<h3 className="outer-title">Мои ссылки</h3>
			<div className="hidden-scroll-container">
				{myLinks.map((el, i) => {
					return <Link short_url={el} key={i} isOdd={(i + 1) % 2 !== 0} num={i + 1} />;
				})}
			</div>
		</div>
	);
};

export default MyLinks;
