import React, { useEffect } from 'react';
import { useLocation } from "react-router";


// import Computers from '../computers/Computers.jsx';
import Header from '../../components/header/HeaderContainer'
import Sidebar from '../../components/sidebar/Sidebar'
import ComputerCardContainer from '../../containers/ComputerCardContainer'
import Pages from '../../components/pagination/PaginationContainer'
import IsCreateOrderFailer from "../../components/isCreateFailer/IsCreateOrderFailerContainer";


const Layout = ({
	basketId,
	setDeviceTypeData,
	setDeviceBrandData,
	setDeviceProcessorData,
	setDeviceVideocardData,
	getUserOrdersProcessingData,

}) => {

	useEffect(() => {
		getUserOrdersProcessingData(basketId)
		setDeviceTypeData()
		setDeviceBrandData()
		setDeviceProcessorData()
		setDeviceVideocardData()
	}, [
		basketId,
		getUserOrdersProcessingData,
		setDeviceTypeData,
		setDeviceBrandData,
		setDeviceProcessorData,
		setDeviceVideocardData
	])



	return (
		<div className="vew-container">
			<Header />
			<div className="container">
				<IsCreateOrderFailer />
				<div className="row">
					<div className="col-md-3">
						<Sidebar />
					</div>
					<div className="col-md-9">
						<ComputerCardContainer />
						<Pages />
					</div>
				</div>
			</div>
		</div>

	)
};

export default Layout;