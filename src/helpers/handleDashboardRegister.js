//import { handleCharQuestValidation } from './validation'
import api from '../services/api'

const handleDashboardRegister = async (e, opt, userInfoId, reload) => {
    // 'opt' here is either char or quest

    e.preventDefault()

    const textInfoMessage = async response => {
        const { [opt + 'name']: name } = await response.data[0]
        console.log(name)
        let spanInfo = document.getElementById(`${opt}infomessage`)
        console.log(spanInfo)
        spanInfo.textContent = `${opt} registered with success! ${opt} name: ${name}`
    }
    try {
        let response = await api.post(`/register${opt}`, {
            [`${opt}name`]: document.getElementById(`${opt}name`).value,
            [`${opt}history`]: document.getElementById(`${opt}history`).value,
            id: userInfoId
        }) //return an Object with config, data, headers etc... , data[0] contains: optname, opthistory and id
        let caq = JSON.parse(localStorage[`${opt}`])
        localStorage[`${opt}`] = JSON.stringify([...caq, response.data[0]])
        textInfoMessage(response)
        reload()
    } catch (error) {
        alert(`Oops, something went wrong, please try again`)
        console.log(error.response)
    }
}

export default handleDashboardRegister
