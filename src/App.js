import { useState } from 'react'
import './App.css';
import TodoFooter from './TodoFooter';
import TodoForm from './TodoForm';
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
			<TodoForm />
			<TodoList todos={todos} />
			<TodoFooter />
		</div>
	);
}

export default App;
