import { connect } from 'react-redux';
import { setAuthUserData, setLogoutUser, getBasketDevicesData } from '../../redux/actions/actions';

import Header from './Header'




const mapState = state => {
	return {
		isAuth: state.checkAuthReducer.isAuth,
		role: state.checkAuthReducer.role,
		basketId: state.checkAuthReducer.id,
		basketReducerData: state.basketReducer.data,
		count: state.userConfigDevice.count,
<<<<<<< HEAD
		compareDevices: state.comparisonReducer.compareDevicesQueue,

=======
>>>>>>> 8452915f270c1f8ce6f21e84f93ee16b590c5510
	}
}


const mapDispatch = {
	setAuthUserData,
	setLogoutUser,
	getBasketDevicesData
}


export default connect(mapState, mapDispatch)(Header);