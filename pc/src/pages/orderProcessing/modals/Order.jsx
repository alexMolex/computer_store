import React, { useEffect, useState } from 'react';
import { Button, Modal, Form, Dropdown, Col, Row } from 'react-bootstrap';




const Order = ({
	createOrderProcessingData,
	price,
	orderName,
	processorId,
	videocardId,
	show,
	onHide,
	basketId,
}) => {



	useEffect(() => {
		addOrder()
	}, []) // eslint-disable-line react-hooks/exhaustive-deps

	const [messengerTypeState, setMessengerTypeState] = useState('')

	const [userName, setUserName] = useState("");
	const [adress, setAdress] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("")
	const [contacts, setContacts] = useState([{ title: '', description: '', number: Date.now() }])
	const [orders, setOrders] = useState([])
	const [ssd, setSsd] = useState(false)
	// const [ram, setRam] = useState(8)
	// const [storageVolume, setStorageVolume] = useState('')
	const [overclocking, setOverclocking] = useState(false)

	const changeContacts = (key, value, number) => {
		setContacts(contacts.map(i => i.number === number ? { ...i, [key]: value } : i))
	}

	const addOrder = () => {
		setOrders([...orders,
		{
			SSD: ssd,
			storageVolume: 320,
			overclocking,
			processorId,
			videocardId,
			RAM: 8,
			number: Date.now()
		}])
	}

	console.log(orders);

	const changeOrder = (key, value, number) => {
		setOrders(orders.map(i => i.number === number ? { ...i, [key]: value } : i))
	}

	console.log(orders);

	const messenger = [
		{ id: 2, type: 'Telegram' },
		{ id: 3, type: 'WhatsApp' },
		{ id: 5, type: 'Viber' },
	]

	const addDevice = () => {
		const formData = new FormData()
		formData.append('userName', userName)
		formData.append('adress', adress)
		formData.append('price', price)
		formData.append('phoneNumber', phoneNumber)
		formData.append('userId', basketId)
		formData.append('contacts', JSON.stringify(contacts))
		formData.append('order', JSON.stringify(orders))

		createOrderProcessingData(formData).then(() => {
			onHide()
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
				<Modal.Title>
					Заказать сборку {orderName}
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Form.Control
						className="mt-2"
						placeholder="Введите Ваше имя"
						value={userName}
						onChange={e => setUserName(e.target.value)}
					/>
					<Form.Control
						className="mt-2"
						placeholder="Введите адрес"
						type="string"
						value={adress}
						onChange={e => setAdress(e.target.value)}
					/>
					<Row>
						<Col md={4} className="mt-3 pt-1">
							Введите номер телефона
						</Col>
						<Col md={4} className="mt-2 pt-1">
							<Form.Control
								value={phoneNumber}
								onChange={(e) => setPhoneNumber(e.target.value)}
								placeholder="Телефон"
							/>
						</Col>
					</Row>
					{contacts.map(i =>
						<Row className="mt-2 pt-2" key={i.number}>
							<Col md={4}>
								<Dropdown className=" mb-3">
									<Dropdown.Toggle className="btn-info">
										{messengerTypeState || "Выберите мессенджер"}
									</Dropdown.Toggle>
									<Dropdown.Menu >
										{messenger.map(contact => (
											<Dropdown.Item
												style={{ cursor: 'pointer' }}
												onClick={() => {
													changeContacts('title', contact.type, i.number);
													setMessengerTypeState(contact.type)
												}}
												key={contact.id}
											>
												{contact.type}
											</Dropdown.Item>

										))
										}
									</Dropdown.Menu>
								</Dropdown>

							</Col>
							<Col md={4}>
								<Form.Control
									value={i.description}
									onChange={(e) =>
										changeContacts('description',
											e.target.value,
											i.number)
									}
									placeholder="Введите данные связи"
								/>
							</Col>
						</Row>
					)}
					<hr />
					<Button
						variant={"outline-dark"}
						onClick={addOrder}
					>
						Добавить детали заказа
					</Button>
					{orders.map((i, { RAM }) =>
						<Row className="mt-2 pt-2" key={i.number}>
							<Col md={12} className="mt-2">
								<Form.Check
									type='checkbox'
									checked={ssd}
									label="Добавить SSD"
									onChange={(e) => {
										setSsd(!ssd)
										changeOrder('SSD', !ssd, i.number)
									}}
								/>
							</Col>
							<Col md={5} className="mt-3">
								Введите объем накопителей, ГБ:
							</Col>
							<Col md={4} className="mt-2">
								<Form.Control
									value={i.storageVolume}
									onChange={(e) => changeOrder('storageVolume', +(e.target.value), i.number)}
									placeholder="Введите объем накопителей"
								/>
							</Col>
							<Col md={5} className="mt-3">
								Введите объем озу, ГБ:
							</Col>
							<Col md={4} className="mt-2">
								<Form.Control
									type="number"
									value={RAM}
									onChange={(e) => changeOrder('RAM', Number(e.target.value), i.number)}
									placeholder="Введите объем ОЗУ"
								/>
							</Col>
							<Col md={12} className="mt-3">
								<Form.Check
									type='checkbox'
									checked={overclocking}
									label="Возможность разгона"
									onChange={
										(e) => {
											setOverclocking(!overclocking)
											changeOrder('overclocking', !overclocking, i.number)
										}}
								/>
							</Col>
							{/* <Col md={4}>
								<Button
									variant={"outline-danger"}
									onClick={() => removeOrder(i.number)}
								>
									Удалить
								</Button>
							</Col> */}
						</Row>

					)}
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<h3 className="mr-3">{price} Руб.</h3>
				<Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
				<Button variant="outline-success" onClick={addDevice}>Добавить</Button>
			</Modal.Footer>
		</Modal>
	);
}


export default Order;