import React, { useEffect, useState } from 'react';
import { Pagination } from 'react-bootstrap';



const DevicePagination = ({
	is200Code,
	count,
<<<<<<< HEAD
	setGlobalPagination,
	globalPageNumber,

}) => {


=======
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

>>>>>>> 8452915f270c1f8ce6f21e84f93ee16b590c5510
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