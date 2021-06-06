import React, {useContext, useState} from 'react'
import {ListGroup, ListGroupItem} from 'reactstrap'
import {FaCheckDouble} from 'react-icons/fa'
import {TodoContext} from '../context/TodoContext'
import {REMOVE_TODO} from '../context/action.types'

const Todos = () => {
    const {todos, dispatch} = useContext(TodoContext);
    const [doing, setDoing] = useState(false);
    
    

    

    return (
        <ListGroup className="mt-5 mb-2 items" >
            {
                todos.map((todo) => (
                    <ListGroupItem key={todo.id} style={{
                        marginBottom:"10px",
                        borderRadius:"10px"
                    }}> 
                        

                        {todo.todoString}
                  
                        <span style={{
                            float:"right"
                        }}
                            onClick={() => {
                                dispatch({
                                    type: REMOVE_TODO,
                                    payload: todo.id
                                })
                            }}

                        ><FaCheckDouble />
                        </span>
                        
                        
                    </ListGroupItem>
                ))
            }
        </ListGroup>
    )
}

export default Todos;
