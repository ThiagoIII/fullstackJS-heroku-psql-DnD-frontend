import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { GoogleLogout } from 'react-google-login'
import { SignedStatusContext } from '../context/signedStatusContext/signedStatusContext'
import { logoutDashboard, logoutFailure } from '../helpers/handleLogOut'
import FormsAndLists from '../components/FormsAndLists'

const Dashboard = () => {
    const {
        state: { isLoggedIn, userInfo },
        dispatch
    } = useContext(SignedStatusContext)

    return (
        <>
            {!isLoggedIn ? (
                <Redirect to={{ pathname: '/login' }} />
            ) : (
                <section id="dashboard">
                    <div id="logoutButtons">
                        <GoogleLogout
                            className="logoutbutton"
                            clientId="416809222050-fee34iiph6k9lmmis8qgse4a0g2gs6lr.apps.googleusercontent.com"
                            buttonText="Logout"
                            onLogoutSuccess={dispatch =>
                                logoutDashboard(dispatch)
                            }
                            onFailure={logoutFailure}
                        />
                        <button
                            className="logoutbutton"
                            id="logoutnormal"
                            type="button"
                            name="button"
                            onClick={() => logoutDashboard(dispatch)}
                        >
                            Logout
                        </button>
                    </div>
                    {userInfo !== {} && userInfo !== null ? (
                        <>
                            <h1>Welcome,{userInfo.name} </h1>
                            {userInfo.image && (
                                <img
                                    src={userInfo.image}
                                    alt={`${userInfo.name}ProfileImage`}
                                />
                            )}
                        </>
                    ) : (
                        <h1>Getting your name!</h1>
                    )}

                    <FormsAndLists userId={userInfo.id} />
                </section>
            )}
        </>
    )
}

export default Dashboard
