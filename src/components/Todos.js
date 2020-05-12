import React from 'react'
import Todoitem from './Todoitem'
import PropTypes from 'prop-types'
export class Todos extends React.Component {

	render() {
		return this.props.todos.map((todo,index)=>(
			<Todoitem key={todo.id} todo={todo} 
			markComplete={this.props.markComplete} 
			clickHandler={this.props.clickHandler}/>
			));
	}
}

Todos.propTypes={
	todos: PropTypes.array.isRequired
}

export default Todos