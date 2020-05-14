import React from 'react';
import { StyleSheet, View, Text, Dimensions, Image } from 'react-native';
import WavyHeader from '../components/WavyHeader';
import { firstFlav } from './flavours';
import IceButton from '../components/IceButton';

const customColor = '#009688';

export default function FirstScreen() {
  const conePic = require('../../assets/cone.png');

  return (
    <View style={styles.container}>
      <WavyHeader
        customStyles={styles.svgCurve}
        customHeight={170}
        customTop={150}
        customBgColor={customColor}
        customWavePattern={firstFlav}
      />
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Cream 1</Text>
      </View>
      <Image source={conePic} style={styles.cone} />

      <View
        style={{
          position: 'absolute',
          right: 40,
          bottom: 70,
        }}>
        <Text style={styles.desc}>Ingredients</Text>
        <Text style={[styles.contain, { marginLeft: 20 }]}>- Contain 1</Text>
        <Text style={[styles.contain, { marginLeft: 30 }]}>- Contain 2</Text>
        <Text style={[styles.contain, { marginLeft: 40 }]}>- Contain 3</Text>
        <Text style={[styles.contain, { marginLeft: 50 }]}>- Contain 4</Text>
        <IceButton color={customColor} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  svgCurve: {
    position: 'absolute',
    width: Dimensions.get('window').width,
  },
  headerContainer: {
    marginTop: 50,
    marginHorizontal: 10,
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginTop: 35,
  },
  cone: {
    position: 'absolute',
    left: -190,
    height: 1000,
    width: 500,
    zIndex: -10,
  },
  desc: {
    color: customColor,
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  contain: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 10,
  },
});
