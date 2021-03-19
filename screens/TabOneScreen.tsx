import * as React from 'react';
import { StyleSheet, ScrollView, TextInput, InputAccessoryView, Button } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

function test(){
  alert(12);
}
export default function TabOneScreen() {
  return (
    <View style={styles.container}>

        <Text style={styles.title}>Company Name</Text>
        <TextInput
            style={styles.input}
            // inputAccessoryViewID={inputAccessoryViewID}
            onChangeText={text => test()}
            // value='this test'
            placeholder='Company Name'
        />
        <Text style={styles.title}>Product Name</Text>
        <TextInput
            style={styles.input}
            // inputAccessoryViewID={inputAccessoryViewID}
            onChangeText={text => test()}
            // value='this test'
            placeholder='Product Name'
        />
        <Text style={styles.title}>Unit of Measure</Text>
        <TextInput
            style={styles.input}
            // inputAccessoryViewID={inputAccessoryViewID}
            onChangeText={text => test()}
            // value='this test'
            placeholder='Unit of Measure'
        />
        <Text style={styles.title}>Quantity</Text>
        <TextInput
            style={styles.input}
            // inputAccessoryViewID={inputAccessoryViewID}
            onChangeText={text => test()}
            // value='this test'
            placeholder='Quantity'
        />

        <Button  onPress={() => test()} title="Submit" />

        {/*<InputAccessoryView >*/}

        {/*</InputAccessoryView>*/}
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
    input:{
        padding: 10,
        backgroundColor:'#93cddd',
        color:'black',
        marginBottom:10
    },
    button:{
      color:'#ffffff',
        borderRadius:20,
        padding:10
    }
});
