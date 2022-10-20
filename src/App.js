import { useState } from 'react'
import './App.css';
import TodoList from './TodoList';

function App() {

	const [todos, setTodos] = useState([
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
			<TodoList todos={todos} />
		</div>
	);
}

export default App;
