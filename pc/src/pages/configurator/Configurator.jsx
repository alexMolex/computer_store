import React, { useEffect, useState } from 'react';
import Header from '../../components/header/HeaderContainer';
import { Button, Dropdown, Image, Row, Spinner, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { renderCategory } from "../../components/categories/Categories";
import Counter from "../../components/counter/Counter";

const Configurator = ({
	globalProcessor,
	globalVideocard,
	userId,
	isAuth,
	isProcessorsLoading,
	isVideocardsLoading,
	processor,
	videocard,
	computerCase,
	getUserConfigDevices,
	setDeviceProcessorData,
	setDeviceVideocardData,
	setComputerCaseData,
	removeGlobalVideocard,
	removeGlobalProcessor,
	isUserConfigDeviceLoading,
	isComputerCasesLoading,
	userConfigDevices,
	createUserConfigDevice
}) => {

	const [localProcessor, setLocalProcessor] = useState(globalProcessor || '')
	const [localVideocard, setlocalVideocard] = useState(globalVideocard || '')
	const [localComputerCase, setLocalComputerCase] = useState('')
	const [caseVisible, setCaseVisible] = useState(false)
	const [ssd, setSsd] = useState(false)
	const [storageVolume, setStorageVolume] = useState(128)
	const [overclocking, setOverclocking] = useState(false)
	const [ram, setRam] = useState(4)

	useEffect(() => {
		getUserConfigDevices(userId)
		setComputerCaseData()
		setDeviceProcessorData()
		setDeviceVideocardData()
	}, [setDeviceProcessorData, setDeviceVideocardData, userId, setComputerCaseData, getUserConfigDevices])


	const addDevice = () => {
		const formData = new FormData()
		formData.append('price', 18600)
		formData.append('RAM', ram)
		formData.append('SSD', ssd)
		formData.append('storageVolume', storageVolume)
		formData.append('overclocking', overclocking)
		formData.append('userId', userId)
		formData.append('computerCaseId', localComputerCase.id)
		formData.append('processorId', localProcessor.id)
		formData.append('videocardId', localVideocard.id)

		createUserConfigDevice(formData).then(() => {
			getUserConfigDevices(userId);
			handleDefault()
		})
	}

	const handleDefault = () => {
		setLocalProcessor('')
		setlocalVideocard('')
		setLocalComputerCase('')
		setRam(4)
		setStorageVolume(128)
		setSsd(false)
		setOverclocking(false)
		removeGlobalVideocard()
		removeGlobalProcessor()
	}


	return (
		<>
			<Header />
			<div className="container">
				<div className="row">
					<div className="col-md-3">
						<h4>Конфигурация</h4>
						{<Dropdown className="mt-3 mb-3">
							<Dropdown.Toggle className="btn-info">
								{localProcessor.name || "Выберите процессор"}
							</Dropdown.Toggle>
							<Dropdown.Menu>
								{(isProcessorsLoading) && processor.map(category =>
									renderCategory(category, localProcessor, setLocalProcessor)
								)}
							</Dropdown.Menu>
						</Dropdown>}
						{<Dropdown className="mt-3 mb-3">
							<Dropdown.Toggle className="btn-info">
								{localVideocard.name || "Выберите видеокарту"}
							</Dropdown.Toggle>
							<Dropdown.Menu>
								{(isVideocardsLoading) && videocard.map(category =>
									renderCategory(category, localVideocard, setlocalVideocard)
								)}
							</Dropdown.Menu>
						</Dropdown>}
						<div className="custom-control custom-switch mb-2">
							<input
								type="checkbox"
								className="custom-control-input"
								id="customSwitch1"
								checked={ssd}
								onChange={(e) => setSsd(!ssd)}
							/>
							<label className="custom-control-label" htmlFor="customSwitch1">Добавить SSD</label>
						</div>
						<Counter
							counter={ram}
							setCounter={setRam}
							step={4}
							min={4}
							max={128}
						/>
						<span className='ml-2'> ОЗУ, ГБ </span>
						<p></p>
						<Counter
							counter={storageVolume}
							setCounter={setStorageVolume}
							step={128}
							min={128}
							max={8192}
						/>
						<span className='ml-2'> Объем накопителя </span>
						<div className="custom-control custom-switch mt-3 mb-2">
							<input
								type="checkbox"
								className="custom-control-input"
								id="customSwitch2"
								checked={overclocking}
								onChange={(e) => setOverclocking(!overclocking)}
							/>
							<label className="custom-control-label" htmlFor="customSwitch2">
								Добавить возможность разгона
							</label>
						</div>
						<Button
							className="mt-3"
							className="btn-info"
							onClick={() => setCaseVisible(true)}
						>
							{localComputerCase.name || "Выбрать корпус"}

						</Button>
						<p></p>
						<Button
							className="mt-1"
							variant={"outline-dark"}
							onClick={handleDefault}
						>
							Сбросить конфигурацию
						</Button>
						<Modal
							show={caseVisible}
							onHide={() => setCaseVisible(false)}
							size="lg"
							centered
						>
							<Modal.Header closeButton>
								<Modal.Title>
									Выбрать корпус
								</Modal.Title>
							</Modal.Header>
							<Modal.Body>
								{(isComputerCasesLoading) && computerCase.map((Case) => (
									<div key={Case.id}>
										<Image
											width={300}
											height={300}
											src={process.env.REACT_APP_API_URL + Case.img}
											alt={Case.name}
											className="img-thumbnail"
										/>
										<div>
											<h1>{Case.name}</h1>
											<Button
												variant={"outline-dark"}
												onClick={() => {
													setLocalComputerCase(Case);
													setCaseVisible(false)
												}}
											>
												Выбрать
											</Button>
										</div>

									</div>
								))}
							</Modal.Body>

						</Modal>
						<hr />
						<Button
							className="btn-info"
							onClick={addDevice}
						>
							добавить устройство
						</Button>
					</div>
					<div className="col-md-9" >
						<h3 className="justify-content-md-center">Мои утройства</h3>
						{(!isAuth) ? <h4>Чтобы сохранять устройства, необходимо <Link to="/login">залогиниться</Link ></h4> :
							(!isUserConfigDeviceLoading) ?
								<Spinner animation="border" /> :
								(userConfigDevices.length === 0) ?
									<h2>Конфигуратор пуст</h2> :
									userConfigDevices.map((data) => {
										return (
											<div className="thumbnail mt-2 shadow p-1 mb-1 bg-white rounded"
												key={data.id}
											>
												<div className="row">
													<div className="col-md-6">
														<Image
															width={300}
															height={300}
															src={process.env.REACT_APP_API_URL + data.computer_case.img}
															alt={data.computer_case.name}
															className="img-thumbnail"
														/>
													</div>
													<div className="col-md-6">
														<Row className="d-flex flex-column m-2">
															<h5>{data.processor.name}</h5>
															<h5>{data.videocard.name}</h5>
															<h5>{data.computer_case.name}</h5>
															<h5>{data.RAM} ГБ OЗУ</h5>
															{(data.SSD) ? <h5>с SSD</h5> : <h5>без SSD</h5>}
															{(data.overclocking) ? <h5>с разгоном</h5> : <h5>без разгона</h5>}
															<div className="caption-full mt-2">
																{/* <OrderProcessing
																basketId={basketId}
																createOrderProcessingData={createOrderProcessingData}
																price={data.device.price}
																orderName={data.device.name}
																buttonName='сделать заказ'
																processorId={data.device.processorId}
																videocardId={data.device.videocardId}
															/> */}
																<h4 className="float-right">Руб. {data.price}</h4>

																<button

																	style={{ color: '#128496' }}
																	className="btn pt-0 pb-0 mr-2 float-right"
																>
																	<h4> удалить </h4>
																</button>

															</div>
														</Row>
													</div>
												</div>

											</div>
										)
									})
						}
					</div>
				</div>
			</div>

		</>
	);
};

export default Configurator;

