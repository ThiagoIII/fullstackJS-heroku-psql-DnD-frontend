import React, { useState } from 'react'
import CQform from '../components/forms/CQform'
import UserList from './UserList'

const FormsAndLists = props => {
    const [reload, setReload] = useState(false)
    console.log(reload)
    const { userId } = props

    return (
        <>
            <CQform
                opt="char"
                userId={userId}
                reload={() => setReload(val => !val)}
            />
            <CQform
                opt="quest"
                userId={userId}
                reload={() => setReload(val => !val)}
            />
            <UserList opt="char" userId={userId} />
            <UserList opt="quest" userId={userId} />
        </>
    )
}

export default FormsAndLists
