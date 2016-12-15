import React, {Proptypes} from 'react'

const Todo = ({ onClick, completed, text }) => (
    <li onClick={onClick} style={{
        textDecoration: completed ? 'line-through' : 'none'
     }}
     >
     {text}
     </li>
)

todo.propTypes = {
    onClick: Proptypes.func.isRequired,
    completed: Proptypes.bool.isRequired,
    text: Proptypes.string.isRequired
}

export default Todo
