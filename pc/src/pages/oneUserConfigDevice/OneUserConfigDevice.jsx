import React, { useEffect } from 'react';
import { Spinner, Image } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

import Header from '../../components/header/HeaderContainer';




const OneUserConfigDevice = ({ getOneUserConfigDevice, isOneUserConfigDeviceLoading, configDevice }) => {

	const params = useParams()

	useEffect(() => {
		getOneUserConfigDevice(params.id)
	}, [getOneUserConfigDevice, params.id])


	return (
		<div className="view-container ">
			<Header />
			<div className="container mt-3">
				<div className="row">
					<div className="col-md-9">
						{(!isOneUserConfigDeviceLoading) ? <Spinner animation="border" /> :
							<div className="thumbnail">
								<div className="row">
									<div className="col-md-6">
										<Link to="/">
											<button
												className="btn btn-info mt-2 mb-2"
											>
												<h4>Вернуться назад</h4>
											</button>
										</Link>

										<Image
											width={300}
											height={300}
											src={process.env.REACT_APP_API_URL + configDevice.computer_case.img}
											alt={configDevice.name}
											className="img-thumbnail"
										/>
									</div>
									<div className="col-md-6">
										Config
									</div>
								</div>
								<div className="caption-full">


								</div>
							</div>
						}
					</div>
				</div>
			</div>
		</div>
	);
};




export default OneUserConfigDevice;