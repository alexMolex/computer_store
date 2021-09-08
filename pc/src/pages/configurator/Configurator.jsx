import React, { useEffect, useState } from 'react';
import Header from '../../components/header/HeaderContainer';
import { Button, Dropdown, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { renderCategory } from "../../components/categories/Categories";
import Counter from "../../components/counter/Counter";

import SelectCaseModal from "../../components/modals/SelectCaseModal";
import ConfigDeviceCard from "../../components/configDeviceCard/ConfigDeviceCard";
import useTotalDevicePrice from "../../hooks/useTotalDevicePrice";
import Pages from "../../components/pagination/OtherPagination";
import IsCreateOrderFailer from "../../components/isCreateFailer/IsCreateOrderFailerContainer";

import "./configurator.css";

const Configurator = ({
	globalProcessor,
	globalVideocard,
	createOrderProcessingData,
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
	createUserConfigDevice,
	deleteUserConfigDevice,
	isCreatingConfigDeviceFailer,
	creatingConfigDeviceAlert,
	removeIsOneUserConfigLoading,
	count,
	configCount,
}) => {


	const [localProcessor, setLocalProcessor] = useState(globalProcessor || '')
	const [localProcessorPrice, setLocalProcessorPrice] = useState(globalProcessor.price || 0)
	const [localVideocard, setlocalVideocard] = useState(globalVideocard || '')
	const [localVideocardPrice, setlocalVideocardPrice] = useState(globalVideocard.price || 0)
	const [localComputerCase, setLocalComputerCase] = useState('')
	const [localComputerCasePrice, setLocalComputerCasePrice] = useState(0)
	const [caseVisible, setCaseVisible] = useState(false)
	const [ssd, setSsd] = useState(false)
	const [storageVolume, setStorageVolume] = useState(256)
	const [overclocking, setOverclocking] = useState(false)
	const [ram, setRam] = useState(4)
	const [isSubmitting, setIsSubmitting] = useState(false)

	const price = process.env.REACT_APP_BASE_PRICE

	const { totaHookPrice } = useTotalDevicePrice(
		{
			localProcessorPrice,
			localVideocardPrice,
			localComputerCasePrice,
			ssd,
			storageVolume,
			ram,
			overclocking,
			price
		}
	)

	useEffect(() => {
		getUserConfigDevices(userId)
		removeIsOneUserConfigLoading()
		setComputerCaseData()
		setDeviceProcessorData()
		setDeviceVideocardData()
	}, [
		setDeviceProcessorData,
		setDeviceVideocardData,
		userId,
		removeIsOneUserConfigLoading,
		setComputerCaseData,
		getUserConfigDevices,
	])

	useEffect(() => {
		localProcessor.integratedVideoCard && videocard.find(video => (
			(video.name === localProcessor.integratedVideoCardName) && setlocalVideocard(video)
		))
	}, [localProcessor, videocard])


	const addDevice = () => {
		const formData = new FormData()
		formData.append('price', price)
		formData.append('RAM', ram)
		formData.append('SSD', ssd)
		formData.append('storageVolume', storageVolume)
		formData.append('overclocking', overclocking)
		formData.append('userId', userId)
		formData.append('computerCaseId', localComputerCase.id)
		formData.append('processorId', localProcessor.id)
		formData.append('videocardId', localVideocard.id)

		setIsSubmitting(true)
		createUserConfigDevice(formData).then(() => {
			getUserConfigDevices(userId);
			handleDefault();
			setIsSubmitting(false)
		})
	}


	const handleDefault = () => {
		setLocalProcessor('')
		setlocalVideocard('')
		setLocalComputerCase('')
		setRam(4)
		setStorageVolume(256)
		setSsd(false)
		setOverclocking(false)
		removeGlobalVideocard()
		removeGlobalProcessor()
		setLocalProcessorPrice(0)
		setlocalVideocardPrice(0)
		setLocalComputerCasePrice(0)
	}




	return (
		<>
			<Header />
			<div className="container animation">
				<div className="container-sm alert-z position-absolute p-0 mt-3">
					{(creatingConfigDeviceAlert && !isCreatingConfigDeviceFailer) &&
						<div className="alert alert-success text-center alert-z" role="alert">
							Устройство добавлено
						</div>
					}
					{isCreatingConfigDeviceFailer &&
						<div className="alert alert-danger text-center alert-z" role="alert">
							Такая Конфигурация уже создана
						</div>}
				</div>
				<IsCreateOrderFailer />

				<div className="row">
					<div className="col-md-3">

						<h3>Конфигурация</h3>

						{<Dropdown className="mt-3 mb-3">
							<h5>Процессор:</h5>
							<Dropdown.Toggle style={{ "width": "100%" }} className="btn-info">
								{localProcessor.name || "Выберите процессор"}
							</Dropdown.Toggle>
							<Dropdown.Menu>
								{(isProcessorsLoading) && processor.map(category =>
									renderCategory(category, localProcessor, setLocalProcessor, setLocalProcessorPrice)
								)}
							</Dropdown.Menu>
						</Dropdown>}

						{<Dropdown className="mt-3 mb-3">
							<h5>Видеокарта {(localVideocard.memoryValue === 0) && "(встройка)"}:</h5>
							<Dropdown.Toggle style={{ "width": "100%" }} className="btn-info">
								{localVideocard.name || "Выберите видеокарту"}
							</Dropdown.Toggle>
							<Dropdown.Menu>
								{(isVideocardsLoading) && videocard.map(category =>
									(category.price !== 0 || category.name === localProcessor.integratedVideoCardName) &&
									renderCategory(category, localVideocard, setlocalVideocard, setlocalVideocardPrice)
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
							<label
								className="custom-control-label"
								htmlFor="customSwitch1"
							>
								использовать SSD
							</label>
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
							step={256}
							min={256}
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
						<h5>Корпус:</h5>
						<Button
							style={{ "width": "100%" }}
							className="mt-1 btn-info"
							onClick={() => setCaseVisible(true)}
						>
							{localComputerCase.name || "Выбрать корпус"}

						</Button>
						<p></p>
						<Button
							style={{ "width": "100%" }}
							className="mt-1"
							variant={"outline-dark"}
							onClick={handleDefault}
						>
							Сбросить конфигурацию
						</Button>

						<SelectCaseModal
							show={caseVisible}
							setVisible={setCaseVisible}
							setLocalComputerCase={setLocalComputerCase}
							isComputerCasesLoading={isComputerCasesLoading}
							computerCase={computerCase}
							setComputerCasePrice={setLocalComputerCasePrice}
							count={count}
							setComputerCaseData={setComputerCaseData}
						/>
						<hr />
						<h2>{totaHookPrice} Руб.</h2>
						<Button
							style={{ "width": "100%" }}
							className="btn-info"
							onClick={addDevice}
							disabled={isSubmitting}
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
									<>
										<ConfigDeviceCard
											userId={userId}
											getUserConfigDevices={getUserConfigDevices}
											deleteUserConfigDeviceApi={deleteUserConfigDevice}
											userConfigDevices={userConfigDevices}
											createOrderProcessingData={createOrderProcessingData}
											page="konfigurator"
										/>
										<Pages
											isRequestDataLoading={isUserConfigDeviceLoading}
											count={configCount}
											setRequestData={getUserConfigDevices}
											userId={userId}
										/>
									</>
						}
					</div>
				</div>
			</div>

		</>
	);
};

export default Configurator;

