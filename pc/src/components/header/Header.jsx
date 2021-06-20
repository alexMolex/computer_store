import React, { useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


const Header = ({ isAuth, role, setAuthUserData, setLogoutUser, getBasketDevicesData, basketId }) => {


	useEffect(() => {
		setAuthUserData()
			.then(() => getBasketDevicesData(basketId))
	}, [setAuthUserData, basketId, getBasketDevicesData])


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
							<NavLink className="nav-link" to="/contacts" >Контакты</NavLink>
							<NavLink className="nav-link" to="/home-assembling" >Сборка на дом</NavLink>
							{isAuth ?
								<React.Fragment>
									<NavLink className="nav-link" to="/basket" >Корзина</NavLink>

									<Button
										className="nav-link ml-2 pt-1 pb-1"
										variant="outline-info"
										onClick={() => setLogoutUser()}
									>
										выйти
									</Button>
								</React.Fragment> :
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
}

export default Header;