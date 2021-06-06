import React, {useReducer} from 'react'
import {Container} from 'reactstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import {TodoContext} from './context/TodoContext'
import todoReducer from './context/reducer'
import TodoForm from './components/TodoForm';
import Todos from './components/Todos';




const App = () => {
  const [todos, dispatch] = useReducer(todoReducer,[])
  return(
    <TodoContext.Provider value = {{todos,dispatch}}>
      <Container fluid >
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flearnyst.s3.amazonaws.com%2Fassets%2Fschools%2F2410%2Fresources%2Fimages%2Flogo_lco_t17sd.png&f=1&nofb=1" alt="" />
        <h1>Todo App with Context API</h1>
        <TodoForm />
        <Todos />
      </Container>
    </TodoContext.Provider>
  )
}


export default App;
