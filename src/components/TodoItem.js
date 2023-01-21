import './TodoItem.css'

function TodoItem({ todo, onChange, onDelete }) {
	return (
		<div className="todoListItem">
			<label>
				<input type='checkbox' checked={todo.isCompleted} onChange={(e) => {
					onChange({
						...todo,
						isCompleted: e.target.checked,
					})
				}} />
				{todo.text}
				<button
					className="todoListItemDelete"
					onClick={() => {
						onDelete(todo)
					}}>X</button>
			</label>
		</div>
	)
}

export default TodoItem