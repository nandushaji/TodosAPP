import React from 'react'
import PropTypes from 'prop-types'

export class Todoitem extends React.Component {
	getStyle=()=>{
		return {
			background: '#f4f4f4',
			paddding: '10px',
			borderBottom: '1px #ccc dotted',
			textDecoration: this.props.todo.completed?'line-through':'none'
				}	
				  }

	render() {
		const {id,title }=this.props.todo;
		return (
			<div style={this.getStyle()}>
				<p><input type="checkbox" onChange={this.props.markComplete.bind(this,id)}/>
				{title}
				<button style={btnStyle} onClick={this.props.clickHandler.bind(this,id)} >
				x</button></p>
			</div>
		)
	}
}


Todoitem.propTypes={
	todo: PropTypes.object.isRequired
}
const btnStyle={
	background:"#ff0000",
	color:"#fff",
	border:"none",
	borderRadius:"50%",
	padding:'5px 8px',
	cursor:"pointer",
	float:"right"

}
export default Todoitem