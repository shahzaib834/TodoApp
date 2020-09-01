import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {scale} from '../ResponsiveSize';

const IconForTab = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Ionicons name="add-circle" size={50} color="#fff" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: scale(80),
    height: scale(80),
    borderRadius: 40,
    borderColor: '#f5f5f5',
    borderWidth: 7,
    bottom: scale(35),
    backgroundColor: 'tomato',
  },
});
export default IconForTab;
