import React from 'react'
import api from '../services/api'

const UserList2 = props => {
    const [listLocal, setListLocal] = React.useState(undefined)

    const { opt, userId: id } = props

    let list = localStorage[`${opt}`]
    let listFinal = list !== undefined ? JSON.parse(list) : listLocal

    React.useEffect(() => {
        if (list === undefined) {
            api.post('/fetchUserData', { id }).then(res => {
                if (opt === 'char') {
                    localStorage[`${opt}`] = JSON.stringify(res.data[0])
                    setListLocal(res.data[0])
                } else {
                    localStorage[`${opt}`] = JSON.stringify(res.data[1])
                    setListLocal(res.data[1])
                }
            })
        }
    }, [id, list, opt])

    return (
        <>
            <h3>Your {opt[0].toUpperCase() + opt.slice(1)}s</h3>
            <ul>
                {listFinal === undefined ? (
                    <p>If you got something we'll get it!</p>
                ) : (
                    listFinal.map(item => (
                        <li>
                            <p>Char name: {item[`${opt}name`]}</p> {/* name */}
                            <p>
                                History:
                                {opt === 'char'
                                    ? item[`${opt}history`]
                                    : item[opt]}
                            </p>
                        </li>
                    ))
                )}
            </ul>
        </>
    )
}

export default UserList2
