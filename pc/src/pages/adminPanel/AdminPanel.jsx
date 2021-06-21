import React, { useState, useEffect } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

import Header from '../../components/header/HeaderContainer'
import CreateBrand from './modals/CreateBrand';
import CreateVideocard from './modals/CreateVideocard';
import CreateProcessor from './modals/CreateProcessor';
import CreateDevice from './modals/CreateDevice';
import CreateType from './modals/CreateType';


const AdminPanel = ({
	setCreateDeviceType,
	setCreateDeviceBrand,
	setCreateDeviceProcessor,
	setCreateDeviceVideocard,
	brandState,
	typeState,
	processorState,
	videocardState,
	setDeviceTypeData,
	setDeviceBrandData,
	setDeviceProcessorData,
	setDeviceVideocardData,
	setCreateDevice,
	isBrandLoading,
	isTypeLoading,
	isVideocardsLoading,
	isProcessorsLoading,
	role,
}) => {

	const [brandVisible, setBrandVisible] = useState(false)
	const [typeVisible, setTypeVisible] = useState(false)
	const [processorVisible, setProcessorVisible] = useState(false)
	const [videocardVisible, setVideocardVisible] = useState(false)
	const [deviceVisible, setDeviceVisible] = useState(false)

	useEffect(() => {
		setDeviceBrandData()
		setDeviceTypeData()
		setDeviceProcessorData()
		setDeviceVideocardData()
	}, [setDeviceTypeData, setDeviceBrandData, setDeviceProcessorData, setDeviceVideocardData])

	if (role !== "ADMIN") { return <Redirect to={'/'} /> }


	return (
		<div >
			<Header />
			<Container className="d-flex flex-column" >
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
				<CreateVideocard
					setCreateDeviceVideocard={setCreateDeviceVideocard}
					setDeviceVideocardData={setDeviceVideocardData}
					show={videocardVisible}
					onHide={() => setVideocardVisible(false)}
				/>
				<CreateProcessor
					setDeviceProcessorData={setDeviceProcessorData}
					setCreateDeviceProcessor={setCreateDeviceProcessor}
					show={processorVisible}
					onHide={() => setProcessorVisible(false)}
				/>
			</Container>
		</div>
	);
};

export default AdminPanel;