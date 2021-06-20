import { connect } from 'react-redux';
import { setAuthUserData, setLogoutUser, getBasketDevicesData } from '../../redux/actions/actions';

import Header from './Header'




const mapState = state => {
	return {
		isAuth: state.checkAuthReducer.isAuth,
		role: state.checkAuthReducer.role,
		basketId: state.checkAuthReducer.id,
	}
}


const mapDispatch = {
	setAuthUserData,
	setLogoutUser,
	getBasketDevicesData
}


export default connect(mapState, mapDispatch)(Header);