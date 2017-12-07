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

const Darbovietes = ({ navigator }) => (
<View style={styles.darbovietes}>
  <Text style={styles.getCvText}> Mokslo institucijos  
  </Text>
  <Text style={styles.darbovietesText} > * Kedainių Sviesioji gimnazija
     * Vilniaus kolegija Išmaniųjų irenginių technologijos
  </Text>
  <Text style={styles.getCvText}> Darbovietes 
  </Text>
 
  <Text style={styles.darbovietesText} > * AB Swedbank, sistemų      analitikė
  </Text>
  <View style={styles.getStartedContainer}>
<Text
  style={styles.navigatorText}
  onPress={() => navigator.replace({
    component: Gebėjimai,
    onLeftButtonPress: () => navigator.pop() 
  })
  }
>Gebėjimai > </Text>
</View >
</View >
)

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
