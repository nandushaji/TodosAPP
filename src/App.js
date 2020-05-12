import React from 'react'
import './App.css'
import Todos from './components/Todos'
import Header from './components/Header'
import AddTodo from './components/AddTodo'


export class App extends React.Component {
  state={
    todos:[
    {id:1,
      title:"wash the cloths",
      completed:false
    },
    {id:2,
      title:"study react",
      completed:false
    },
    {id:3,
      title:"do some project",
      completed:false
    }
 ],
 about:true
  }
length=[...this.state.todos].length
//checkComplete
  markComplete=(id)=>{
    this.setState({todos: this.state.todos.map((todo)=>{
      if(todo.id===id){
        todo.completed=!todo.completed
      }
      return todo})
  });
}
//delete
  clickHandler=(id)=>{
     this.setState({todos: [...this.state.todos.filter(todo => todo.id!==id)]});

}
//add
addTodo=(title)=>{
  this.length+=1
  if(title!==''){

    const newTodo={
      id:this.length,
      title:title,
      completed:false
    }
    this.setState({todos:[...this.state.todos,newTodo]})
}
}
//about
buttonClickHandler=()=>{
  this.setState({about:!this.state.about})
}

  render() {
    //console.log(this.state.todos)
    if(this.state.about){
    return (
      <div className="App">
        <div className="container">
          <Header buttonClickHandler={this.buttonClickHandler}></Header>
          <AddTodo addTodo={this.addTodo}/>
          <Todos todos={this.state.todos}
           markComplete={this.markComplete} 
           clickHandler={this.clickHandler}/>
        </div>
      </div>
    )}
    else{
      return(
         <div className="App">
        <div className="container">
          <Header buttonClickHandler={this.buttonClickHandler}></Header>
          <h4 style={{textAlign:'center'}}>TodoApp_v1.0</h4>
          </div>
          </div>
        )

    }
  }
}

export default App

