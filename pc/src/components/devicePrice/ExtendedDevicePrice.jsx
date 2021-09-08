import React from 'react';

import useTotalDevicePrice from "../../hooks/useTotalDevicePrice";


const ExtendedDevicePrice = ({
	localProcessorPrice,
	localVideocardPrice,
	localComputerCasePrice,
	ssd,
	storageVolume,
	ram,
	overclocking,
	setDeviceData,
	totalPrice,
	setUpdateDevicePrice,
	deviceId,
	price,
	role
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
		<>
			{(totalPrice > totaHookPrice) ?
				<>
					<h6 className="mt-2">
						Цена снизилась на {totalPrice - totaHookPrice} руб
					</h6>
					<h6 ><s>{`Руб. ${totalPrice}`}</s></h6>
<<<<<<< HEAD
					<h4 className="mt-1">Руб. {totaHookPrice}</h4>
=======
					<h4 className="mt-1">
						Руб. {totaHookPrice}
					</h4>
>>>>>>> 8452915f270c1f8ce6f21e84f93ee16b590c5510
				</>
				:
				<h4 className="mt-2">
					Руб. {totaHookPrice}
				</h4>
			}

<<<<<<< HEAD
			{(role === "ADMIN") && (totalPrice !== totaHookPrice) &&
=======
			{(role === "ADMI") && (totalPrice !== totaHookPrice) &&
>>>>>>> 8452915f270c1f8ce6f21e84f93ee16b590c5510
				<>
					{(totalPrice < totaHookPrice) && <h6 ><s>{`Руб. ${totalPrice}`}</s></h6>}
					<button
						className="btn-info btn"
						onClick={() => setUpdateDevicePrice(deviceId, totaHookPrice).then(() => setDeviceData())}
					>
						Изменить цену
					</button>

				</>
			}
		</>
	)

}


export default ExtendedDevicePrice;