export const handleChangeSignedStatus = (dispatch, signedStatus) => {
	dispatch({
			type: 'CHANGESIGNEDSTATUS',
			payload: signedStatus
		})
}