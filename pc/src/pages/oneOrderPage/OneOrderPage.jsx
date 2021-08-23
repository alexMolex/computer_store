import React, { useEffect } from 'react';
import { Spinner, Image } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

import Header from '../../components/header/HeaderContainer';




const OneOrderPage = ({ getOneOrderProcessingData, isOneOrderDeviceLoading, order }) => {

	const params = useParams()

	useEffect(() => {
		getOneOrderProcessingData(params.id)
	}, [getOneOrderProcessingData, params.id])


	return (
		<div className="view-container ">
			<Header />
			<div className="container mt-3">
				<div className="row">
					<div className="col-md-9">
						{(!isOneOrderDeviceLoading) ? <Spinner animation="border" /> :
							<div className="thumbnail">
								<div className="row">
									<div className="col-md-6">
										<Link to="/adminPanel">
											<button
												className="btn btn-info mt-2 mb-2"
											>
												<h4>Вернуться назад</h4>
											</button>
										</Link>

										<Image
											width={300}
											height={300}
											src={process.env.REACT_APP_API_URL + order.order[0].computer_case.img}
											alt={order.name}
											className="img-thumbnail"
										/>
									</div>
									<div className="col-md-6">
										gffgfgdf
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




export default OneOrderPage;