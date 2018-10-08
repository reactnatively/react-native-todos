import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AddTodo from './containers/AddTodo';

class TodoApp extends Component {

  state = {
    todos:[],
    visibilityFilter: 'SHOW_ALL_TODOS'
  }

  render() {
    return (
      <View style={styles.container}>
        <AddTodo />

        <View style={styles.container}>
        </View>
      </View>
    );
  }
}

export default TodoApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
});
