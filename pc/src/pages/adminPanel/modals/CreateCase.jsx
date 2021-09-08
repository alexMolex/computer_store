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
	const [length, setLength] = useState("")
	const [heighth, setHeighth] = useState("")
	const [width, setWidth] = useState("")
	const [caseMaterials, setCaseMaterials] = useState("")
	const [usb, setUsb] = useState("")
	const [rgb, setRgb] = useState(false)


	const addCase = () => {
		const formData = new FormData()
		formData.append('name', name)
		formData.append('price', price)
		formData.append('img', file)
		formData.append('lengthHeightWidth', `${length} Х ${heighth} Х ${width}`)
		formData.append('caseMaterials', caseMaterials)
		formData.append('USB', usb)
		formData.append('RGB', rgb)

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
					<h4>Длина, см</h4>
					<Form.Control
						className="mt-2"
						placeholder="Укажите длину"
						type="number"
						value={length}
						onChange={e => setLength(e.target.value)}
					/>
					<h4>Высота, см</h4>
					<Form.Control
						className="mt-2"
						placeholder="Укажите высоту"
						type="number"
						value={heighth}
						onChange={e => setHeighth(e.target.value)}
					/>
					<h4>Ширина, см</h4>
					<Form.Control
						className="mt-2"
						placeholder="Укажите высоту"
						type="number"
						value={width}
						onChange={e => setWidth(e.target.value)}
					/>
					<h4>Материалы корпуса</h4>
					<Form.Control
						className="mt-2"
						placeholder="Материалы корпуса"
						value={caseMaterials}
						onChange={e => setCaseMaterials(e.target.value)}
					/>
					<h4>usb разъемы:</h4>
					<Form.Control
						className="mt-2"
						placeholder="Укажите высоту"
						value={usb}
						onChange={e => setUsb(e.target.value)}
					/>
					<div className="custom-control custom-switch mb-2">
						<input
							type="checkbox"
							className="custom-control-input"
							id="customSwitch7"
							checked={rgb}
							onChange={(e) => setRgb(!rgb)}
						/>
						<label
							className="custom-control-label"
							htmlFor="customSwitch7"
						>
							RGB
						</label>
					</div>
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