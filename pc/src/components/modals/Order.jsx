import React, { useEffect, useState } from 'react';
import { Button, Modal, Form, Dropdown, Col, Row } from 'react-bootstrap';

import Counter from "../counter/Counter";
import useTotalDevicePrice from "../../hooks/useTotalDevicePrice";


const Order = ({
	createOrderProcessingData,
	price,
	orderName,
	processorId,
	videocardId,
	show,
	onHide,
	basketId,
	computerCaseId,
	RAM,
	orderOverclocking,
	orderStorageVolume,
	orderSsd,
	computerCase,
	videocard,
	processor,
	userContactData
}) => {



	const [messengerTypeState, setMessengerTypeState] = useState('')
	const [userName, setUserName] = useState(userContactData.userName);
	const [adress, setAdress] = useState(userContactData.adress);
	const [phoneNumber, setPhoneNumber] = useState(userContactData.phoneNumber)
	const [remark, setRemark] = useState("")
	const [contacts, setContacts] = useState([{ title: '', description: '', number: Date.now() }])
	const [orders, setOrders] = useState([])
	const [ssd, setSsd] = useState(orderSsd || false)
	const [ram, setRam] = useState(RAM || 4)
	const [storageVolume, setStorageVolume] = useState(orderStorageVolume || 256)
	const [overclocking, setOverclocking] = useState(orderOverclocking || false)
	const [count, setCount] = useState(1)


	const localComputerCasePrice = computerCase.price || 0;
	const localVideocardPrice = videocard.price || 0;
	const localProcessorPrice = processor.price || 0;
	const orderNumber = orders[0] || ""


	const { totaHookPrice } = useTotalDevicePrice({
		localComputerCasePrice,
		localVideocardPrice,
		localProcessorPrice,
		ssd,
		storageVolume,
		ram,
		overclocking,
		price
	})

	const changeContacts = (key, value, number) => {
		setContacts(contacts.map(i => i.number === number ? { ...i, [key]: value } : i))
	}


	const changeOrder = (key, value, number) => {
		setOrders(orders.map(i => i.number === number ? { ...i, [key]: value } : i))
	}



	useEffect(() => {
		setUserName(userContactData.userName);
		setAdress(userContactData.adress);
		setPhoneNumber(userContactData.phoneNumber);
	}, [setUserName, setAdress, setPhoneNumber, userContactData])

	useEffect(() => {
		changeOrder("RAM", ram, orderNumber.number);
	}, [ram, orderNumber.number]) // eslint-disable-line react-hooks/exhaustive-deps

	useEffect(() => {
		changeOrder("storageVolume", storageVolume, orderNumber.number);
	}, [storageVolume, orderNumber.number]) // eslint-disable-line react-hooks/exhaustive-deps



	const addOrder = () => {
		setOrders([...orders,
		{
			SSD: ssd,
			storageVolume,
			overclocking,
			processorId,
			videocardId,
			computerCaseId,
			RAM: ram,
			number: Date.now()
		}
		])
	}


<<<<<<< HEAD
=======


>>>>>>> 8452915f270c1f8ce6f21e84f93ee16b590c5510
	useEffect(() => {
		addOrder()
	}, []) // eslint-disable-line react-hooks/exhaustive-deps

	const defaultOnHide = () => {
		setSsd(orderSsd);
		setOverclocking(orderOverclocking);
		setRam(RAM);
		setStorageVolume(orderStorageVolume);
		onHide()

	}

	const messenger = [
		{ id: 2, type: 'Telegram' },
		{ id: 3, type: 'WhatsApp' },
		{ id: 5, type: 'Viber' },
	]

	const addDevice = () => {
		const formData = new FormData()
		formData.append('userName', userName)
		formData.append('adress', adress)
		formData.append('price', totaHookPrice)
		formData.append('phoneNumber', phoneNumber)
		formData.append('remark', remark)
		formData.append('status', "Заказ в обработке")
		formData.append('userId', basketId || 1)
		formData.append('contacts', JSON.stringify(contacts))
		formData.append('order', JSON.stringify(orders))

		createOrderProcessingData(formData)
			.then(() => defaultOnHide())

	}



	return (
		<Modal
			show={show}
			onHide={() => defaultOnHide()}
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
						value={userName || ""}
						onChange={e => setUserName(e.target.value)}
					/>
					<Form.Control
						className="mt-2"
						placeholder="Введите адрес"
						type="string"
						value={adress || ""}
						onChange={e => setAdress(e.target.value)}
					/>
					<Row>
						<Col md={4} className="mt-3 pt-1">
							Введите номер телефона
						</Col>
						<Col md={4} className="mt-2 pt-1">
							<Form.Control
								value={phoneNumber || ""}
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
					<h3>Детали заказа</h3>
					{orders.map((i, { RAM }) =>
						<Row className="mt-2 pt-2" key={i.number}>
							<Col md={12} className="mt-2">
								<div className="custom-control custom-switch mb-2">
									<input
										type="checkbox"
										className="custom-control-input"
										id="customSwitch3"
										checked={ssd}
										onChange={(e) => {
											setSsd(!ssd)
											changeOrder('SSD', !ssd, i.number)
										}}
									/>
									<label
										className="custom-control-label"
										htmlFor="customSwitch3"
									>
										Добавить SSD
									</label>
								</div>

							</Col>
							<Col md={5} className="mt-3">
								Введите объем накопителей, ГБ:
							</Col>
							<Col md={4} className="mt-2">
								<Counter
									counter={storageVolume}
									setCounter={setStorageVolume}
									step={256}
									min={256}
									max={8192}

								/>
							</Col>
							<Col md={5} className="mt-3">
								Введите объем озу, ГБ:
							</Col>
							<Col md={4} className="mt-2">

								<Counter
									counter={ram}
									setCounter={setRam}
									step={4}
									min={4}
									max={128}
								/>
							</Col>
							<Col md={12} className="mt-3">
								<div className="custom-control custom-switch mb-2">
									<input
										type="checkbox"
										className="custom-control-input"
										id="customSwitch4"
										checked={overclocking}
										onChange={(e) => {
											setOverclocking(!overclocking)
											changeOrder('overclocking', !overclocking, i.number)
										}}
									/>
									<label
										className="custom-control-label"
										htmlFor="customSwitch4"
									>
										Возможность разгона
									</label>
								</div>

								<Form.Label
									className="mt-3"
								>
									Примечние
								</Form.Label>
								<Form.Control
									as="textarea"
									placeholder="Укажите примечание к заказу (необязательно)"
									rows={3}
									onChange={(e) => setRemark(e.target.value)}
								/>
							</Col>

						</Row>

					)}
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<h3>Выберите количесвто компьтеров</h3>
				<Counter
					counter={count}
					setCounter={setCount}
					step={1}
					min={1}
					max={10}
				/>
				<h3 className="mr-3">{totaHookPrice} Руб.</h3>
				<Button variant="outline-danger" onClick={() => defaultOnHide()}>Закрыть</Button>
				<Button variant="outline-success" onClick={() => addDevice()}>Добавить</Button>
			</Modal.Footer>
		</Modal>
	);
}


export default Order;