import { handleCharRegisterValidation, handleQuestRegisterValidation } from './validation'

async function handleCharQuestValidation(e, opt, user){
	return opt === 'char' 
		? handleCharRegisterValidation(e, user) 
		: handleQuestRegisterValidation(e, user)
}

export default handleCharQuestValidation