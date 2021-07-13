import React, { useEffect, useState } from 'react';
import { Button, Dropdown } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';


export const renderCategory = (category, localState, setLocalState) => {
	return (
		<Dropdown.Item
			style={{ cursor: 'pointer' }}
			active={category.id === localState.id}
			onClick={() => setLocalState(category)}
			key={category.id}
		>
			{category.name}
		</Dropdown.Item>
	)
}

const Categories = ({
	brand,
	type,
	isBrandLoading,
	isTypeLoading,
	setDeviceData,
	processor,
	videocard,
	isProcessorsLoading,
	isVideocardsLoading,
	setGlobalProcessor,
	setGlobalVideocard,
}) => {


	const [localType, setLocalType] = useState("");
	const [localBrand, setLocalBrand] = useState("");
	const [localProcessor, setLocalProcessor] = useState("");
	const [localVideocard, setLocalVideocard] = useState("");


	useEffect(() => {

		setDeviceData(localBrand.id, localType.id, localProcessor.id, localVideocard.id)
	}, [setDeviceData, localType.id, localBrand.id, localProcessor.id, localVideocard.id])

	const handleDefault = () => {
		setLocalBrand('')
		setLocalType('')
		setLocalProcessor('')
		setLocalVideocard('')
	}



	return (
		<div>
			<h4>Фильтр</h4>
			{<Dropdown className="mt-3 mb-3">
				<Dropdown.Toggle className="btn-info">{localType.name || "Выберите тип"}</Dropdown.Toggle>
				<Dropdown.Menu >
					{(isTypeLoading) && type.map(category =>
						renderCategory(category, localType, setLocalType)
					)}
				</Dropdown.Menu>
			</Dropdown>}
			{<Dropdown className="mt-3 mb-3">
				<Dropdown.Toggle className="btn-info">{localProcessor.name || "Выберите процессор"}</Dropdown.Toggle>
				<Dropdown.Menu>
					{(isProcessorsLoading) && processor.map(category =>
						<Dropdown.Item
							style={{ cursor: 'pointer' }}
							active={category.id === localProcessor.id}
							onClick={() => {
								setLocalProcessor(category);
								setGlobalProcessor(category)
							}}
							key={category.id}
						>
							{category.name}
						</Dropdown.Item>
					)}
				</Dropdown.Menu>
			</Dropdown>}
			{<Dropdown className="mt-3 mb-3">
				<Dropdown.Toggle className="btn-info">{localVideocard.name || "Выберите видеокарту"}</Dropdown.Toggle>
				<Dropdown.Menu>
					{(isVideocardsLoading) && videocard.map(category =>
						<Dropdown.Item
							style={{ cursor: 'pointer' }}
							active={category.id === localVideocard.id}
							onClick={() => {
								setLocalVideocard(category);
								setGlobalVideocard(category)
							}}
							key={category.id}
						>
							{category.name}
						</Dropdown.Item>
					)}
				</Dropdown.Menu>
			</Dropdown>}
			{<Dropdown className="mt-3 mb-3">
				<Dropdown.Toggle className="btn-info">{localBrand.name || "Выберите бренд"}</Dropdown.Toggle>
				<Dropdown.Menu>
					{(isBrandLoading) && brand.map(category =>
						renderCategory(category, localBrand, setLocalBrand)
					)}
				</Dropdown.Menu>
			</Dropdown>}
			<Button
				className="mt-3"
				variant={"outline-dark"}
				onClick={handleDefault}
			>
				Сбросить фильтр
			</Button>
		</div >
	);
}

{/* <div className="list-group">

	{(isBrandLoading) && brand.map(category =>
		renderCategory(category, localBrand, setLocalBrand)
	)}

</div > */}

export default Categories;