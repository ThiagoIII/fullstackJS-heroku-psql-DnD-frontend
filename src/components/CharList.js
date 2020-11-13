import React from 'react'

const CharList = ({userInfo}) => {
	return 	<>
				<h3>Chars</h3>
				<ul>
					{userInfo.length > 0 
							? userInfo.map(char =><>	
													<li>{char.charname}</li>
													<li>{char.charhistory}</li>
												</>)
							: <h4>No chars registered from you!</h4>}
				</ul>
			</>
}

export default CharList
