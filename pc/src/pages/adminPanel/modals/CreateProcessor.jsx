import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';




const CreateProcessor = ({ show, onHide, setCreateDeviceProcessor, setDeviceProcessorData }) => {

	const [value, setValue] = useState('')

	function handleSubmit(event) {
		event.preventDefault()
		setCreateDeviceProcessor({ name: value })
			.then(data => {
				setDeviceProcessorData()
				setValue('')
				onHide()
			})
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
					Добавить процессор
        </Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Form.Control
						value={value}
						onChange={event => setValue(event.target.value)}
						placeholder={'Введите название процессора'}
					/>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
				<Button variant="outline-success" onClick={handleSubmit}>Добавить</Button>
			</Modal.Footer>
		</Modal>
	);
}


export default CreateProcessor;