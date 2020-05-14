import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const IceButton = ({ color = 'green' }) => {
  const icePic = require('../../assets/ice.png');

  return (
    <View>
      <TouchableOpacity onPress={() => null}>
        <View style={[styles.container, { borderColor: color }]}>
          <Image
            source={icePic}
            style={{
              height: 60,
              width: 60,
            }}
          />
          <Text style={[styles.textButtonStyle, { color }]}>I want it!</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    padding: 5,
    borderRadius: 50,
  },
  textButtonStyle: {
    fontSize: 35,
    fontWeight: 'bold',
  },
});

export default IceButton;
