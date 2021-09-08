import React from "react"
import { Button, Image, Modal, Row } from 'react-bootstrap';

import Pages from "../pagination/OtherPagination";
import ZoomPfoto from "./ZoomPfoto";
import useSelectModalItem from "../../hooks/useSelectModalItem";

const SelectCaseModal = ({
	show,
	setVisible,
	setLocalComputerCase,
	isComputerCasesLoading,
	computerCase,
	setComputerCasePrice,
	count,
	setComputerCaseData,
}) => {

	const [[isModalVisible, setIsModalVisible], selectedItem, expandModal] = useSelectModalItem('')


	return (
		<Modal
			show={show}
			onHide={() => setVisible(false)}
			size="lg"
			centered
			style={{ overflowY: "scroll" }}
		>
			<Modal.Header closeButton>
				<Modal.Title>
					Выбрать корпус
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				{(isComputerCasesLoading) && computerCase.map((Case) => (
					<div key={Case.id}>
						<div className="thumbnail mt-2 shadow p-1 mb-1 bg-white rounded"
							key={Case.id}
						>
							<div className="row">
								<div className="col-md-5">
									<Image
										width={250}
										height={250}
										src={process.env.REACT_APP_API_URL + Case.img}
										alt={Case.name}
										onClick={() => expandModal(Case)}
										className="img-thumbnail pointer"
									/>
								</div>
								<ZoomPfoto
									show={isModalVisible}
									setVisible={setIsModalVisible}
									photo={selectedItem}
								/>
								<div className="col-md-7">
									<Row className="d-flex flex-column mb-2 mr-3 ml-2 mt-0">
										<h4 >{Case.name}</h4>
										<h2 className="mb-3">{Case.price} Руб.</h2>
										<Button
											className="mt-3"
											variant={"outline-dark"}
											onClick={() => {
												setLocalComputerCase(Case);
												setComputerCasePrice(Case.price)
												setVisible(false)
											}}
										>
											Выбрать
										</Button>
									</Row>
								</div>
							</div>
						</div>
					</div>
				))}
				<Pages
					isRequestDataLoading={isComputerCasesLoading}
					count={count}
					setRequestData={setComputerCaseData}
				/>
			</Modal.Body>
		</Modal>
	)
}

export default SelectCaseModal