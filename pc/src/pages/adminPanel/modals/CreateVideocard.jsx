import React, { useState } from 'react';
import { Button, Modal, Form, Dropdown } from 'react-bootstrap';



const CreateVideocard = ({
	show,
	onHide,
	setCreateDeviceVideocard,
	setDeviceVideocardData,
	setUpdateVideocardPriceData,
	videocardState,
	isVideocardsLoading
}) => {

	const [name, setName] = useState("");
	const [price, setPrice] = useState("");
	const [brand, setBrand] = useState("");
	const [selectedVideocard, setSelectedVideocard] = useState("")
	const [newVideocardPrice, setNewVideocardPrice] = useState(0)

	const addVideocard = () => {
		const formData = new FormData()
		formData.append('name', name)
		formData.append('price', price)
		formData.append('brand', brand)

		setCreateDeviceVideocard(formData).then(() => {
			setDeviceVideocardData()
			onHide()
			setName("")
			setPrice("")
			setBrand("")
			alert('Видеокарта добавлена')
		})
	}

	const updateVideocardPrice = () => {
		setUpdateVideocardPriceData(selectedVideocard.id, +(newVideocardPrice));
		setDeviceVideocardData()
		alert(`Цена ${selectedVideocard.name} изменена с ${selectedVideocard.price} до ${newVideocardPrice} руб.`)
		setSelectedVideocard("")
		setNewVideocardPrice("")
	}

	const onHideDefault = () => {
		onHide();
		setSelectedVideocard("")
		setNewVideocardPrice("")
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
					Добавить Видеокарту
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Form.Control
						value={name}
						placeholder={'Введите название видеокарты'}
						onChange={e => setName(e.target.value)}
					/>
					<Form.Control
						className="mt-2"
						placeholder="Введите цену видеокарты"
						type="number"
						value={price}
						onChange={e => setPrice(Number(e.target.value))}
					/>
					<Form.Control
						className="mt-2"
						placeholder="Введите бренд видеокарты"
						value={brand}
						onChange={e => setBrand(e.target.value)}
					/>
				</Form>
				<h4>Изменить цену видеокарты</h4>
				{isVideocardsLoading &&
					<>
						<Dropdown className="mt-2 mb-2">
							<Dropdown.Toggle>{selectedVideocard.name || "Выберите видеокарту"}</Dropdown.Toggle>
							<Dropdown.Menu>
								{videocardState.map(videocard =>
									<Dropdown.Item
										key={videocard.id}
										onClick={() => {
											setSelectedVideocard(videocard);
											setNewVideocardPrice(videocard.price)
										}}
									>{videocard.name}</Dropdown.Item>
								)}
							</Dropdown.Menu>
						</Dropdown>
						<Form>
							<Form.Control
								type="number"
								value={newVideocardPrice}
								placeholder={'Введите новую цену видеокарты'}
								onChange={e => setNewVideocardPrice(e.target.value)}
							/>
						</Form>
						<Button
							className="mt-2"
							variant="outline-success"
							onClick={updateVideocardPrice}
						>
							Изменить цену
						</Button>
					</>
				}
			</Modal.Body>
			<Modal.Footer>
				<Button variant="outline-danger" onClick={() => onHideDefault()}>Закрыть</Button>
				<Button variant="outline-success" onClick={addVideocard}>Добавить</Button>
			</Modal.Footer>
		</Modal>
	);
}


export default CreateVideocard;