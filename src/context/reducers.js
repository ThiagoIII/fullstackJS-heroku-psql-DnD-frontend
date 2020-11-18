export const signedStatusReducer = (state, action) => {
	switch (action.type){
		case 'CHANGESIGNEDSTATUS':
			return {...state, isLoggedIn: action.payload}
		default:
			return state
	}
}