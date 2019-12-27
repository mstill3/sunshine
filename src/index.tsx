// Import dependencies
import * as React from 'react'
import { render } from 'react-dom'

// Import interfaces
import { TodoInterface, BubbleInterface } from './interfaces'


// Import components
import TodoForm from './components/todo-form'
import TodoList from './components/todo-list'
import BubbleList from './components/bubble-list'
import NavBar from './components/navbar'

// Import styles
// import './styles/styles.scss'
// import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './magic/hidesidebar.js'
import './styles/sidebar.scss'

// TodoListApp component
const TodoListApp = () => {
  const [todos, setTodos] = React.useState<TodoInterface[]>([])

  // Creating new todo item
  function handleTodoCreate(todo: TodoInterface) {
    // Prepare new todos state
    const newTodosState: TodoInterface[] = [...todos]
    // Update new todos state
    newTodosState.push(todo)
    // Update todos state
    setTodos(newTodosState)
  }

  // Update existing todo item
  function handleTodoUpdate(event: React.ChangeEvent<HTMLInputElement>, id: string) {
    // Prepare new todos state
    const newTodosState: TodoInterface[] = [...todos]
    // Find correct todo item to update
    newTodosState.find((todo: TodoInterface) => todo.id === id)!.text = event.target.value
    // Update todos state
    setTodos(newTodosState)
  }

  // Remove existing todo item
  function handleTodoRemove(id: string) {
    // Prepare new todos state
    const newTodosState: TodoInterface[] = todos.filter((todo: TodoInterface) => todo.id !== id)
    // Update todos state
    setTodos(newTodosState)
  }

  // Check existing todo item as completed
  function handleTodoComplete(id: string) {
    // Copy current todos state
    const newTodosState: TodoInterface[] = [...todos]
    // Find the correct todo item and update its 'isCompleted' key
    newTodosState.find((todo: TodoInterface) => todo.id === id)!.isCompleted = !newTodosState.find((todo: TodoInterface) => todo.id === id)!.isCompleted
    // Update todos state
    setTodos(newTodosState)
  }

  // Check if todo item has title
  function handleTodoBlur(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.value.length === 0) {
      event.target.classList.add('todo-input-error')
    } else {
      event.target.classList.remove('todo-input-error')
    }
  }

  return (
    <div className="todo-list-app">
      <TodoForm
        todos={todos}
        handleTodoCreate={handleTodoCreate}
      />
      <TodoList
        todos={todos}
        handleTodoUpdate={handleTodoUpdate}
        handleTodoRemove={handleTodoRemove}
        handleTodoComplete={handleTodoComplete}
        handleTodoBlur={handleTodoBlur}
      />
    </div>
  )
}


const bubbles: Array<BubbleInterface> = [
  {
   'id': 1,
   'category': "Looks",
   'ant':"Look silly",
   'replacement':"Not accurate, look good",
   'color':"rgb(79, 140, 196)"
  },
  {
    'id': 2,
    'category': "Intelligence",
    'ant':"I am stupid",
    'replacement':"No you are very smart because ...",
    'color':"rgb(79, 140, 96)"
   }
];

// TodoListApp component
const App = () => {
  return (
    <div>
      <NavBar 
        username=""
        points={3}
        avatar="unknown.jpg"
      />
      <div className="container content">
        <BubbleList
          bubbles={bubbles}
        />
        <TodoListApp />
      </div>
    </div>
  )
}

const rootElement = document.getElementById('root')
render(<App />, rootElement)