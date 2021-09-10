import React, { useState, useEffect } from 'react';
import { Button, Modal, Form, Dropdown, Col, Row } from 'react-bootstrap';

import Counter from "../../../components/counter/Counter";
import SelectCaseModal from "../../../components/modals/SelectCaseModal";
import useTotalDevicePrice from "../../../hooks/useTotalDevicePrice";

const CreateDevice = ({
	show,
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
	computerCaseData,
	isComputerCasesLoading,
	setComputerCaseData,
	count,
}) => {


	const [name, setName] = useState("");
	const [price, setPrice] = useState(process.env.REACT_APP_BASE_PRICE || "");
	const [ram, setRam] = useState(4)
	const [ssd, setSsd] = useState(false)
	const [storageVolume, setStorageVolume] = useState(256)
	const [overclocking, setOverclocking] = useState(false)
	const [brand, setBrand] = useState("");
	const [type, setType] = useState("");
	const [processor, setProcessor] = useState("");
	const [videocard, setVideocard] = useState("");
	const [localComputerCasePrice, setComputerCasePrice] = useState(0);
	const [computerCase, setComputerCase] = useState("");
	const [caseVisible, setCaseVisible] = useState(false);
	const [info, setInfo] = useState([])

	const localVideocardPrice = videocard.price || 0;
	const localProcessorPrice = processor.price || 0;


	useEffect(() => {
		if (processor.integratedVideoCard) {
			videocardState.find(video => (
				(video.name === processor.integratedVideoCardName) && setVideocard(video)
			))
		}
		if (!processor.integratedVideoCard && videocard.memoryValue === 0) setVideocard("")
	}, [processor, videocardState])  // eslint-disable-line react-hooks/exhaustive-deps


	const addInfo = () => {
		setInfo([...info, { title: '', description: '', number: Date.now() }])
	}

	const removeInfo = (number) => {
		setInfo(info.filter(i => i.number !== number))
	}

	const changeInfo = (key, value, number) => {
		setInfo(info.map(i => i.number === number ? { ...i, [key]: value } : i))
	}

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

	const removeState = () => {
		setName("");
		setComputerCase("");
		setVideocard("");
		setProcessor("");
		setBrand("");
		setRam(4);
		setComputerCasePrice(0);
		setStorageVolume(256);
		setSsd(false);
		setOverclocking(false);
		setType("");
		setInfo([]);
	}


	const addDevice = () => {
		const formData = new FormData()
		formData.append('name', name)
		formData.append('price', price)
		formData.append('totalPrice', totaHookPrice)
		formData.append('RAM', ram)
		formData.append('SSD', ssd)
		formData.append('storageVolume', storageVolume)
		formData.append('overclocking', overclocking)
		formData.append('computerCaseId', computerCase.id)
		formData.append('brandId', brand.id)
		formData.append('typeId', type.id)
		formData.append('processorId', processor.id)
		formData.append('videocardId', videocard.id)
		formData.append('info', JSON.stringify(info))

		setCreateDevice(formData)
			.then(() => {
				removeState();
				onHide();
			})
	}

	const dropdownRender = (isLoading, state, setState, item, name) => {
		return (
			(isLoading) &&
			<Dropdown className="mt-2 mb-2">
				<Dropdown.Toggle>{item.name || `Выберите ${name}`}</Dropdown.Toggle>
				<Dropdown.Menu>
					{(name === "видеокарту") ?
						state.map(i =>
							(i.price !== 0 || i.name === processor.integratedVideoCardName) &&
							<Dropdown.Item
								key={i.id}
								onClick={() => setState(i)}
							>{i.name}</Dropdown.Item>) :
						state.map(i =>
							<Dropdown.Item
								key={i.id}
								onClick={() => setState(i)}
							>{i.name}</Dropdown.Item>
						)}
				</Dropdown.Menu>
			</Dropdown>
		)
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
					{dropdownRender(isTypeLoading, typeState, setType, type, "тип")}
					{dropdownRender(isBrandLoading, brandState, setBrand, brand, "бренд")}
					{dropdownRender(isProcessorsLoading, processorState, setProcessor, processor, "процессор")}
					{dropdownRender(isVideocardsLoading, videocardState, setVideocard, videocard, "видеокарту")}
					<SelectCaseModal
						show={caseVisible}
						setVisible={setCaseVisible}
						setLocalComputerCase={setComputerCase}
						isComputerCasesLoading={isComputerCasesLoading}
						computerCase={computerCaseData}
						setComputerCasePrice={setComputerCasePrice}
						count={count}
						setComputerCaseData={setComputerCaseData}
					/>
					<Button
						className="mt-3 btn-info"
						onClick={() => setCaseVisible(true)}
					>
						{computerCase.name || "Выбрать корпус"}

					</Button>
					<Form.Control
						className="mt-2"
						placeholder="Введите название устройтсва"
						value={name}
						onChange={e => setName(e.target.value)}
					/>
					<Form.Control
						className="mt-2"
						placeholder="Введите базовую стоимость устройтсва"
						type="number"
						value={price}
						onChange={e => setPrice(Number(e.target.value))}
					/>

					<Button
						variant={"outline-dark"}
						onClick={addInfo}
					>
						Добавить конфигурацию
					</Button>
					<hr />
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
					<Row className="mt-2 pt-2">
						<Col md={12} className="mt-2">
							<div className="custom-control custom-switch mb-2">
								<input
									type="checkbox"
									className="custom-control-input"
									id="customSwitch5"
									checked={ssd}
									onChange={(e) => setSsd(!ssd)}
								/>
								<label
									className="custom-control-label"
									htmlFor="customSwitch5"
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
									id="customSwitch6"
									checked={overclocking}
									onChange={(e) => setOverclocking(!overclocking)}
								/>
								<label
									className="custom-control-label"
									htmlFor="customSwitch6"
								>
									Возможность разгона
								</label>
							</div>
						</Col>
						<Col md={4} className="mt-3">
							<Button
								variant="outline-danger"
								onClick={() => removeState()}
							>
								Сбросить конфигурацию
							</Button>
						</Col>
					</Row>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<h3>{totaHookPrice} Руб.</h3>
				<Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
				<Button variant="outline-success" onClick={addDevice}>Добавить</Button>
			</Modal.Footer>
		</Modal>
	);
}


export default CreateDevice;