function TodoItem({ todo }) {
	return (
		<div>
			<label>
				<input type='checkbox' />
				{todo.text}
			</label>
			<button>X</button>
		</div>
	)
}

export default TodoItem