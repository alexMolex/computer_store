import React, { useEffect, useState } from 'react';
import { Pagination } from 'react-bootstrap';


const OtherPagination = ({
	isRequestDataLoading,
	count,
	setRequestData,
	userId
}) => {

	const [localPage, setLocalPage] = useState(1)

	useEffect(() => {
		(!userId) ?
			setRequestData(localPage) :
			setRequestData(userId, localPage)
	}, [localPage, userId, setRequestData])

	const limit = 2;
	const pageCount = Math.ceil(count / limit)
	const pages = []

	for (let i = 0; i < pageCount; i++) {
		pages.push(i + 1)
	}

	return (
		count > limit &&
		<div className='float-left'>
			<Pagination className='mt-2 float-left'>
				{(isRequestDataLoading) && pages.map(page =>
					<Pagination.Item
						className="pagination-lg"
						key={page}
						active={localPage === page}
						onClick={() => setLocalPage(page)}
					>
						{page}
					</Pagination.Item>
				)}
			</Pagination>

		</div >

	);
}

export default OtherPagination;