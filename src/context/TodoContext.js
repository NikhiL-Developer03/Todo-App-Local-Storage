/* 
Functionality
1) context api to store data and data store in local storage
2) form to submit to add todos
3) list view to show todos
4) edit todo
5) delete todo
6) check box (toggle - completed and unCompleted)
*/

import {createContext,useConext} from 'react'

export const TodoContext = createContext({
  todos:[
    {
      id:1,
      todo:"Todo msg",
      completed:false
    }
  ],
  addTodo: (todo) => {},
  updateTodo : (id,todo) => {},                      
  deleteTodo : (id) => {},
  toggleComplete : (id) => {}

});

export const Todoprovider = TodoContext.Provider;

export const useTodo = () => {
  return useConext(TodoContext)
}