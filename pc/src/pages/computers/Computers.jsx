import React, { useEffect } from 'react';
import { Spinner, Row, Image } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

import Header from '../../components/header/HeaderContainer';
import DevicePrice from "../../components/devicePrice/DevicePrice";



const Computers = ({ setOneDeviceData, isOneDeviceLoading, computer }) => {

	const params = useParams()

	useEffect(() => {
		setOneDeviceData(params.id)
	}, [setOneDeviceData, params.id])


	return (
		<div className="view-container ">
			<Header />
			<div className="container mt-3">
				{!computer && isOneDeviceLoading ? <h2>Такого устройства нет</h2> : <div className="row">
					<div className="col-md-9">
						{(!isOneDeviceLoading) ? <Spinner animation="border" /> : renderContent(computer)}
					</div>
					<div className="col-md-3">
						<div className="caption-full">

							<button
								className="btn btn-info mt-2"
							>
								<h3>в корзину</h3>
							</button>
						</div>

					</div>
				</div>}
			</div>
		</div>
	);
};

const renderContent = (computer) => {
	return (
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

					<Image width={300} height={300} src={process.env.REACT_APP_API_URL + computer.computer_case.img} alt={computer.name} className="img-thumbnail" />
				</div>
				<div className="col-md-6">
					{renderField(computer)}
				</div>
			</div>
			<div className="caption-full">
				<DevicePrice
					localProcessorPrice={computer.processor.price}
					localVideocardPrice={computer.videocard.price}
					localComputerCasePrice={computer.computer_case.price}
					ssd={computer.SSD}
					storageVolume={computer.storageVolume}
					ram={computer.RAM}
					overclocking={computer.overclocking}
					price={computer.price}
					className="float-right"
				/>

				<h4>{computer.name}</h4>
				<p>{computer.description}</p>
			</div>
		</div>
	)
}


const renderField = (computer) => {

	return (
		<Row className="d-flex flex-column m-3">
			<h1>Характеристики</h1>
			{computer.info.map((info, index) =>
				<Row key={info.id} style={{ background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10 }}>
					{info.title}: {info.description}
				</Row>
			)}
		</Row>
	)
}



export default Computers;