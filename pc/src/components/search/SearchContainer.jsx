import { connect } from "react-redux";

import { serchComputers } from "../../redux/actions/actions";
import Search from "./Search";


const mapDispatch = {
	serchComputers,
}

const SearchContainer = connect(null, mapDispatch)(Search);

export default SearchContainer;