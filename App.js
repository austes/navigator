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

const Gebėjimai = ({ navigator }) => (
<View style={styles.gebejimai}>
  <Text style={styles.getCvText}> Kalbos:   
  </Text>
  <Text style={styles.gebejimaiText} > Lietuviu *** </Text>
  <Text style={styles.gebejimaiText} > Anglu ** </Text>
  <Text style={styles.gebejimaiText} >  Rusu * </Text>

  <Text style={styles.getCvText}> Kontaktai:   
  </Text>
  <Text style={styles.gebejimaiText} > Telefono nr: 865373465 </Text>
  <Text style={styles.gebejimaiText} > E-mail: austyesir@gmail.com</Text>
  <Text style={styles.gebejimaiText} > Adresas: šilo 4-52 </Text>
  <Text style={styles.navigatorText} onPress={() => navigator.pop()}>Grįžti</Text>
  </View>
)

export default class App extends Component {
render() {
  return (
    <NavigatorIOS
      ref='navigator'
      style={{ flex: 1 }}
      tintColor='red'
      titleTextColor='green'
      initialRoute={{
        rightButtonTitle: 'Kitas', onRightButtonPress: () =>
          this.refs.navigator.push({ component: Darbovietes, title: 'Kitas' }), title: 'Apie',
        component: Apie,
      }}
    />
  )
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
