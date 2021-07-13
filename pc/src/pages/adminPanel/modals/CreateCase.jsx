import React, { useEffect, useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';




const CreateCase = ({ show, onHide, setCreateComputerCase, setComputerCaseData }) => {


	const [name, setName] = useState("");
	const [price, setPrice] = useState("");
	const [file, setFile] = useState(null);



	const addCase = () => {
		const formData = new FormData()
		formData.append('name', name)
		formData.append('price', price)
		formData.append('img', file)

		setCreateComputerCase(formData).then(data => {
			setComputerCaseData()
			onHide()
			setName("")
			setPrice("")
			setFile(null)
			alert('Комп добавлен')
		})
	}


	const selectFile = e => {
		setFile(e.target.files[0]);
	}

	return (
		<Modal
			show={show}
			onHide={onHide}
			size="lg"
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					Добавить корпус
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Form.Control
						value={name}
						placeholder={'Введите название корпуса'}
						onChange={e => setName(e.target.value)}
					/>
					<Form.Control
						className="mt-2"
						placeholder="Введите цену устройтсва"
						type="number"
						value={price}
						onChange={e => setPrice(Number(e.target.value))}
					/>
					<h2>Выберите изобрадение корпуса</h2>
					<Form.Control
						className="mt-2"
						type="file"
						onChange={selectFile}
					/>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
				<Button variant="outline-success" onClick={addCase}>Добавить</Button>
			</Modal.Footer>
		</Modal>
	);
}


export default CreateCase;