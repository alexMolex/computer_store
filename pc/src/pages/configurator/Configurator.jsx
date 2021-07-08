import React, { useEffect } from 'react';
import Header from '../../components/header/HeaderContainer';

import { createDevice, fetchDevices } from "../../api/index";

const Configurator = () => {

	useEffect(() => {
		fetchDevices(1)
	}, [])


	const addDevice = () => {
		const formData = new FormData()
		formData.append('price', 15600)
		formData.append('RAM', 12)
		formData.append('SSD', true)
		formData.append('storageVolume', 320)
		formData.append('overclocking', false)
		formData.append('userId', 1)
		formData.append('processorId', 1)
		formData.append('videocardId', 1)

		createDevice(formData).then((response) => console.log(response.data)
		)
	}

	return (
		<>
			<Header />
			<div className="container">
				Конфигуратор
				<button
					onClick={addDevice}
				>
					добавить устройство
				</button>
			</div>

		</>
	);
};

export default Configurator;
