import React, { useEffect, useState } from 'react';
import Header from '../../components/header/HeaderContainer';
import { Image, Row } from 'react-bootstrap';

import { getDeviceData } from "../../api/index";


const Basket = ({
	basketDevices,
	isBasketLoading,
	deleteBasketDevicesData,
	getBasketDevicesData,
	device,
	setDeviceData,
	is200Code,
	setOneDeviceData,
	setAuthUserData,
	basketId
}) => {



	const [ids, setIsd] = useState([])


	useEffect(() => {
		setDeviceData()
		basketDevices.basketDevicesIds.map(a => {
			return (
				getDeviceData.getOneDeviceForBasket(a).then(res => {
					const devices = res;
					setIsd(ids => [...ids, devices])
				})
			)
		});
	}, [basketDevices.basketDevicesIds, setDeviceData])


	const uniqueArray = ids.filter((thing, index) => {
		const _thing = JSON.stringify(thing);
		return index === ids.findIndex(obj => {
			return JSON.stringify(obj) === _thing;
		});
	});


	const isBasketEmpty = () => {
		if (basketDevices.data.length === 0) {
			return true
		}
	}


	return (
		<div >
			<Header />
			<div className="view-container">
				<div className="container">
					<div className="row">
						<div className="col-md-9">
							{(!is200Code) || (!isBasketLoading) || isBasketEmpty() ?
								<h2>Корзина пуста</h2> :
								uniqueArray.map(({ data }) => {
									return (
										<div className="thumbnail mt-4"
											key={data.id}
										>
											<div className="row">
												<div className="col-md-6">
													<Image width={300} height={300} src={process.env.REACT_APP_API_URL + data.img} alt={device.name} className="img-thumbnail" />
												</div>
												<div className="col-md-6">
													<Row className="d-flex flex-column m-3">
														<h1>Характеристики</h1>
														{/* {"описание" && device.info.map((info, index) =>
															<Row key={info.id} style={{ background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10 }}>
																{info.title}: {info.description}
															</Row>
														)} */}
													</Row>
												</div>
											</div>
											<div className="caption-full">
												<h4 className="float-right">Руб. {data.price}</h4>
												<h4>{data.name}</h4>
												<p>{data.description}</p>
											</div>
										</div>
									)
								})
							}
						</div>
						<div className="col-md-3"> Cайдбар </div>

					</div>
				</div>
			</div>
		</div>
	);
};



export default Basket;


// <button
// onClick={() =>
// deleteBasketDevicesData(basketDevice.id)
// 	.then(() =>
// getBasketDevicesData(basketDevice.basketId))
// }
// className="btn btn-info"
// >
// <h1> {device.name} удалить </h1>
// </button>

// basketDevices.data.map(basketDevice => {
// 	return (
// 		<div
// 			key={basketDevice.id}
// 		>
// 			{device.map(device => (
// 				<div
// 					key={device.name}
// 				>
// 					{(basketDevice.deviceId === device.id) &&
// 						<div className="thumbnail mt-4">
// 							<div className="row">
// 								<div className="col-md-6">
// 									<Image width={300} height={300} src={process.env.REACT_APP_API_URL + device.img} alt={device.name} className="img-thumbnail" />
// 								</div>
// 								{/* <div className="col-md-6">
// 		<Row className="d-flex flex-column m-3">
// 			<h1>Характеристики</h1>
// 			{"описание" && device.info.map((info, index) =>
// 				<Row key={info.id} style={{ background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10 }}>
// 					{info.title}: {info.description}
// 				</Row>
// 			)}
// 		</Row>
// 	</div> */}
// 							</div>
// 							<div className="caption-full">
// 								<h4 className="float-right">Руб. {device.price}</h4>
// 								<h4>{device.name}</h4>
// 								<p>{device.description}</p>
// 							</div>
// 						</div>
// 					}
// 				</div>
// 			))}
// 		</div>
// 	)
// })