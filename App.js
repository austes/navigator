import React, { Component } from 'react';
import { NavigatorIOS, StyleSheet, Text, View, Image } from 'react-native';


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
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EEE8AA'
  },
  text: {
    paddingTop: 20,
    fontSize: 30,
    padding: 7
  },
  navigatorText: {
    marginTop: 30,
    paddingTop: 100,
    fontSize: 20,
    padding: 5,
    color: '#191970',
  },
  welcomeImage: {
    width: 400,
    height: 200,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  getCvText: {
    fontSize: 30,
    color: '#008080',
    lineHeight: 50,
    textAlign: 'center',
    paddingTop: 20,
  },
  getNameText: {
    fontSize: 30,
    color: '#008080',
    lineHeight: 50,
    textAlign: 'center',
  },
  darbovietesText: {
    fontSize: 25,
    color: 'black',
    lineHeight: 50,
    textAlign: 'center',
  },
  button: {
    fontSize: 15,
  },
  darbovietes: {
    flex: 1,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
    backgroundColor: '#FFB6C1',
  },
  gebejimai: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
    backgroundColor: '#48D1CC',
  },
  gebejimaiText: {
    fontSize: 20,
    color: 'black',
    lineHeight: 50,
    textAlign: 'center',
  }
});
