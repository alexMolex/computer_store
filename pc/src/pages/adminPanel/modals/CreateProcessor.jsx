import React, { useState } from 'react';
import { Button, Modal, Form, Dropdown } from 'react-bootstrap';

import Counter from "../../../components/counter/Counter";


const CreateProcessor = ({
	show,
	onHide,
	setCreateDeviceProcessor,
	setDeviceProcessorData,
	setUpdateProcessorPriceData,
	processorState,
	isProcessorsLoading,
	videocardState
}) => {


	const [name, setName] = useState("");
	const [price, setPrice] = useState("");
	const [brand, setBrand] = useState("");
	const [selectedProcessor, setSelectedProcessor] = useState("")
	const [newProcessorPrice, setNewProcessorPrice] = useState(0)
	const [socket, setSocket] = useState("")
	const [coresThreads, setCoresThreads] = useState("")
	const [technicalProcess, setTechnicalProcess] = useState("")
	const [frequency, setFrequency] = useState("")
	const [memoryType, setMemoryType] = useState("")
	const [overclock, setOverclock] = useState(false)
	const [tdp, setTdp] = useState("")
	const [integratedVideoCard, setIntegratedVideoCard] = useState(false)
	const [integratedVideoCardName, setIntegratedVideoCardName] = useState("")
	const [peakConsumption, setPeakConsumption] = useState(65)

	const addProcessor = () => {
		const formData = new FormData()
		formData.append('name', name)
		formData.append('price', price)
		formData.append('brand', brand)
		formData.append('socket', socket)
		formData.append('coresThreads', coresThreads)
		formData.append('technicalProcess', technicalProcess)
		formData.append('frequency', frequency)
		formData.append('memoryType', memoryType)
		formData.append('overclock', overclock)
		formData.append('tdp', tdp)
		formData.append('integratedVideoCard', integratedVideoCard)
		formData.append('integratedVideoCardName', integratedVideoCardName)
		formData.append('peakConsumption', peakConsumption)


		setCreateDeviceProcessor(formData).then(() => {
			setDeviceProcessorData()
			onHide()
			setName("")
			setPrice("")
			setBrand("")
			alert('Процессор добавлен')
		})
	}

	console.log(integratedVideoCardName);
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

	const lists = {
		socketList: [
			"AM3+",
			"AM4",
			"LGA 1151",
			"LGA 1151-v2",
			"LGA 1200",
			"LGA 2011",
			"LGA 2066",
			"TR4",
			"sTRX4",
			"sWRX8",
		],
		coresThreadsList: [
			"2/2",
			"2/4",
			"4/4",
			"4/8",
			"6/6",
			"6/12",
			"8/8",
			"8/16",
			"10/20",
			"12/24",
			"14/28",
			"16/32",
			"24/48",
			"32/64",
			"64/128",
		],
		technicalProcessList: [
			"5 НМ",
			"7 НМ",
			"12 НМ",
			"14 НМ",
			"28 НМ",
			"32 НМ",
		],
		memoryTypeList: [
			"DDR4",
			"DDR3",
			"DDR3L",
			"DDR5",
		]
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
					<h5>Сокет</h5>
					<Dropdown className="mt-2 mb-2">
						<Dropdown.Toggle>{socket || "Выберите сокет"}</Dropdown.Toggle>
						<Dropdown.Menu>
							{lists.socketList.map(socket =>
								<Dropdown.Item
									key={socket}
									onClick={() => setSocket(socket)}
								>{socket}</Dropdown.Item>
							)}
						</Dropdown.Menu>
					</Dropdown>
					<h5>Количество ядер/потоков</h5>
					<Dropdown className="mt-2 mb-2">
						<Dropdown.Toggle>{coresThreads || "Выберите количество"}</Dropdown.Toggle>
						<Dropdown.Menu>
							{lists.coresThreadsList.map(cores =>
								<Dropdown.Item
									key={cores}
									onClick={() => setCoresThreads(cores)}
								>{cores}</Dropdown.Item>
							)}
						</Dropdown.Menu>
					</Dropdown>
					<h5>Техпроцесс</h5>
					<Dropdown className="mt-2 mb-2">
						<Dropdown.Toggle>{technicalProcess || "Выберите техпроцесс"}</Dropdown.Toggle>
						<Dropdown.Menu>
							{lists.technicalProcessList.map(value =>
								<Dropdown.Item
									key={value}
									onClick={() => setTechnicalProcess(value)}
								>{value}</Dropdown.Item>
							)}
						</Dropdown.Menu>
					</Dropdown>

					<h5>Частота процессора, Гц</h5>
					<Form.Control
						className="mt-2"
						placeholder="Введите частоту, Гц (min-max)"
						value={frequency}
						onChange={e => setFrequency(e.target.value)}
					/>
					<div className="custom-control custom-switch mt-2">
						<input
							type="checkbox"
							className="custom-control-input"
							id="customSwitch8"
							checked={overclock}
							onChange={(e) => setOverclock(!overclock)}
						/>
						<label
							className="custom-control-label"
							htmlFor="customSwitch8"
						>
							Разгон
						</label>
					</div>
					<h5>Тип памяти</h5>
					<Dropdown className="mt-2 mb-2">
						<Dropdown.Toggle>{memoryType || "Выберите тип памяти"}</Dropdown.Toggle>
						<Dropdown.Menu>
							{lists.memoryTypeList.map(type =>
								<Dropdown.Item
									key={type}
									onClick={() => setMemoryType(type)}
								>{type}</Dropdown.Item>
							)}
						</Dropdown.Menu>
					</Dropdown>
					<h5 className="mt-2">TDP, Вт</h5>
					<Form.Control
						className="mt-2"
						placeholder="Введите tdp, Вт"
						value={tdp}
						onChange={e => setTdp(e.target.value)}
					/>
					<div className="custom-control custom-switch mt-2">
						<input
							type="checkbox"
							className="custom-control-input"
							id="customSwitch9"
							checked={integratedVideoCard}
							onChange={(e) => {
								setIntegratedVideoCard(!integratedVideoCard);
								integratedVideoCard && setIntegratedVideoCardName("")
							}}
						/>
						<label
							className="custom-control-label"
							htmlFor="customSwitch9"
						>
							Встроенная видеокарта
						</label>
					</div>
					{integratedVideoCard &&
						<Dropdown className="mt-2 mb-2">
							<Dropdown.Toggle>{integratedVideoCardName || "Выберите видеокарту"}</Dropdown.Toggle>
							<Dropdown.Menu>
								{videocardState.map(vodeo =>
									(vodeo.price) === 0 &&
									<Dropdown.Item
										key={vodeo.id}
										onClick={() => setIntegratedVideoCardName(vodeo.name)}
									>{vodeo.name}</Dropdown.Item>
								)}
							</Dropdown.Menu>
						</Dropdown>}
					<h4>Пиковое потребление, Вт</h4>
					<Counter
						counter={peakConsumption}
						setCounter={setPeakConsumption}
						step={15}
						min={15}
						max={300}

					/>
				</Form>
				<hr />
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