function TodoItem({ todo }) {
	return (
		<div>
			<label>
				<input type='checkbox' />
				{todo.text}
				<button>X</button>
			</label>
		</div>
	)
}

export default TodoItem