import React from 'react';
import { Container, Header, Title, Content, Body } from 'native-base';
import { connect } from 'react-redux';

import AddToDoButton from '../components/AddToDoButton';
import AddToDo from '../components/AddToDo';
import ToDoItem from '../components/ToDoItem';
import {
  addTodo,
  updateTodo,
  deleteTodo,
} from '../store/actions';

class ToDoAll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      new_todo: false,
    }
  }

  saveToDoData = (todo) => {
    this.addNewToDo(show = false);
    this.props.addTodo(todo);
  }

  addNewToDo = (show) => {
    this.setState({
      new_todo: show
    });
  }

  screenFilterTodos = () => {
    const{ screen, todos } = this.props;
    if( screen == "Active") {
      return todos.filter(function(todo) {
        return !todo.completed;
      })
    }else if(screen == "Completed" ) {
      return todos.filter(function(todo) {
        return todo.completed;
      })
    } else {
      return todos;
    }
  }

  render() {
    const { new_todo } = this.state;
    const { todos, show_new_todo, screen, deleteTodo, updateTodo } = this.props;

    let listItem = [];
    if(todos.length > 0) {
      let scrTodos = this.screenFilterTodos();
      listItem = scrTodos.map( (todo, index) =>
        <ToDoItem
          key={index}
          todo={todo}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
        />
      );
    }

    return (
      <Container>
        <Header>
          <Body>
            <Title>{ screen }</Title>
          </Body>
        </Header>
        <Content>
        { listItem }
        {new_todo &&
          <AddToDo
            onPress = { this.saveToDoData }
            onCancel = { this.addNewToDo }
          />
        }
      </Content>
      {show_new_todo && 
        <AddToDoButton onAddNewToDo = { this.addNewToDo } />
      }
    </Container>
    );
  }

}

function mapStateToProps (state) {
  return {
    todos: state.todoReducer.todos
  }
}

function mapDispatchToProps (dispatch) {
  return {
    addTodo: (todo) => dispatch(addTodo(todo)),
    deleteTodo: (todo) => dispatch(deleteTodo(todo)),
    updateTodo: (todo) => dispatch(updateTodo(todo)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ToDoAll);