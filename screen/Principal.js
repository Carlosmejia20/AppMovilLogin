import React, { Component } from 'react';
import {View,Text, ActivityIndicator, StyleSheet} from 'react-native';
import {  Header,Button,Item,Icon, CardItem } from 'native-base';
import { FlatList } from 'react-native-gesture-handler';

class Usuario extends Component{
  constructor(props){
    super(props);
    this.state={
      isLoading:true,
    }
  }//end constructor
  //Lo que está en --- async componentDidMount() ---  se ejecuta independientemente de lo que se este haciendo
  // --- await --- Una promesa es una respuesta, hay promesas verdaderas(regresa los datos correctamente) 
  // y falsas
  async componentDidMount(){
    try{
      const response = await fetch('https://swapi.co/api/planets/?page=2');
      const responseJson = await response.json();
      this.setState({
        isLoading: false,
        dataSource: responseJson.results,
      },function(){
      });
    }catch(error){
      console.log(error);
    }
  }//end componentDidMount

  render(){
    if(this.state.isLoading==true){
      return(
        <View style={{flex:1, padding: 20}}>
          <ActivityIndicator />
        </View>
      );
    }
    return(
      <View>
      <Header>
          <Icon type='Ionicons' name='md-planet' style={{color : 'white'}}/>
            <Text style={style}>
               Planetas
            </Text>
      </Header>
        <CardItem>
          <FlatList 
            data={this.state.dataSource}
            renderItem={({item}) => 
              <Text> Nombre: {item.name} , Diametro del Planeta: {item.diameter}</Text>

            }
            keyExtractor = {({name},index)=>name} />
        </CardItem>
      </View>
    );
  }
}

const style = {
    color: 'white',
    fontSize: 30,
};

export default Usuario;


