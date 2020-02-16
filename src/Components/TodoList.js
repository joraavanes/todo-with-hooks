import React from 'react'
import Todo from './Todo'

const TodoList = props => {

    let content = (
        <>
            <h4>Current Todos:</h4>
            <ol>
                {props.todos.map((todo, index) => {
                    return <Todo key={index} todo={todo} handleRemove={props.handleRemove}/>;
                })}
            </ol>
        </>
    );

    return content;
};

export default TodoList;