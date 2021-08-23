
import { connect } from "react-redux";

import IsCreateOrderFailer from "./IsCreateFailer";



const mapState = state => ({
	isCreateFailer: state.orderProcessing.isCreateOrderFailer,
	addType: "Заказа"
})



const IsCreateOrderFailerContainer = connect(mapState, null)(IsCreateOrderFailer);

export default IsCreateOrderFailerContainer;