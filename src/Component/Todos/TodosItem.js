import React from 'react';
import { View, Text, Button } from 'react-native';

export class TodosItem extends React.Component {
  constructor(props) {
    super(props);

    this.handlePress = this.handlePress.bind(this);
  }

  handlePress() {
    const { id, onDeleteClick } = this.props;
    if (onDeleteClick) {
      onDeleteClick(id);
    }
  }

  render() {
    const { value } = this.props;
    return (
      <View style={
        {
          flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start',
        }
      }
      >
        <Text>
          { value }
        </Text>
        <Button
          onPress={this.handlePress}
          title="XXX"
          color="#841584"
        />
      </View>
    );
  }
}
