import React, { useEffect, useState } from 'react';
import { Pagination } from 'react-bootstrap';



const Pages = ({ is200Code, count, setDeviceData }) => {

	const [localPageState, setLocalPageState] = useState(1)

	useEffect(() => {
		setDeviceData(null, null, null, null, null, localPageState)

	}, [setDeviceData, localPageState])

	const pageCount = Math.ceil(count / 6)
	const pages = []

	for (let i = 0; i < pageCount; i++) {
		pages.push(i + 1)
	}

	return (
		<div >
			<Pagination className='mt-5'>
				{(is200Code) && pages.map(page =>
					<Pagination.Item

						className="pagination-lg"
						key={page}
						active={localPageState === page}
						onClick={() => setLocalPageState(page)}
					>
						{page}
					</Pagination.Item>
				)}
			</Pagination>

		</div >

	);
}

export default Pages;