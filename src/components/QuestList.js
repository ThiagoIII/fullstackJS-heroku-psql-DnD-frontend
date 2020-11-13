import React from 'react'

const QuestList = ({userInfo}) => {
	return 	<>
				<h3>Quests</h3>
				<ul>
					{userInfo.length > 0  
							? userInfo.map(quest =><>
														<li>{quest.questname}</li>
														<li>{quest.quest}</li>
													</>) 
							: <h4>No quests registered from you!</h4>}
				</ul>
			</>
}

export default QuestList
