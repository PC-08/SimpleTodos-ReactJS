// Write your code here
import './index.css'

const TodoItem = props => {
  const {UniqueNo, title, deleteTodo} = props

  const onClickDelete = () => {
    deleteTodo(UniqueNo)
  }

  return (
    <li className="todo">
      <p className="para">{title}</p>
      <button onClick={onClickDelete} type="button" className="btn">
        Delete
      </button>
    </li>
  )
}

export default TodoItem
