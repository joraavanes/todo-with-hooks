import React,{useState, useEffect} from 'react';
import {render} from 'react-dom'
import {v4} from 'uuid'
import { Container, Row, Col } from 'reactstrap'
import cogo from 'cogo-toast'
import TodoList from './Components/TodoList'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
    const [todos, setTodos] = useState([]);

    const handleAddTodo = e => {
        e.preventDefault();
        const {newTodo} = e.target.elements;

        const todo = newTodo.value.trim();
        newTodo.value = '';
        newTodo.focus();

        setTodos([
            ...todos,
            {
                id: v4(),
                todo
            }
        ]);
    }

    const handleRemove = id => {
        // const removedTodo = todos.find(todo => todo.id == id);
        // cogo.error(`The todo '${removedTodo.todo}' is removed`, {position: 'bottom-right'});
        const filteredTodos = todos.filter(todo => todo.id != id);
        setTodos(filteredTodos);
    }

    useEffect(() => {
        console.log('App is mounted');
    }, []);

    let content = (
        <Container>
            <Row>
                <Col>
                    <h1>Welcome to Todo Hooks</h1>
                    <hr/>             
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={5}>
                    <form onSubmit={handleAddTodo}>
                        <input type="text" name="newTodo" className="form-control" placeholder="E.g., Do the dishes"/>{' '}
                        <input type="submit" value="Add Todo" className="btn btn-success" style={{marginTop: 5}}/>
                    </form>
                </Col>
                <Col xs={12} md={6}>
                    <TodoList todos={todos} handleRemove={handleRemove}/>                
                </Col>
            </Row>
        </Container>
    );

    return content;
};

render(<App/>, document.querySelector('#app'));