export const signedStatusReducer = (state, action) => {
	switch (action.type){
		case 'CHANGESIGNEDSTATUS':
			return {...state, signedStatus: action.payload}
		default:
			return state
	}
}