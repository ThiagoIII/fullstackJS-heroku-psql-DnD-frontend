import React from 'react'
import handleDashboardRegister from '../../helpers/handleDashboardRegister'

const CQform = ({ opt, userId, reload }) => {
    return (
        <>
            <h5>
                {`Register your ${opt} here! Please no whitespaces at the beginning
                or at the end, thank you!`}
            </h5>
            <form
                onSubmit={e => handleDashboardRegister(e, opt, userId, reload)}
            >
                <label htmlFor={`${opt}name`}>How the {opt} is called?</label>
                <br></br>

                <input
                    id={`${opt}name`}
                    type="text"
                    name={`${opt}name`}
                    pattern="\S(.*\S)?" //At least one non-whitepace char and no whitespaces at the beginning or at the end
                    required
                />
                <br></br>

                <label htmlFor={`${opt}history`}>
                    History of the {opt}, please.
                </label>
                <br></br>

                <input
                    id={`${opt}history`}
                    type="text"
                    name={`${opt}history`}
                    pattern="\S(.*\S)?" // Same as before
                    required
                />
                <br></br>

                <button type="submit">Submit</button>
            </form>
            <span id={`${opt}infomessage`}></span>
        </>
    )
}

export default React.memo(CQform)
