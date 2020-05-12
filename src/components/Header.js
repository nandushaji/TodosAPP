import React from 'react'

export default function Header(props) {
	return (
		<header style={headerStyle}>
		<h1>Todolist</h1>
		<button style={btnStyle} onClick={props.buttonClickHandler}>About</button>
		</header>
	)
}
const headerStyle={
	background:'#333',
	color:"#fff",
	textAlign:"center",
	padding:"10px"
}
const btnStyle={
	color:"#fff",
	background:'#333',
	padding:'5px',
	border:'none',
	margin:"5px"

}