import React from 'react'

const UserList = (props) => {
	const {opt, userInfo } = props
	const h3title = opt.toUpperCase()
	return 	<>
			<h3>{h3title}S</h3>
				<ul>
					{userInfo.length > 0  
							? userInfo.map(item =><>
														<li>{item[`${opt}name`]}</li>
														{
															opt === 'char'
															? <li>{item[`${opt}history`]}</li>
															: <li>{item[opt]}</li>
														}
														
													</>) 
							: <h4>No {opt}s registered from you!</h4>}
				</ul>
		</>
	
}

export default UserList
