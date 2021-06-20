import React, { useState } from 'react';
import { Button, Modal, Form, Dropdown, Col, Row } from 'react-bootstrap';




const CreateDevice = ({ show,
	onHide,
	brandState,
	typeState,
	processorState,
	videocardState,
	isBrandLoading,
	isTypeLoading,
	isVideocardsLoading,
	isProcessorsLoading,
	setCreateDevice,
}) => {


	const [name, setName] = useState("");
	const [price, setPrice] = useState("");
	const [file, setFile] = useState(null);
	const [brand, setBrand] = useState("");
	const [type, setType] = useState("");
	const [processor, setProcessor] = useState("");
	const [videocard, setVideocard] = useState("");
	// массив характеристик
	const [info, setInfo] = useState([])

	const addInfo = () => {
		setInfo([...info, { title: '', description: '', number: Date.now() }])
	}

	const removeInfo = (number) => {
		setInfo(info.filter(i => i.number !== number))
	}

	const selectFile = e => {
		setFile(e.target.files[0]);
	}

	const changeInfo = (key, value, number) => {
		setInfo(info.map(i => i.number === number ? { ...i, [key]: value } : i))
	}

	const addDevice = () => {
		const formData = new FormData()
		formData.append('name', name)
		formData.append('price', `${price}`)
		formData.append('img', file)
		formData.append('brandId', brand.id)
		formData.append('typeId', type.id)
		formData.append('processorId', processor.id)
		formData.append('videocardId', videocard.id)
		formData.append('info', JSON.stringify(info))
		setCreateDevice(formData).then(data => {
			onHide()
			setName("")
			setPrice("")
			setFile(null)
			setBrand("")
			setType("")
			setInfo([])
			alert('Комп добавлен')
		})
	}


	return (
		<Modal
			show={show}
			onHide={onHide}
			size="lg"
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					Добавить устройство
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					{(isTypeLoading) &&
						<Dropdown className="mt-2 mb-2">
							<Dropdown.Toggle>{type.name || " Выберите тип"}</Dropdown.Toggle>
							<Dropdown.Menu>
								{typeState.map(type =>
									<Dropdown.Item
										key={type.id}
										onClick={() => setType(type)}
									>{type.name}</Dropdown.Item>
								)}
							</Dropdown.Menu>
						</Dropdown>
					}
					{(isBrandLoading) &&
						<Dropdown className="mt-2 mb-2">
							<Dropdown.Toggle>{brand.name || "Выберите бренд"}</Dropdown.Toggle>
							<Dropdown.Menu>
								{brandState.map(brand =>
									<Dropdown.Item
										key={brand.id}
										onClick={() => setBrand(brand)}
									>{brand.name}</Dropdown.Item>
								)}
							</Dropdown.Menu>
						</Dropdown>
					}
					{(isProcessorsLoading) &&
						<Dropdown className="mt-2 mb-2">
							<Dropdown.Toggle>{processor.name || "Выберите процессор"}</Dropdown.Toggle>
							<Dropdown.Menu>
								{processorState.map(processor =>
									<Dropdown.Item
										key={processor.id}
										onClick={() => setProcessor(processor)}
									>{processor.name}</Dropdown.Item>
								)}
							</Dropdown.Menu>
						</Dropdown>}
					{(isVideocardsLoading) &&
						<Dropdown className="mt-2 mb-2">
							<Dropdown.Toggle>{videocard.name || "Выберите видеокарту"}</Dropdown.Toggle>
							<Dropdown.Menu>
								{videocardState.map(videocard =>
									<Dropdown.Item
										key={videocard.id}
										onClick={() => setVideocard(videocard)}
									>{videocard.name}</Dropdown.Item>
								)}
							</Dropdown.Menu>
						</Dropdown>}
					<Form.Control
						className="mt-2"
						placeholder="Введите название устройтсва"
						value={name}
						onChange={e => setName(e.target.value)}
					/>
					<Form.Control
						className="mt-2"
						placeholder="Введите цену устройтсва"
						type="number"
						value={price}
						onChange={e => setPrice(Number(e.target.value))}
					/>
					<Form.Control
						className="mt-2"
						type="file"
						onChange={selectFile}
					/>
					<hr />
					<Button
						variant={"outline-dark"}
						onClick={addInfo}
					>
						Добавить конфигурацию
					</Button>
					{info.map(i =>
						<Row className="mt-2 pt-2" key={i.number}>
							<Col md={4}>
								<Form.Control
									value={i.title}
									onChange={(e) => changeInfo('title', e.target.value, i.number)}
									placeholder="Введите название свойства"
								/>
							</Col>
							<Col md={4}>
								<Form.Control
									value={i.description}
									onChange={(e) => changeInfo('description', e.target.value, i.number)}
									placeholder="Введите описание свойства"
								/>
							</Col>
							<Col md={4}>
								<Button
									variant={"outline-danger"}
									onClick={() => removeInfo(i.number)}
								>
									Удалить
								</Button>
							</Col>
						</Row>
					)}
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
				<Button variant="outline-success" onClick={addDevice}>Добавить</Button>
			</Modal.Footer>
		</Modal>
	);
}


export default CreateDevice;