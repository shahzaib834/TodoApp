import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import {Input} from 'react-native-elements';

import AsyncStorage from '@react-native-community/async-storage';

import {connect} from 'react-redux';

import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {setDATA} from '../../store/actions';

import {scale} from '../../ResponsiveSize';

const backIcon = scale(45);
const UDIcon = scale(40);

const UDTodos2 = (props) => {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');

  const deleteTodo = async (selectedId) => {
    try {
      let todos = await AsyncStorage.getItem('@TodosKey');
      if (todos != null) {
        todos = JSON.parse(todos);
        let filtered = todos.filter((el) => {
          return el.id != selectedId;
        });
        await AsyncStorage.setItem('@TodosKey', JSON.stringify(filtered));
        props.onSetDATA();
        props.navigation.goBack();
      }
    } catch (e) {
      // error
    }
  };
  const updateTodo = async (
    selectedId,
    title,
    details,
    selectedName,
    selectedDetails,
  ) => {
    try {
      if (title == '') {
        title = selectedName;
      }
      if (details == '') {
        details = selectedDetails;
      }
      let todo = {id: selectedId, title: title, details: details};
      let todos = await AsyncStorage.getItem('@TodosKey');
      if (todos != null) {
        todos = JSON.parse(todos);
        let filtered = todos.filter((el) => {
          return el.id != selectedId;
        });
        filtered.push(todo);
        await AsyncStorage.setItem('@TodosKey', JSON.stringify(filtered));
        props.onSetDATA();
        props.navigation.goBack();
      }
    } catch (e) {
      // error
    }
  };
  return (
    <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
      <View style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: '#eee',
          }}>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}
            onPress={() => props.navigation.goBack()}>
            <AntDesign
              name="back"
              size={backIcon}
              color="#3e2723"
              style={{margin: 5}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}
            onPress={() =>
              updateTodo(
                props.selected_id,
                title,
                details,
                props.selected_name,
                props.selected_detail,
              )
            }>
            <MaterialCommunityIcons
              name="update"
              size={UDIcon}
              color="orange"
              style={{margin: 5}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}
            onPress={() => deleteTodo(props.selected_id)}>
            <AntDesign
              name="delete"
              size={UDIcon}
              color="red"
              style={{margin: 5}}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <Input
            leftIcon={{type: 'font-awesome', name: 'tag', color: 'tomato'}}
            maxLength={36}
            color="tomato"
            onChangeText={(text) => setTitle(text)}
            inputStyle={{fontSize: scale(30)}}>
            <Text style={styles.text}>{props.selected_name}</Text>
          </Input>
          <Input
            leftIcon={{type: 'font-awesome', name: 'comments', color: 'tomato'}}
            multiline
            maxLength={420}
            onChangeText={(text) => setDetails(text)}
            inputStyle={{minHeight: scale(96), maxHeight: scale(115)}}>
            <Text style={styles.text}>{props.selected_detail}</Text>
          </Input>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: scale(10),
  },
  text: {
    color: 'tomato',
  },
});

const mapStateToProps = (state) => {
  return {
    selected_id: state.todo.selectedId,
    selected_name: state.todo.selectedName,
    selected_detail: state.todo.selectedDetail,
  };
};

const dispatchStateToProps = (dispatch) => {
  return {
    onSetDATA: () => dispatch(setDATA()),
  };
};
export default connect(mapStateToProps, dispatchStateToProps)(UDTodos2);
