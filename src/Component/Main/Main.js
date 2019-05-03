import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import { Header as HeaderComponent } from 'react-native-elements';
import { InputTodo } from 'rootSrc/Component/InputTodo/InputTodo';
import { Todos } from 'rootSrc/Component/Todos/Todos';

import { updateText } from 'rootSrc/Component/InputTodo/actions';
import { updateTodos } from 'rootSrc/Component/Todos/actions';

const mapStateToProps = (state) => {
  return {
    text: state.textBox.textInput,
    todos: state.todos.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeText: (text) => { dispatch(updateText(text)); },
    updateTodosAct: (updateTodosData) => { dispatch(updateTodos(updateTodosData)); },
  };
};

@connect(mapStateToProps, mapDispatchToProps)
export class Main extends React.Component {
  constructor(props) {
    super(props);

    this.changeText = this.changeText.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  changeText(text) {
    const { onChangeText } = this.props;
    if (onChangeText) {
      onChangeText(text);
    }
  }

  addTodo() {
    const { todos, text, updateTodosAct } = this.props;
    const time = new Date();
    const resultItem = {
      id: time.getTime(),
      text,
    };
    const result = [...todos, resultItem];
    updateTodosAct(result);
  }

  deleteTodo(id) {
    const { todos, updateTodosAct } = this.props;
    todos.splice(id, 1);
    updateTodosAct(todos);
  }

  render() {
    const { text, todos } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <HeaderComponent centerComponent={{ text: 'Todo Apps', style: { color: '#fff' } }} />
        <InputTodo onChangeText={this.changeText} value={text} onPress={this.addTodo} />
        <Todos todos={todos} onDeleteClick={this.deleteTodo} />
      </View>
    );
  }
}
