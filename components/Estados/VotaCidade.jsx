import { View, Text, Button } from 'react-native'
import { useState } from 'react'

const VotaCidade = () => {
  //const [votar, setVotar] = useState(0)
  const [quixada, setQuixada] = useState(0)
  const [quixeramobim, setQuixeramobim] = useState(0)
  const [banabuiu, setBanabuiu] = useState(0)

  const [vencedor, setVencedor] = useState(null)

  const votarQuixada = () => {
  //contador = contador + 1
    setQuixada(quixada + 1)
  }

  const votarQuixeramobim = () => {
  //contador = contador + 1
    setQuixeramobim(quixeramobim + 1)
  }

  const votarBanabuiu = () => {
  //contador = contador + 1
    setBanabuiu(banabuiu + 1)
  }

  const contarVotos = () => {
    if (quixada > quixeramobim && quixada > banabuiu){
      setVencedor("Quixadá venceu")
      return vencedor
    } if (quixeramobim > quixada && quixeramobim > banabuiu){
      setVencedor("Quixeramobim venceu")
      return vencedor
    } if (banabuiu > quixada && banabuiu > quixeramobim){
      setVencedor("Banabuiú venceu")
      return vencedor
    } return null
  }

  const mostrarVotos = () => {
    return (
      <View>
        {
          vencedor
        }
      </View>
    )
  }


  return(
    <View>
      <View>
        <Text>Quixadá: {quixada} </Text>
        <Text>Quixeramobim: {quixeramobim} </Text>
        <Text>Banabuiú: {banabuiu} </Text>
      </View>
      
      <View
        style = {{
          flex: 1,
          flexDirection: 'column'
        }}
      >

        <View style = {{margin: 5}}>
          <Button 
            title = 'Quixadá' 
            onPress={votarQuixada}
          /><br/>
        </View>
        <View style = {{margin: 5}}>
          <Button 
            title = 'Quixeramobim' 
            onPress={votarQuixeramobim}
          /><br/>
        </View>
        <View style = {{margin: 5}}>
          <Button 
            title = 'Banabuiú' 
            onPress={votarBanabuiu}
          /><br/>
        </View>
        <View style = {{margin: 5}}>
          <Button 
            title = 'Veja quem venceu' 
            onPress={contarVotos}
          /><br/>
          {
            mostrarVotos()
          }
        </View>
      </View>
    </View>
  )
}

export default VotaCidade