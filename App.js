import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screen/Login';
import Registrarse from './screen/Registrarse';
import Entrar from './screen/Entrar';
import Principal from './screen/Principal';


function loginView(){
  return(
    <Login></Login>
  );
}

function entrarView(){
  return(
    <Entrar></Entrar>
  );
}


function registrarseView() {
  return (
      <Registrarse></Registrarse>
      
  );
}

      
  
const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registrarse" component={Registrarse} />
        <Stack.Screen name='Entrar' component={Entrar}/>
        <Stack.Screen name='Principal' component={Principal}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}




export default App;