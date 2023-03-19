// In App.js in a new project

import * as React from 'react';
import {View, Text, Button, StyleSheet, Image, ScrollView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// home page of the app
function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.heading}>Closest</Text>
          <View style={styles.container1}>
            <Image
              style={styles.imageStyle}
              source={require('/Users/raunaqsingh/Desktop/html/assignments/265/MULT-265-A2-Raunaq/navigationApp/assets/pexels-ash-376464.jpg')}
            />
            <Image
              style={styles.imageStyle}
              source={require('/Users/raunaqsingh/Desktop/html/assignments/265/MULT-265-A2-Raunaq/navigationApp/assets/pexels-ella-olsson-1640774.jpg')}
            />
            <Image
              style={styles.imageStyle}
              source={require('/Users/raunaqsingh/Desktop/html/assignments/265/MULT-265-A2-Raunaq/navigationApp/assets/pexels-jane-doan-1099680.jpg')}
            />
          </View>
        </View>
        <View style={styles.container}>
          <Text style={styles.heading}>Offers</Text>
          <View style={styles.container1}>
            <Image
              style={styles.imageStyle}
              source={require('/Users/raunaqsingh/Desktop/html/assignments/265/MULT-265-A2-Raunaq/navigationApp/assets/pexels-ash-376464.jpg')}
            />
            <Image
              style={styles.imageStyle}
              source={require('/Users/raunaqsingh/Desktop/html/assignments/265/MULT-265-A2-Raunaq/navigationApp/assets/pexels-ella-olsson-1640774.jpg')}
            />
            <Image
              style={styles.imageStyle}
              source={require('/Users/raunaqsingh/Desktop/html/assignments/265/MULT-265-A2-Raunaq/navigationApp/assets/pexels-jane-doan-1099680.jpg')}
            />
          </View>
        </View>
        <View style={styles.container}>
          <Text style={styles.heading}>Previously Ordered</Text>
          <View style={styles.container1}>
            <Image
              style={styles.imageStyle}
              source={require('/Users/raunaqsingh/Desktop/html/assignments/265/MULT-265-A2-Raunaq/navigationApp/assets/pexels-ash-376464.jpg')}
            />
            <Image
              style={styles.imageStyle}
              source={require('/Users/raunaqsingh/Desktop/html/assignments/265/MULT-265-A2-Raunaq/navigationApp/assets/pexels-ella-olsson-1640774.jpg')}
            />
            <Image
              style={styles.imageStyle}
              source={require('/Users/raunaqsingh/Desktop/html/assignments/265/MULT-265-A2-Raunaq/navigationApp/assets/pexels-jane-doan-1099680.jpg')}
            />
          </View>
        </View>
        <View style={styles.container}>
          <Text style={styles.heading}>Offers</Text>
          <View style={styles.container1}>
            <Image
              style={styles.imageStyle}
              source={require('/Users/raunaqsingh/Desktop/html/assignments/265/MULT-265-A2-Raunaq/navigationApp/assets/pexels-ash-376464.jpg')}
            />
            <Image
              style={styles.imageStyle}
              source={require('/Users/raunaqsingh/Desktop/html/assignments/265/MULT-265-A2-Raunaq/navigationApp/assets/pexels-ella-olsson-1640774.jpg')}
            />
            <Image
              style={styles.imageStyle}
              source={require('/Users/raunaqsingh/Desktop/html/assignments/265/MULT-265-A2-Raunaq/navigationApp/assets/pexels-jane-doan-1099680.jpg')}
            />
          </View>
        </View>
      </ScrollView>
      <View style={styles.navStyle}>
        <View style={styles.btnStyle}>
          <Button
            color={'green'}
            title="Home"
            onPress={() => navigation.navigate('Home')}
          />
          <Button
            title="Orders"
            color={'black'}
            onPress={() => navigation.navigate('Orders')}
          />
          <Button
            color={'black'}
            title="Orders"
            onPress={() => navigation.navigate('Orders')}
          />
          <Button
            color={'black'}
            title="Orders"
            onPress={() => navigation.navigate('Details')}
          />
          <Button
            color={'black'}
            title="Orders"
            onPress={() => navigation.navigate('Details')}
          />
        </View>
      </View>
    </View>
  );
}

function DetailsScreen({navigation}) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <Text> </Text>
        </View>
      </ScrollView>
      <View style={styles.navStyle}>
        <View style={styles.btnStyle}>
          <Button
            color={'green'}
            title="Home"
            onPress={() => navigation.navigate('Home')}
          />
          <Button
            title="Orders"
            color={'black'}
            onPress={() => navigation.navigate('Orders')}
          />
          <Button
            color={'black'}
            title="Orders"
            onPress={() => navigation.navigate('Orders')}
          />
          <Button
            color={'black'}
            title="Orders"
            onPress={() => navigation.navigate('Details')}
          />
          <Button
            color={'black'}
            title="Orders"
            onPress={() => navigation.navigate('Details')}
          />
        </View>
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Orders" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container1: {
    flex: 2,
    flexDirection: 'row',
  },
  navStyle: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 40,
  },
  btnStyle: {
    width: 400,
    borderWidth: 2,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  heading: {
    fontSize: 20,
  },
  imageStyle: {
    flex: 1,
    width: 150,
    height: 200,
    margin: 10,
    paddingBottom: 60,
    borderWidth: 2,
    alignContent: 'space-between',
  },
});

export default App;
