import React, { Component } from 'react';
import { StyleSheet} from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body,Button,Item, Icon,Input } from 'native-base';

class Entrar extends Component{
render(){
  const navegar = this.props.navegation;
  return (
    <Container>
        <Header>
         <Icon type='MaterialCommunityIcons' name='exit-run' style={{color: 'white'}}/>
          <Text style={style}>
            ENTRADA EXITOSA
          </Text>
        </Header>
        <Content padder contentContainerStyle ={misEstilos.content}>
          <Card>
          <CardItem>
              <Text>Datos del usuario: </Text>
          </CardItem>
            <CardItem>
              <Text>Tu nombre es : {this.props.route.params.nombre}</Text>
            </CardItem>
            <CardItem>
              <Text>Tu contraseña es : {this.props.route.params.contraseña}</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
  );
}
}

const misEstilos = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
  },
});

const style = {
    color: 'white',
    fontSize: 30,
};

export default Entrar;