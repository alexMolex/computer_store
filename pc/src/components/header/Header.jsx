import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import ConfirmModal from "../modals/ConfirmationDialog";


const Header = React.memo(({
	isAuth,
	role,
	setAuthUserData,
	setLogoutUser,
	getBasketDevicesData,
	basketId,
	basketReducerData,
	count,
	compareDevices
}) => {

	const [confirmVisible, setConfirmVisible] = useState(false);


	useEffect(() => {
		setAuthUserData()
		if (isAuth) getBasketDevicesData(basketId)
	}, [setAuthUserData, isAuth, basketId, getBasketDevicesData])



	let basketDeviceCount = basketReducerData.length + count


	return (
		<div>
			<Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
				<Container>


					<Navbar.Brand>

						React site
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="nav ml-auto pt-1" >
							<NavLink className="nav-link" to="/" exact>Главная</NavLink>
							<NavLink className="nav-link" to="/konfigurator" >Конфигуратор</NavLink>
							<NavLink className="nav-link" to="/comparison" >Сравнение
								{(compareDevices.length !== 0) &&
									<span className="badge badge-secondary badge-pill ml-1">
										{compareDevices.length}
									</span>}
							</NavLink>
							<NavLink className="nav-link" to="/home-assembling" >Отзывы</NavLink>
							{isAuth ?
								<>
									<NavLink className="nav-link" to="/basket" >
										Корзина
										{(basketDeviceCount !== 0) && <span className="badge badge-secondary badge-pill ml-1">
											{basketDeviceCount}
										</span>}
									</NavLink>
									<ConfirmModal
										show={confirmVisible}
										setVisible={setConfirmVisible}
										confirm={setLogoutUser}
										headerText={"Вы действительно хотите выйти?"}
										confirmText={"Разлогиниться"}
										unConfirmText={"Отмена"}
									/>
									<Button
										className="nav-link ml-2 pt-1 pb-1"
										variant="outline-info"
										onClick={() => setConfirmVisible(true)}
									>
										выйти
									</Button>
								</> :
								<NavLink className="nav-link pt-0 pb-1" to="/login" ><Button variant="outline-info">Войти</Button></NavLink>
							}
							{
								(role === "ADMIN" && isAuth) ?
									<NavLink className="nav-link pt-0 pb-1" to="/adminPanel" ><Button variant="outline-info">Админка</Button></NavLink> :
									<></>
							}

						</Nav>

					</Navbar.Collapse>

				</Container>
			</Navbar>
		</div>
	);
})

export default Header;