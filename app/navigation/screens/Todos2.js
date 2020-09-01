import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

import {connect} from 'react-redux';

import {scale} from '../../ResponsiveSize';

const backIcon = scale(45);
const titleicon = scale(25);

const Todos2 = (props) => {
  return (
    <>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#eee',
        }}
        onPress={() => props.navigation.goBack()}>
        <AntDesign
          name="back"
          size={backIcon}
          color="#3e2723"
          style={{margin: scale(5)}}
        />
      </TouchableOpacity>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <AntDesign name="pushpin" size={titleicon} color="tomato" />
          <View style={styles.titleView}>
            <Text style={styles.title}>{props.selected_name}</Text>
          </View>
        </View>

        <ScrollView
          style={styles.detailsView}
          showsVerticalScrollIndicator={false}>
          <Text style={styles.details}>{props.selected_detail}</Text>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleView: {
    width: scale(305),
    backgroundColor: 'tomato',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    padding: scale(5),
    marginTop: scale(5),
    marginLeft: scale(5),
    flexDirection: 'row',
    maxHeight: scale(75),
  },
  title: {
    fontSize: scale(28),
    color: '#fff',
  },
  detailsView: {
    marginTop: scale(20),
    width: scale(335),
    height: scale(375),
    paddingLeft: scale(10),
    backgroundColor: '#0088a3',
    borderRadius: 15,
  },
  details: {
    fontSize: scale(16),
    color: '#fff',
  },
});

const mapStateToProps = (state) => {
  return {
    selected_id: state.todo.selectedId,
    selected_name: state.todo.selectedName,
    selected_detail: state.todo.selectedDetail,
  };
};
export default connect(mapStateToProps)(Todos2);
