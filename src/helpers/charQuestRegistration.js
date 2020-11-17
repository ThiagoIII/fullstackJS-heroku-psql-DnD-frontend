import { handleCharValidation, handleQuestValidation } from './validation'

async function callCharOrQuestValidators(e, opt, user){
	return opt === 'char' 
		? handleCharValidation(e, user) 
		: handleQuestValidation(e, user)
}

export default callCharOrQuestValidators