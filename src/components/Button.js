import React from 'react'

export class Button extends React.Component {
	render() {
		return (
			<div>
				<button style={btnStyle}>&copy About</button>
			</div>
		)
	}
}

const btnStyle={
	color:"white",
	bacground:'#333',
	padding:'5px',
	border:'none',
	margin:"5px"

}
export default Button