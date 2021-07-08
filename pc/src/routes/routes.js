import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router';

import Layout from '../pages/layout/LayoutContainer';
import Configurator from '../pages/configurator/ConfiguratorContainer';
import ComputersContainer from '../pages/computers/ComputersContainer.jsx';
import Header from '../components/header/HeaderContainer';
const AdminPanelContainer = lazy(() => import('../pages/adminPanel/AdminPanelContainer.jsx'));
const Contacts = lazy(() => import('../pages/contacts/Contacts.jsx'));
const Basket = lazy(() => import('../pages/basket/BasketContainer.jsx'));
const AuthenticationContainer = lazy(() => import('../pages/authentication/AuthenticationContainer.jsx'));



const Routes = () => {
	return (
		<Switch>
			<Route path="/" component={Layout} exact />
			<Route path="/konfigurator" component={Configurator} />
			<Route path="/computers/:id" component={ComputersContainer} />
			<Route path="/catigories/:id" component={Layout} />
			<Suspense fallback={
				<>
					<Header />
					<div className="container">Загрузка...</div>
				</>
			}>
				<Route path="/contacts" component={Contacts} />
				<Route path="/basket" component={Basket} />
				<Route path="/home-assembling" component={Contacts} />
				<Route path="/adminPanel" component={AdminPanelContainer} />
				<Route path="/login" component={AuthenticationContainer} />
				<Route path="/register" component={AuthenticationContainer} />
			</Suspense>

		</Switch>
	);
};

export default Routes;