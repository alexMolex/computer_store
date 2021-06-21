import React, { useEffect } from 'react';
import { Spinner, Row, Image } from 'react-bootstrap';
import { useParams } from 'react-router';

import Header from '../../components/header/HeaderContainer';


const renderContent = (computer) => {
	return (
		<div className="thumbnail">
			<div className="row">
				<div className="col-md-6">
					<Image width={300} height={300} src={process.env.REACT_APP_API_URL + computer.img} alt={computer.name} className="img-thumbnail" />
				</div>
				<div className="col-md-6">
					{renderField(computer)}
				</div>
			</div>
			<div className="caption-full">
				<h4 className="float-right">Руб. {computer.price}</h4>
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



const Computers = ({ setOneDeviceData, isOneDeviceLoading, computer }) => {

	const params = useParams()

	useEffect(() => {
		setOneDeviceData(params.id)
	}, [setOneDeviceData, params.id])

	console.log(computer);

	return (
		<div className="view-container ">
			<Header />
			<div className="container mt-3">
				<div className="row">
					<div className="col-md-9">
						{(!isOneDeviceLoading) ? <Spinner animation="border" /> : renderContent(computer)}
					</div>
					<div className="col-md-3">
						{'сайдбар'}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Computers;