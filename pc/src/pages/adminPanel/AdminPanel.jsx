import React, { useState, useEffect } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

import Header from '../../components/header/HeaderContainer'
import CreateBrand from './modals/CreateBrand';
import CreateVideocard from './modals/CreateVideocard';
import CreateProcessor from './modals/CreateProcessor';
import CreateDevice from './modals/CreateDevice';
import CreateType from './modals/CreateType';
import CreateCase from './modals/CreateCase';
import OrdersPopup from "../../components/modals/UserOrdersPopup";
import IsCreateDeviceFailer from "../../components/isCreateFailer/IsCreateFailer";

const AdminPanel = ({
	setCreateDeviceType,
	setCreateDeviceBrand,
	setCreateDeviceProcessor,
	setCreateDeviceVideocard,
	setCreateComputerCase,
	brandState,
	typeState,
	processorState,
	videocardState,
	computerCaseData,
	isComputerCasesLoading,
	setDeviceTypeData,
	setDeviceBrandData,
	setDeviceProcessorData,
	setDeviceVideocardData,
	setComputerCaseData,
	setCreateDevice,
	isBrandLoading,
	isTypeLoading,
	isVideocardsLoading,
	isProcessorsLoading,
	role,
	isOrdersListLoading,
	isCreateDeviceFaler,
	allOrdersData,
	count,
	orderCount,
	updateOrderStatusData,
	setUpdateProcessorPriceData,
	setUpdateVideocardPriceData,
	setUpdateComputerCasePriceData,
}) => {

	const [brandVisible, setBrandVisible] = useState(false)
	const [typeVisible, setTypeVisible] = useState(false)
	const [processorVisible, setProcessorVisible] = useState(false)
	const [videocardVisible, setVideocardVisible] = useState(false)
	const [caseVisible, setCaseVisible] = useState(false)
	const [deviceVisible, setDeviceVisible] = useState(false)
	const [userOrdersPopupVisible, setUserOrdersPopupVisible] = useState(false)

	useEffect(() => {
		setDeviceBrandData()
		setDeviceTypeData()
		setDeviceProcessorData()
		setDeviceVideocardData()
		setComputerCaseData()
	}, [
		setDeviceTypeData,
		setDeviceBrandData,
		setDeviceProcessorData,
		setDeviceVideocardData,
		setComputerCaseData,
	])

	// if (role !== "ADMIN") { return <Redirect to={'/'} /> }



	return (
		<div >
			<Header />

			<Container className="d-flex flex-column" >
				<IsCreateDeviceFailer
					isCreateFailer={isCreateDeviceFaler}
					addType={'устройства'}
				/>
				<Button
					className="mb-3 mt-3 btn-info"
					onClick={() => setUserOrdersPopupVisible(true)}
				>
					<h5 className="pt-2 pb-1">
						Список заказов
						<span className="badge badge-secondary badge-pill ml-2">{orderCount}</span>
					</h5>
				</Button>
				<Button
					variant={'outline-dark'}
					className="mt-2 pt-4"
					onClick={() => setTypeVisible(true)}
				>
					Добавить тип
				</Button>
				<Button
					variant={'outline-dark'}
					className="mt-2 pt-4"
					onClick={() => setBrandVisible(true)}
				>
					Добавить бренд
				</Button>
				<Button
					variant={'outline-dark'}
					className="mt-2 pt-4"
					onClick={() => setProcessorVisible(true)}
				>
					Добавить процессор
				</Button>
				<Button
					variant={'outline-dark'}
					className="mt-2 pt-4"
					onClick={() => setVideocardVisible(true)}
				>
					Добавить видеокарту
				</Button>
				<Button
					variant={'outline-dark'}
					className="mt-2 pt-4"
					onClick={() => setCaseVisible(true)}
				>
					Добавить корпус
				</Button>
				<Button
					variant={'outline-dark'}
					className="mt-2 pt-4"
					onClick={() => setDeviceVisible(true)}
				>
					Добавить устройство
				</Button>

				<CreateBrand
					setDeviceBrandData={setDeviceBrandData}
					setCreateDeviceBrand={setCreateDeviceBrand}
					show={brandVisible}
					onHide={() => setBrandVisible(false)}
				/>
				<CreateDevice
					count={count}
					setComputerCaseData={setComputerCaseData}
					computerCaseData={computerCaseData}
					isComputerCasesLoading={isComputerCasesLoading}
					typeState={typeState}
					brandState={brandState}
					processorState={processorState}
					videocardState={videocardState}
					show={deviceVisible}
					setCreateDevice={setCreateDevice}
					isTypeLoading={isTypeLoading}
					isBrandLoading={isBrandLoading}
					isVideocardsLoading={isVideocardsLoading}
					isProcessorsLoading={isProcessorsLoading}
					onHide={() => setDeviceVisible(false)}
				/>
				<CreateType
					setCreateDeviceType={setCreateDeviceType}
					setDeviceTypeData={setDeviceTypeData}
					show={typeVisible}
					onHide={() => setTypeVisible(false)}
				/>
				<CreateCase
					setCreateComputerCase={setCreateComputerCase}
					setComputerCaseData={setComputerCaseData}
					show={caseVisible}
					onHide={() => setCaseVisible(false)}
					setUpdateComputerCasePriceData={setUpdateComputerCasePriceData}
					computerCaseData={computerCaseData}
					isComputerCasesLoading={isComputerCasesLoading}
				/>
				<CreateVideocard
					setCreateDeviceVideocard={setCreateDeviceVideocard}
					setDeviceVideocardData={setDeviceVideocardData}
					show={videocardVisible}
					onHide={() => setVideocardVisible(false)}
					setUpdateVideocardPriceData={setUpdateVideocardPriceData}
					videocardState={videocardState}
					isVideocardsLoading={isVideocardsLoading}
				/>
				<CreateProcessor
					setDeviceProcessorData={setDeviceProcessorData}
					setCreateDeviceProcessor={setCreateDeviceProcessor}
					show={processorVisible}
					onHide={() => setProcessorVisible(false)}
					setUpdateProcessorPriceData={setUpdateProcessorPriceData}
					processorState={processorState}
					isProcessorsLoading={isProcessorsLoading}
					videocardState={videocardState}
				/>
				<OrdersPopup
					show={userOrdersPopupVisible}
					setVisible={setUserOrdersPopupVisible}
					isOrdersListLoading={isOrdersListLoading}
					ordersData={allOrdersData}
					isAdminPage={true}
					updateOrderStatusData={updateOrderStatusData}
				/>
			</Container>
		</div>
	);
};

export default AdminPanel;