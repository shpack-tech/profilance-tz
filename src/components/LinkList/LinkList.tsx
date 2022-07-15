import React, { useEffect, useState } from 'react';
import Link from '../Link/Link';
import Pagination from '../Pagination/Pagination';
import { ISingleLink } from '../../Interfaces';
import { IPagination } from '../../Interfaces';
import { useQuery } from '@apollo/client';
import { GET_LINKS_LIST } from '../../GraphQL/Queries';
import { setLinksThisPage } from '../../features/allLinks';
import { useDispatch } from 'react-redux';
import { RootState } from '../../app/store';
import { useSelector } from 'react-redux';

const LinkList: React.FC = () => {
	const [page, setPage] = useState<number>(1);

	const [paginationInfo, setPaginationInfo] = useState<IPagination>({
		pagInfo: {
			count: 0,
			currentPage: 0,
			firstItem: 0,
			hasMorePages: false,
			lastItem: 0,
			lastPage: 0,
			perPage: 0,
			total: 0,
			__typename: '',
		},
	});
	const dispatch = useDispatch();
	const allLinks = useSelector((state: RootState) => state.allLinks);
	const { loading, data, error } = useQuery(GET_LINKS_LIST, {
		variables: {
			page: page,
			first: 10, // Количество ссылок на одной странице
		},
	});

	const handleSwitch = (e: any): void => {
		if (
			paginationInfo.pagInfo.currentPage > 0 &&
			+e.target.closest('div').getAttribute('data-pagination') > 0 &&
			+e.target.closest('div').getAttribute('data-pagination') <= paginationInfo.pagInfo.lastPage
		) {
			setPage(+e.target.getAttribute('data-pagination'));
		}
	};

	useEffect(() => {
		if (data !== undefined) {
			dispatch(setLinksThisPage(data.short_urls.data));
			setPaginationInfo({ pagInfo: data.short_urls.paginatorInfo });
		}
		if (error) {
			console.error(error);
		}
	}, [data, loading]);

	return (
		<div>
			<h3 className="outer-title">Список ссылок</h3>
			{allLinks.map((el, i) => {
				return <Link short_url={el} key={i} isOdd={(i + 1) % 2 !== 0} num={i + 1} />;
			})}
			{paginationInfo.pagInfo.currentPage > 0 ? (
				<Pagination pagInfo={paginationInfo.pagInfo} handleSwitch={handleSwitch} />
			) : (
				<div className="preloader">
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			)}
		</div>
	);
};

export default LinkList;
