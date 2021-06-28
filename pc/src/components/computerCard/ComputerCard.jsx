import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const ComputerCard = ({
	isAuth,
	device,
	is200Code,
	count,
	basketId,
	createBasketDevicesData,
	basketDevicesIds,
	isBasketDevicesLoading,
	getBasketDevicesData
}) => {

	const isBasketDeviceIdSame = (pc) => {
		return basketDevicesIds.some(id => id === pc)
	}


	const renderDescription = (text, limit) => {
		if (text.length <= limit) return text;
		text = text.slice(0, limit);
		return text + "...";
	}

	return (
		<div>
			<div className="books row mb-2 pt-4" >
				{count === 0 && <h2>нет ничего</h2>}
				{!is200Code ?
					<Spinner animation="border" /> :
					device.map(pc =>
						<div className="col-sm-4 col-lg-4 col-md-4 book-list " key={pc.id}>
							<div className="thumbnail ">
								<Link to={`/computers/${pc.id}`}>
									<img
										src={process.env.REACT_APP_API_URL + pc.img}
										alt="pc"
										className="img-thumbnail pc-image"
									/>
								</ Link>
								<div className="caption">
									<h4 className="pull-right">Pуб. {pc.price}</h4>
									<h4>
										<Link style={{ color: '#128496' }} to={`/computers/${pc.id}`}>
											{pc.name}
										</Link>
									</h4>
									<p> {renderDescription("lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem loremlorem lorem lorem lorem", 80)}</p>
									<p className="item-button float-right">
										{!isAuth && !isBasketDevicesLoading ?
											<Link to="/login" className="btn btn-info">
												Заказать
											</Link> :
											<button
												disabled={isBasketDeviceIdSame(pc.id)}
												onClick={
													() => createBasketDevicesData(basketId, pc.id)
														.then(() => getBasketDevicesData(basketId))
												}
												className="btn btn-info"
											>
												{(isBasketDeviceIdSame(pc.id)) ? "В корзине" : "Заказать"}
											</button>}
										<Link
											className="btn btn-default"
											to={`/computers/${pc.id}`}
										>
											More info
										</Link>
									</p>
								</div>
							</div>
						</div >
					)}
			</div>
		</div>
	);
}



export default ComputerCard;