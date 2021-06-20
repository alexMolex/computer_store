import React, { useEffect } from 'react';


// import Computers from '../computers/Computers.jsx';
import Header from '../../components/header/HeaderContainer'
import Sidebar from '../../components/sidebar/Sidebar'
import ComputerCardContainer from '../../containers/ComputerCardContainer'
import Pages from '../../components/pagination/PaginationContainer'


const Layout = ({ setDeviceTypeData, setDeviceBrandData, setDeviceProcessorData,
	setDeviceVideocardData }) => {

	useEffect(() => {
		setDeviceTypeData()
		setDeviceBrandData()
		setDeviceProcessorData()
		setDeviceVideocardData()
	}, [
		setDeviceTypeData,
		setDeviceBrandData,
		setDeviceProcessorData,
		setDeviceVideocardData
	])




	return (
		<div className="vew-container">
			<Header />
			<div className="container">
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