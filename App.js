import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Apie = ({ navigator }) => (
  <View style={styles.container}>
        <Text style={styles.getCvText}>Mano CV </Text>
          <Image
            source={
              require('C:/Users/Auste/navigator/assets/as.jpg') 
            }
            style={styles.welcomeImage}
          />
          
        <View style={styles.getStartedContainer}>
          <Text style={styles.getNameText}>Austėja Sirijatavičiūtė </Text>
          </View>

          <Text style={styles.getNameText}>
           1996-05-09
          </Text>
  <Text
    style={styles.navigatorText}
    onPress={() => navigator.push({
      title: 'Darbovietes',
      component: Darbovietes,
      leftButtonTitle: 'Grįžti',
      onLeftButtonPress: () => navigator.pop()
    })
    }
  >Darbovietės > </Text>
</View>
)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EEE8AA'
  },
});

