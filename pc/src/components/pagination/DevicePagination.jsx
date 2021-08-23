import React, { useEffect, useState } from 'react';
import { Pagination } from 'react-bootstrap';



const DevicePagination = ({
	is200Code,
	count,
	setDeviceData,
	setGlobalPagination,
	removeGlobalPagination,
	globalPageNumber,
	globalProcessor,
	globalVideocard,
	globalSortingType,
	globalSortingTable,
	globalType,
	globalBrand,
}) => {


	useEffect(() => {
		setDeviceData(
			null,
			globalPageNumber,
			globalBrand.id,
			globalType.id,
			globalProcessor.id,
			globalVideocard.id,
			globalSortingType.keyword,
			globalSortingTable.value
		)
	}, [
		globalPageNumber,
		setDeviceData,
		globalProcessor,
		globalVideocard,
		globalSortingType,
		globalSortingTable,
		globalType,
		globalBrand,
	])

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