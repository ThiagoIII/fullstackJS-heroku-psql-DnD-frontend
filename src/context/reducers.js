export const signedStatusReducer = (state, action) => {
	switch (action.type){
		case 'CHANGESIGNEDSTATUS':
			return action.payload
		default:
			return state
	}
}
