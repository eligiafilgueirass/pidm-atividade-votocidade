import { View, Text, Button, Image } from 'react-native'
import { React, useState } from 'react'


const Contador = () => {

  //let contador = 0
  const [contador, setContador] = useState(10)
  const [aragao, setAragao] = useState(false)

  /*setInterval(
      () => {
        setAragao(!aragao)
      }
      ,
      0
  );*/

  const acaoAumentar = () => {
  //contador = contador + 1
    setContador(contador + 1)
  }
  
  const acaoAragao = () => {
    setAragao(!aragao)
  }

  const mostrarAragao = () => {
    if(aragao){
      return(
        <View>
          <Text> Esse é o homi </Text>
          <Image 
          source={
            { uri: 'https://www.quixada.ufc.br/wp-content/uploads/2015/05/Aragão-240x320.png', width: 240, height: 320 }
            }
          />
        </View>  
      )
    }
    return null
  }


  return (
    <View>
      
      <Text> 
        Contador: {contador}
      </Text>
      <Button 
        title = "Aumentar" 
        onPress={acaoAumentar}
      />
      
      <br/>
      
      <Text> 
        Conheces o Aragod?
      </Text>
      <Button 
        title = "Mostrar Aragão"
        onPress={acaoAragao}
      />
      {
        mostrarAragao()
      }
    </View>
  )
}

export default Contador