export const handleChangeSignedStatus = (dispatch, statusUser) => {
	dispatch({
			type: 'CHANGESIGNEDSTATUS',
			payload: statusUser
		})
}
