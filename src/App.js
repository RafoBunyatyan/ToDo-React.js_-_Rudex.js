import { useState } from 'react'
import TodoFooter from './components/TodoFooter';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css'

function reducer(state, action) {
	if (action.type === 'add') {
		return [
			...state,
			{
				id: Math.random(),
				text: action.payload.text,
				isCompleted: false,
			}
		]
	} else if (action.type === 'delete') {
		return state.filter((t) => t.id !== action.payload.id)
	} else if (action.type === 'clear') {
		return state.filter((todo) => !todo.isCompleted)
	} else if (action.type === 'change') {
		return (state.map((todo) => {
			if (todo.id === action.id) {
				return action.id
			}
			return todo
		})
		)
	}
}

function useReducer(reducer, initialState) {
	const [state, setState] = useState(initialState)

	return [state, (action) => {
		const newState = reducer(state, action)
		setState(newState)
	}]
}

function App() {

	const [todos, dispatch] = useReducer(reducer, [
		{
			id: Math.random(),
			text: 'Learn JS',
			isCompleted: false,
		},
		{
			id: Math.random(),
			text: 'Learn CSS',
			isCompleted: false,
		},
		{
			id: Math.random(),
			text: 'Learn React',
			isCompleted: false,
		},
	])

	return (
		<div className="App">
			<header>
				<h1 className="todoAppTitle">todos</h1>
			</header>

			<TodoForm onAdd={(text) => {
				dispatch({
					type: 'add',
					payload: {
						text: text,
					}
				})
				// setTodos([
				// 	...todos,
				// 	{
				// 		id: Math.random(),
				// 		text: text,
				// 		isCompleted: false,
				// 	}
				// ])
			}} />
			<TodoList todos={todos}
				onDelete={(todo) => {
					dispatch({
						type: 'delete',
						payload: {
							id: todo.id
						}
					})
					// setTodos(todos.filter((t) => t.id !== todo.id))
				}}
				onChange={(newTodo) => {
					dispatch({
						type: 'change',
						payload: {
							id: newTodo.id
						}
					})
					// setTodos(todos.map((todo) => {
					// 	if (todo.id === newTodo.id) {
					// 		return newTodo
					// 	}
					// 	return todo
					// }))
				}}
			/>
			<TodoFooter todos={todos} onClearCompleted={(todo) => {
				dispatch({
					type: 'clear',
					payload: {
						id: todo.id
					}
				})
				// setTodos(todos.filter((todo) => !todo.isCompleted))
			}} />
		</div>
	);
}

export default App;
