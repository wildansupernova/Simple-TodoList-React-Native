import React from 'react';
import { View, ScrollView } from 'react-native';

import { TodosItem } from './TodosItem';

export class Todos extends React.Component {
  constructor(props) {
    super(props);

    this.renderTodos = this.renderTodos.bind(this);
  }

  renderTodos() {
    const { onDeleteClick, todos } = this.props;
    return todos.map((value, index) => (
      <TodosItem key={value.id} id={index} onDeleteClick={onDeleteClick} value={value.text} />
    ));
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1 }}>
          {this.renderTodos()}
        </ScrollView>
      </View>
    );
  }
}
