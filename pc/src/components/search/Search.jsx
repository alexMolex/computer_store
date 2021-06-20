import React, { useState, useEffect } from 'react';
import { FormControl, InputGroup, Button } from 'react-bootstrap';



const Search = ({ serchComputers }) => {

	const [search, setSearch] = useState('');

	useEffect(() => {
		serchComputers(search)
	}, [serchComputers, search])

	function hendleSubmit(event) {
		event.preventDefault()
		serchComputers(search)
	}

	return (
		<div >
			<InputGroup className="mt-2 mb-2">
				<FormControl
					placeholder="Поиск"
					aria-label="Amount (to the nearest dollar)"
					onChange={event => setSearch(event.target.value)}
				/>
				<InputGroup.Append>
					<Button variant="primary" onClick={hendleSubmit}>Найти</Button>
				</InputGroup.Append>
			</InputGroup>
		</div >

	);
}

export default Search;