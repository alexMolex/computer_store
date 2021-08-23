import { useState, useLayoutEffect, useCallback } from 'react';



const useTotalDevicePrice = ({
	localProcessorPrice,
	localVideocardPrice,
	localComputerCasePrice,
	ssd,
	storageVolume,
	ram,
	overclocking,
	price
}) => {

	const [totaHookPrice, setTotalPrice] = useState(0)
	const [storageCoefficient, setStorageCoefficient] = useState(0)
	const [overclokingCoefficient, setOverclokingCoefficient] = useState(1)


	const storagePriceChange = useCallback(() => {
		switch (true) {
			case storageVolume < 512 && !ssd:
				setStorageCoefficient(9);
				break;
			case storageVolume > 511 && storageVolume < 1024 && !ssd:
				setStorageCoefficient(5);
				break;
			case storageVolume >= 1024 && !ssd:
				setStorageCoefficient(3);
				break;
			case ssd:
				setStorageCoefficient(10);
				break;
			default:
				break;
		}
	}, [storageVolume, ssd])




	const overсlokingCoefficientChange = useCallback(() => {
		switch (true) {
			case overclocking:
				setOverclokingCoefficient(2);
				break;
			case !overclocking:
				setOverclokingCoefficient(1);
				break;
			default:
				break;
		}
	}, [overclocking])


	useLayoutEffect(() => {
		overсlokingCoefficientChange()
		storagePriceChange()
		setTotalPrice(
			price * overclokingCoefficient +
			localProcessorPrice +
			localVideocardPrice +
			localComputerCasePrice +
			ram * 400 +
			storageVolume * storageCoefficient
		)
	}, [
		price,
		overсlokingCoefficientChange,
		overclokingCoefficient,
		storagePriceChange,
		setTotalPrice,
		localProcessorPrice,
		localVideocardPrice,
		localComputerCasePrice,
		ram,
		storageVolume,
		storageCoefficient
	])

	return {
		totaHookPrice
	};
}

export default useTotalDevicePrice;