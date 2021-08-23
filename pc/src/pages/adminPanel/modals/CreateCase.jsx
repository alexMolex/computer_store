import React, { useState } from 'react';
import { Button, Modal, Form, Dropdown } from 'react-bootstrap';




const CreateCase = ({
	show,
	onHide,
	setCreateComputerCase,
	setComputerCaseData,
	setUpdateComputerCasePriceData,
	computerCaseData,
	isComputerCasesLoading,
}) => {


	const [name, setName] = useState("");
	const [price, setPrice] = useState("");
	const [file, setFile] = useState(null);
	const [selectedComputerCase, setSelectedComputerCase] = useState("")
	const [newComputerCasePrice, setNewComputerCasePrice] = useState(0)


	const addCase = () => {
		const formData = new FormData()
		formData.append('name', name)
		formData.append('price', price)
		formData.append('img', file)

		setCreateComputerCase(formData).then(data => {
			setComputerCaseData()
			onHide()
			setName("")
			setPrice("")
			setFile(null)
			alert('Корпус добавлен')
		})
	}

	const updateComputerCasePrice = () => {
		setUpdateComputerCasePriceData(selectedComputerCase.id, +(newComputerCasePrice));
		setComputerCaseData()
		alert(`Цена ${selectedComputerCase.name} изменена с ${selectedComputerCase.price} до ${newComputerCasePrice} руб.`)
		setSelectedComputerCase("")
		setNewComputerCasePrice("")
	}

	const onHideDefault = () => {
		onHide();
		setSelectedComputerCase("")
		setNewComputerCasePrice("")
	}

	const selectFile = e => {
		setFile(e.target.files[0]);
	}

	return (
		<Modal
			show={show}
			onHide={() => onHideDefault()}
			size="lg"
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					Добавить корпус
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Form.Control
						value={name}
						placeholder={'Введите название корпуса'}
						onChange={e => setName(e.target.value)}
					/>
					<Form.Control
						className="mt-2"
						placeholder="Введите цену устройтсва"
						type="number"
						value={price}
						onChange={e => setPrice(Number(e.target.value))}
					/>
					<h2>Выберите изображение корпуса</h2>
					<Form.Control
						className="mt-2"
						type="file"
						onChange={selectFile}
					/>
				</Form>
				<h4>Изменить цену корпуса</h4>
				{isComputerCasesLoading &&
					<>
						<Dropdown className="mt-2 mb-2">
							<Dropdown.Toggle>{selectedComputerCase.name || "Выберите корпус"}</Dropdown.Toggle>
							<Dropdown.Menu>
								{computerCaseData.map(videocard =>
									<Dropdown.Item
										key={videocard.id}
										onClick={() => {
											setSelectedComputerCase(videocard);
											setNewComputerCasePrice(videocard.price)
										}}
									>{videocard.name}</Dropdown.Item>
								)}
							</Dropdown.Menu>
						</Dropdown>
						<Form>
							<Form.Control
								type="number"
								value={newComputerCasePrice}
								placeholder={'Введите новую цену корпуса'}
								onChange={e => setNewComputerCasePrice(e.target.value)}
							/>
						</Form>
						<Button
							className="mt-2"
							variant="outline-success"
							onClick={updateComputerCasePrice}
						>
							Изменить цену
						</Button>
					</>
				}
			</Modal.Body>
			<Modal.Footer>
				<Button variant="outline-danger" onClick={() => onHideDefault()}>Закрыть</Button>
				<Button variant="outline-success" onClick={addCase}>Добавить</Button>
			</Modal.Footer>
		</Modal>
	);
}


export default CreateCase;