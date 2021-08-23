import React from 'react';

import useTotalDevicePrice from "../../hooks/useTotalDevicePrice";


const DevicePrice = ({
	localProcessorPrice,
	localVideocardPrice,
	localComputerCasePrice,
	ssd,
	storageVolume,
	ram,
	overclocking,
	className,
	price
}) => {



	const { totaHookPrice } = useTotalDevicePrice({
		localProcessorPrice,
		localVideocardPrice,
		localComputerCasePrice,
		ssd,
		storageVolume,
		ram,
		overclocking,
		price,
	})


	return (
		<h4 className={className}>
			Руб. {totaHookPrice}
		</h4>
	)

}


export default DevicePrice;