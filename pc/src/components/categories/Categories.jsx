import React, { useEffect, useState } from 'react';
import { Button, Dropdown } from 'react-bootstrap';



export const renderCategory = (category, localState, setLocalState, setLocalPrice) => {
	return (
		<Dropdown.Item
			style={{ cursor: 'pointer' }}
			active={category.id === localState.id}
			onClick={() => {
				setLocalState(category);
				(setLocalPrice) && setLocalPrice(category.price)
			}}
			key={category.id}
		>
			{`${category.name} ${(category.price) ? `/ ${category.price} Руб` : ""} `}
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
	globalProcessor,
	globalVideocard,
	removeGlobalVideocard,
	removeGlobalProcessor,
	setGlobalType,
	removeGlobalType,
	setGlobalBrand,
	globalPageNumber,
	removeGlobalBrand,
	setGlobalSortingTypes,
	removeGlobalSortingTypes,
	setGlobalSortingTable,
	removeGlobalSortingTable,
	removeGlobalPagination,
	globalSortingType,
	globalSortingTable,
	globalType,
	globalBrand,
	removeDeviceIsLoading,
}) => {


	const [isDisabled, setIsDisabled] = useState(false)

	useEffect(() => {
		setIsDisabled(true)
		removeDeviceIsLoading()
		setDeviceData(
			null,
			globalPageNumber,
			globalBrand.id,
			globalType.id,
			globalProcessor.id,
			globalVideocard.id,
			globalSortingType.keyword,
			globalSortingTable.value
		).then(() => setIsDisabled(false))
	}, [
		removeDeviceIsLoading,
		globalPageNumber,
		setDeviceData,
		globalType.id,
		globalBrand.id,
		globalProcessor.id,
		globalVideocard.id,
		globalSortingType,
		globalSortingTable
	])

	const handleDefault = () => {
		removeGlobalVideocard()
		removeGlobalProcessor()
		removeGlobalType()
		removeGlobalBrand()
		removeGlobalSortingTypes()
		removeGlobalSortingTable()
		removeGlobalPagination()
	}


	const sortingTypeArray = [
		{ type: "от меньшего к большему", keyword: "ASC" },
		{ type: "от большего к меньшему", keyword: "DESC" },
	]

	const sortingTableArray = [
		{ type: "по цене", value: "totalPrice" },
		{ type: "по дате добавления", value: "createdAt" },
		{ type: "по названию", value: "name" },
	]


	return (
		<div >
			<h4>Фильтр</h4>

			{<Dropdown className="mb-2">
				<Dropdown.Toggle
					style={{ "width": "100%" }}
					disabled={isDisabled}
					className="btn-info"
				>
					{globalType.name || "Выберите тип"}
				</Dropdown.Toggle>
				<Dropdown.Menu style={{ "width": "100%" }}>
					{(isTypeLoading) && type.map(category =>
						renderCategory(category, globalType, setGlobalType, removeGlobalPagination)
					)}
				</Dropdown.Menu>
			</Dropdown>}

			{<Dropdown className="mb-2">
				<Dropdown.Toggle style={{ "width": "100%" }} disabled={isDisabled} className="btn-info">{globalProcessor.name || "Выберите процессор"}</Dropdown.Toggle>
				<Dropdown.Menu style={{ "width": "100%" }}>
					{(isProcessorsLoading) && processor.map(category =>
						renderCategory(category, globalProcessor, setGlobalProcessor, removeGlobalPagination)
					)}
				</Dropdown.Menu>
			</Dropdown>}

			{<Dropdown className="mb-2">
				<Dropdown.Toggle style={{ "width": "100%" }} disabled={isDisabled} className="btn-info">{globalVideocard.name || "Выберите видеокарту"}</Dropdown.Toggle>
				<Dropdown.Menu style={{ "width": "100%" }}>
					{(isVideocardsLoading) && videocard.map(category =>
						// (category.price !== 0) &&
						renderCategory(category, globalVideocard, setGlobalVideocard, removeGlobalPagination)
					)}
				</Dropdown.Menu>

			</Dropdown>}

			{<Dropdown className="mb-2">
				<Dropdown.Toggle style={{ "width": "100%" }} disabled={isDisabled} className="btn-info">{globalBrand.name || "Выберите бренд"}</Dropdown.Toggle>
				<Dropdown.Menu style={{ "width": "100%" }}>
					{(isBrandLoading) && brand.map(category =>
						renderCategory(category, globalBrand, setGlobalBrand, removeGlobalPagination)
					)}
				</Dropdown.Menu>
			</Dropdown>}


			<h5>Сортировка</h5>
			<Dropdown className="mt-3 mb-3">
				<Dropdown.Toggle style={{ "width": "100%" }} disabled={isDisabled} className="btn-info">{globalSortingTable.type || "Сортировка"}</Dropdown.Toggle>
				<Dropdown.Menu style={{ "width": "100%" }}>
					{sortingTableArray.map(sortTable =>
						<Dropdown.Item
							style={{ cursor: 'pointer' }}
							active={sortTable.value === globalSortingTable.value}
							onClick={() => setGlobalSortingTable(sortTable)}
							key={sortTable.value}
						>
							{sortTable.type}
						</Dropdown.Item>
					)}
				</Dropdown.Menu>
			</Dropdown>

			<Dropdown className="mt-3 mb-3">
				<Dropdown.Toggle style={{ "width": "100%" }} disabled={isDisabled} className="btn-info">{globalSortingType.type || "Сортировка"}</Dropdown.Toggle>
				<Dropdown.Menu style={{ "width": "100%" }}>
					{sortingTypeArray.map(sortType =>
						<Dropdown.Item
							style={{ cursor: 'pointer' }}
							active={sortType.keyword === globalSortingType.keyword}
							onClick={() => setGlobalSortingTypes(sortType)}
							key={sortType.keyword}
						>
							{sortType.type}
						</Dropdown.Item>
					)}
				</Dropdown.Menu>
			</Dropdown>


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


export default Categories;