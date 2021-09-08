import React, { useEffect, useState } from 'react';
import { Pagination } from 'react-bootstrap';



const DevicePagination = ({
	is200Code,
	count,
	setGlobalPagination,
	globalPageNumber,

}) => {


	const pageCount = Math.ceil(count / 2)
	const pages = []

	for (let i = 0; i < pageCount; i++) {
		pages.push(i + 1)
	}

	return (
		<div className='float-left'>
			<Pagination className='mt-2 float-left'>
				{(is200Code) && pages.map(page =>
					<Pagination.Item

						className="pagination-lg"
						key={page}
						active={globalPageNumber === page}
						onClick={() => setGlobalPagination(page)}
					>
						{page}
					</Pagination.Item>
				)}
			</Pagination>

		</div >

	);
}

export default DevicePagination;