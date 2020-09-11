import React, { useEffect } from 'react'
import cogo from 'cogo-toast'

const Todo = props => {

    const handleRemoveTodo = e => {
        const {id} = e.target.dataset;
        // console.log(id);

        props.handleRemove(id);
    }

    useEffect(() => {

        cogo.success(`The new todo '${props.todo.todo}' added to the list`,{position: 'top-right'})

        return () => {
            // console.log(props.todo);
            cogo.error(`The todo '${props.todo.todo}' is removed`, {position: 'bottom-right'});
        };
    }, []);

    let content = (
        <li style={{marginTop: 5, marginBottom: 5}}>
            {/* {props.todo.id} */}

            {props.todo.todo}{' '}
            <button type="button" onClick={handleRemoveTodo} data-id={props.todo.id} className="btn btn-danger btn-sm">Remove</button>
        </li>
    );
    return content;
};

export default Todo;