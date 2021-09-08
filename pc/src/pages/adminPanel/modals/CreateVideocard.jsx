import React, { useState } from 'react';
import { Button, Modal, Form, Dropdown } from 'react-bootstrap';
<<<<<<< HEAD
import Counter from "../../../components/counter/Counter";
=======
>>>>>>> 8452915f270c1f8ce6f21e84f93ee16b590c5510



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
<<<<<<< HEAD
	const [memoryValue, setMemoryValue] = useState(0)
	const [frequency, setFrequency] = useState("")
	const [memoryType, setMemoryType] = useState("")
	const [memoryBus, setMemoryBus] = useState(64)
	const [peakConsumption, setPeakConsumption] = useState(50)
=======
>>>>>>> 8452915f270c1f8ce6f21e84f93ee16b590c5510

	const addVideocard = () => {
		const formData = new FormData()
		formData.append('name', name)
		formData.append('price', price)
		formData.append('brand', brand)
<<<<<<< HEAD
		formData.append('memoryValue', memoryValue)
		formData.append('frequency', frequency)
		formData.append('memoryType', memoryType)
		formData.append('memoryBus', memoryBus)
		formData.append('peakConsumption', peakConsumption)
=======
>>>>>>> 8452915f270c1f8ce6f21e84f93ee16b590c5510

		setCreateDeviceVideocard(formData).then(() => {
			setDeviceVideocardData()
			onHide()
			setName("")
			setPrice("")
			setBrand("")
			alert('Видеокарта добавлена')
		})
<<<<<<< HEAD
=======
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
>>>>>>> 8452915f270c1f8ce6f21e84f93ee16b590c5510
	}
	console.log(memoryValue, typeof (memoryValue), typeof (peakConsumption));
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

	const memoryTypeList = [
		"GDDR5",
		"GDDR5X",
		"GDDR6",
		"GDDR6X",
		"GDDR3",
		"GDDR4",
		"DDR3",
		"DDR4",
		"DDR5",
	]

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
<<<<<<< HEAD
					<h5>Частота GPU, Ghz</h5>
					<Form.Control
						className="mt-2"
						placeholder="Введите диапозон частот GPU, стоковую-пиковую"
						value={frequency}
						onChange={e => setFrequency(e.target.value)}
					/>
					<h5>Объем видеопамяти, ГБ</h5>
					<Form.Control
						className="mt-2"
						placeholder="Введите объем видеопамяти (если есть)"
						type="number"
						value={memoryValue || ""}
						onChange={e => setMemoryValue(Number(e.target.value))}
					/>
					<h5>Тип памяти</h5>
					<Dropdown className="mt-2 mb-2">
						<Dropdown.Toggle>{memoryType || "Выберите тип памяти"}</Dropdown.Toggle>
						<Dropdown.Menu>
							{memoryTypeList.map(type =>
								<Dropdown.Item
									key={type}
									onClick={() => setMemoryType(type)}
								>{type}</Dropdown.Item>
							)}
						</Dropdown.Menu>
					</Dropdown>
					<h5>Шина памятит, бит</h5>
					<Counter
						counter={memoryBus}
						setCounter={setMemoryBus}
						step={64}
						min={64}
						max={512}
					/>

					<h5>Пиковое потребление, Вт</h5>
					<Counter
						counter={peakConsumption}
						setCounter={setPeakConsumption}
						step={25}
						min={25}
						max={500}

					/>
=======
>>>>>>> 8452915f270c1f8ce6f21e84f93ee16b590c5510
					<Form.Control
						className="mt-2"
						placeholder="Введите бренд видеокарты"
						value={brand}
						onChange={e => setBrand(e.target.value)}
					/>
				</Form>
<<<<<<< HEAD
				<hr />
=======
>>>>>>> 8452915f270c1f8ce6f21e84f93ee16b590c5510
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