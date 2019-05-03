import React from 'react';
import { View, TextInput, Button } from 'react-native';

export class InputTodo extends React.Component {
  render() {
    const { onChangeText, value, onPress } = this.props;
    return (
      <View>
        <TextInput onChangeText={onChangeText} value={value} />
        <Button
          onPress={onPress}
          title="Add Todo"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}
