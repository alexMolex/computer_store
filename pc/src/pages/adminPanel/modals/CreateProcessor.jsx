import React, { useState } from 'react';
import { Button, Modal, Form, Dropdown } from 'react-bootstrap';




const CreateProcessor = ({
	show,
	onHide,
	setCreateDeviceProcessor,
	setDeviceProcessorData,
	setUpdateProcessorPriceData,
	processorState,
	isProcessorsLoading
}) => {


	const [name, setName] = useState("");
	const [price, setPrice] = useState("");
	const [brand, setBrand] = useState("");
	const [selectedProcessor, setSelectedProcessor] = useState("")
	const [newProcessorPrice, setNewProcessorPrice] = useState(0)

	const addProcessor = () => {
		const formData = new FormData()
		formData.append('name', name)
		formData.append('price', price)
		formData.append('brand', brand)

		setCreateDeviceProcessor(formData).then(() => {
			setDeviceProcessorData()
			onHide()
			setName("")
			setPrice("")
			setBrand("")
			alert('Процессор добавлен')
		})
	}

	const updateProcessorPrice = () => {
		setUpdateProcessorPriceData(selectedProcessor.id, +(newProcessorPrice));
		setDeviceProcessorData()
		alert(`Цена ${selectedProcessor.name} изменена с ${selectedProcessor.price} до ${newProcessorPrice} руб.`)
		setSelectedProcessor("")
		setNewProcessorPrice("")
	}

	const onHideDefault = () => {
		onHide();
		setSelectedProcessor("")
		setNewProcessorPrice("")
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
					Добавить процессор
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Form.Control
						value={name}
						placeholder={'Введите название процессора'}
						onChange={e => setName(e.target.value)}
					/>
					<Form.Control
						className="mt-2"
						placeholder="Введите цену процессора"
						type="number"
						value={price}
						onChange={e => setPrice(Number(e.target.value))}
					/>
					<Form.Control
						className="mt-2"
						placeholder="Введите бренд процессора"
						value={brand}
						onChange={e => setBrand(e.target.value)}
					/>
				</Form>
				<h4>Изменить цену провессора</h4>
				{isProcessorsLoading &&
					<>
						<Dropdown className="mt-2 mb-2">
							<Dropdown.Toggle>{selectedProcessor.name || "Выберите процессор"}</Dropdown.Toggle>
							<Dropdown.Menu>
								{processorState.map(processor =>
									<Dropdown.Item
										key={processor.id}
										onClick={() => {
											setSelectedProcessor(processor);
											setNewProcessorPrice(processor.price)
										}}
									>{processor.name}</Dropdown.Item>
								)}
							</Dropdown.Menu>
						</Dropdown>
						<Form>
							<Form.Control
								type="number"
								value={newProcessorPrice}
								placeholder={'Введите новую цену процессора'}
								onChange={e => setNewProcessorPrice(e.target.value)}
							/>
						</Form>
						<Button
							className="mt-2"
							variant="outline-success"
							onClick={updateProcessorPrice}
						>
							Изменить цену
						</Button>
					</>
				}
			</Modal.Body>
			<Modal.Footer>
				<Button variant="outline-danger" onClick={() => onHideDefault()}>Закрыть</Button>
				<Button variant="outline-success" onClick={addProcessor}>Добавить</Button>
			</Modal.Footer>
		</Modal>
	);
}


export default CreateProcessor;