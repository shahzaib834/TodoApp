import React, {useEffect} from 'react';
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {Divider} from 'react-native-elements';

import {connect} from 'react-redux';

import {scale} from '../../ResponsiveSize';

import {
  setSelectedId,
  setSelectedName,
  setSelectedDetail,
  setDATA,
} from '../../store/actions';

const headerIcon = scale(20);
const listicon = scale(15);
const UDTodos = (props) => {
  useEffect(() => {
    props.onSetDATA();
  }, []);

  const renderSeparator = () => {
    return <Divider style={{backgroundColor: '#ccc'}} />;
  };

  return (
    <View>
      <StatusBar backgroundColor="tomato" barStyle="dark-content" />
      <View style={styles.header}>
        <Text style={styles.headerText}>T</Text>
        <AntDesign name="meho" size={headerIcon} color="#fff" />
        <Text style={styles.headerText}>DOS</Text>
      </View>
      <View style={styles.container}>
        <FlatList
          data={props.DATA}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={renderSeparator}
          renderItem={({item, index}) => (
            <TouchableOpacity
              style={styles.todo}
              onPress={() => {
                props.onSetSelectedId(item.id);
                props.onSetSelectedName(item.title);
                props.onSetSelectedDetail(item.details);
                props.navigation.navigate('UDTodos2');
              }}>
              <Entypo name="edit" size={listicon} color="tomato" />
              <Text style={styles.title}> {item.title}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: scale(5),
  },
  header: {
    height: scale(30),
    width: '100%',
    backgroundColor: 'tomato',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    color: 'tomato',
  },
  headerText: {
    fontSize: scale(25),
    fontWeight: 'bold',
    color: '#fff',
    letterSpacing: 5,
  },
  todo: {
    padding: scale(8),
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: scale(18),
    color: 'black',
  },
  details: {
    fontSize: scale(16),
  },
});

const mapStateToProps = (state) => {
  return {
    DATA: state.todo.DATA,
  };
};
const DispatchStateToProps = (dispatch) => {
  return {
    onSetSelectedId: (item) => dispatch(setSelectedId(item)),
    onSetSelectedName: (item) => dispatch(setSelectedName(item)),
    onSetSelectedDetail: (item) => dispatch(setSelectedDetail(item)),
    onSetDATA: () => dispatch(setDATA()),
  };
};

export default connect(mapStateToProps, DispatchStateToProps)(UDTodos);
