import { handleChangeSignedStatus } from '../context/actions'

export const logoutDashboard = (dispatch) => {
	alert('You will be logged out from Dashboard now.')
	localStorage.clear()
	handleChangeSignedStatus(dispatch, false)
}
export const logoutFailure = () => {
	alert('Failed in logout')
}