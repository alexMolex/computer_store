// import * as R from 'ramda'


// export const getComputersById = (state, id) => {
// 	return state.computers[id]
// 	// R.prop(id, state.phones)
// }

// export const getActiveCategorieId = ownProps => R.path(['match', 'params', 'id'], ownProps)


// export const getCategories = state => {
// 	return R.values(state.catigories)
// }

// export const getComputers = (state, ownProps) => {
// 	const activeCategorieId = getActiveCategorieId(ownProps)
// 	const applySearch = item => R.contains(
// 		state.computerPage.search,
// 		R.prop('name', item)
// 	)
// 	const applyCategorie = item => R.equals(
// 		activeCategorieId,
// 		R.prop('categorieId', item)
// 	)
// 	const computers = R.compose(
// 		R.filter(applySearch),
// 		R.when(R.always(activeCategorieId), R.filter(applyCategorie)),
// 		R.map(id => getComputersById(state, id)),
// 	)(state.computerPage.ids)
// 	return computers
// }

// export const getRenderedComputersLength = state => state.computerPage.ids.length;
