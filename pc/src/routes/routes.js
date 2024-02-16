import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router';
import {BrowserRouter as Router} from 'react-router-dom';
import Layout from '../pages/layout/LayoutContainer';
import Configurator from '../pages/configurator/ConfiguratorContainer';
import ComputersContainer from '../pages/computers/ComputersContainer.jsx';
import Header from '../components/header/HeaderContainer';
const AdminPanelContainer = lazy(() => import('../pages/adminPanel/AdminPanelContainer.jsx'));
const Contacts = lazy(() => import('../pages/contacts/Contacts.jsx'));
const OneOrder = lazy(() => import('../pages/oneOrderPage/OneOrderPageContainer'));
const OneConfigDevice = lazy(() => import('../pages/oneUserConfigDevice/OneUserConfigDeviceContainer'));
const Comparison = lazy(() => import('../pages/comparison/ComprasionContainer'));
const Basket = lazy(() => import('../pages/basket/BasketContainer.jsx'));
const AuthenticationContainer = lazy(() => import('../pages/authentication/AuthenticationContainer.jsx'));



const AllRoutes = () => {
	return (
		<Router>
			
		<Routes>
			<Route path="/" element={<Layout/>} />
			<Route path="konfigurator" element={<Configurator/>} />
			<Route path="computers/:id" element={<ComputersContainer/>} />
			{/* <Route path="/device" element={Layout} /> */}
			{/* <Suspense fallback={
				<>
					<Header />
					<div className="container"><h1 className="d-flex justify-content-center">Загрузка...</h1> </div>
				</>
			}>
				<Route path="comparison" element={<Comparison/>} />
				<Route path="basket" element={<Basket/>} />
				<Route path="home-assembling" element={<Contacts/>} />
				<Route path="adminPanel" element={<AdminPanelContainer/>} />
				<Route path="login" element={<AuthenticationContainer/>} />
				<Route path="register" element={<AuthenticationContainer/>} />
				<Route path="oneOrder/:id" element={<OneOrder/>} />
				<Route path="oneConfig/:id" element={<OneConfigDevice/>} />

			</Suspense> */}

		</Routes>
		</Router>
	);
};

export default AllRoutes;