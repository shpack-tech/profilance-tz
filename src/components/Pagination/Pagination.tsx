import React from 'react';
import { IPaginationElement } from '../../Interfaces';
import './pagination.scss';
const Pagination: React.FC<IPaginationElement> = (params) => {
	const pagInfo = params.pagInfo;

	const dotsBackwards: boolean = pagInfo.currentPage > 3 ? true : false; // нужно ли рендерить точки, скрывающие страницы от текущей до 1
	const dotsForward: boolean = pagInfo.currentPage < pagInfo.lastPage - 2 ? true : false; // нужно ли рендерить точки, скрывающие страницы от текущей до последней
	const additionalBeforeBlock: boolean = pagInfo.currentPage > 2 ? true : false; // нужен ли дополнительный блок пагинации (назад)
	const additionalForwardBlock: boolean = pagInfo.currentPage < pagInfo.lastPage - 1 ? true : false; // нужен ли дополнительный блок пагинации (вперед)
	const dynamicPageNum: number = pagInfo.currentPage === 1 ? 2 : pagInfo.currentPage === pagInfo.lastPage ? pagInfo.lastPage - 1 : pagInfo.currentPage; // подменяем цифру пагинации, если это первая или последняя (рендерим их всегда)

	return (
		<div className="pagination" onClick={params.handleSwitch}>
			<div className="pagination__item button" data-pagination="1" style={pagInfo.currentPage === 1 ? { background: '#ede2e1' } : {}}>
				1
			</div>

			{dotsBackwards ? (
				<div className="pagination__dots">
					<span>...</span>
				</div>
			) : (
				''
			)}
			{additionalBeforeBlock ? (
				<div className="pagination__item button" data-pagination={dynamicPageNum - 1}>
					{dynamicPageNum - 1}
				</div>
			) : (
				''
			)}

			<div
				className="pagination__item button"
				style={pagInfo.currentPage === dynamicPageNum ? { background: '#ede2e1' } : {}}
				data-pagination={dynamicPageNum}
			>
				{dynamicPageNum}
			</div>
			{additionalForwardBlock ? (
				<div className="pagination__item button" data-pagination={dynamicPageNum + 1}>
					{dynamicPageNum + 1}
				</div>
			) : (
				''
			)}
			{dotsForward ? (
				<div className="pagination__dots">
					<span>...</span>
				</div>
			) : (
				''
			)}

			<div
				className="pagination__item button"
				style={pagInfo.currentPage === pagInfo.lastPage ? { background: '#ede2e1' } : {}}
				data-pagination={pagInfo.lastPage}
			>
				{pagInfo.lastPage}
			</div>
		</div>
	);
};

export default Pagination;
