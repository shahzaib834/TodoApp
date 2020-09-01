import React, {useState} from 'react';
import {View, KeyboardAvoidingView, Text, Alert} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import {Input, Button} from 'react-native-elements';

import AsyncStorage from '@react-native-community/async-storage';

import {connect} from 'react-redux';

import {setDATA} from '../../store/actions';

import {scale} from '../../ResponsiveSize';
import {TouchableOpacity} from 'react-native-gesture-handler';

const AddTodos = (props) => {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');

  const s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };

  const uniqueId = () => {
    return (
      s4() +
      s4() +
      '-' +
      s4() +
      '-' +
      s4() +
      '-' +
      s4() +
      '-' +
      s4() +
      '-' +
      s4() +
      '-' +
      s4() +
      '-'
    );
  };
  const addTodo = async () => {
    if (title == '' || details == '') {
      alert('Todo Cannot be empty');
    } else {
      let todo = {id: uniqueId(), title: title, details: details};
      try {
        let todos = await AsyncStorage.getItem('@TodosKey');
        if (todos != null) {
          todos = JSON.parse(todos);
          todos.push(todo);
          await AsyncStorage.setItem('@TodosKey', JSON.stringify(todos));
        } else {
          let firstTimeTodo = [
            {id: uniqueId(), title: title, details: details},
          ];
          await AsyncStorage.setItem(
            '@TodosKey',
            JSON.stringify(firstTimeTodo),
          );
        }
      } catch (e) {
        // error
      }
      props.onSetDATA();
      setDetails('');
      setTitle('');
      props.navigation.navigate('StackNavigatorForTodosScreen');
    }
  };
  return (
    <View style={{flex: 1}}>
      <KeyboardAvoidingView behavior="padding" style={{flex: 3}}>
        <View style={{marginTop: scale(20)}}>
          <Input
            placeholder="TITLE"
            leftIcon={{type: 'font-awesome', name: 'tag', color: 'tomato'}}
            maxLength={36}
            placeholderTextColor="tomato"
            color="tomato"
            onChangeText={(text) => setTitle(text)}
            value={title}
          />
          <Input
            placeholder="DETAILS"
            leftIcon={{type: 'font-awesome', name: 'comments', color: 'tomato'}}
            maxLength={420}
            multiline
            placeholderTextColor="tomato"
            onChangeText={(text) => setDetails(text)}
            value={details}
            inputStyle={{
              maxHeight: scale(160),
              textAlignVertical: 'top',
            }}
          />
        </View>
      </KeyboardAvoidingView>
      <View style={{flex: 1}}>
        <Button
          buttonStyle={{
            backgroundColor: 'tomato',
            marginHorizontal: scale(20),
            marginTop: scale(61),
          }}
          icon={<AntDesign name="downcircle" size={scale(25)} color="white" />}
          title=" Add Todo"
          onPress={addTodo}
        />
      </View>
    </View>
  );
};
const DispatchStateToProps = (dispatch) => {
  return {
    onSetDATA: () => dispatch(setDATA()),
  };
};

export default connect(null, DispatchStateToProps)(AddTodos);
