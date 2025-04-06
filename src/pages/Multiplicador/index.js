import { View, Text, TextInput, StyleSheet } from 'react-native'
import {styles} from './styles'
import {useState} from 'react'
import Botoes from '../../componets/Botoes'


function Multiplicador(){
const [n1, setn1] = useState("");
const [n2, setn2] = useState("");
const [cont, setCont] = useState(0);


  function Multiplicar(){
    const num1 = parseFloat(n1);
    const num2 = parseFloat(n2);
    setCont(num1*num2);
  }

  return(
    <View>
     <TextInput
    style={styles.input}
    placeholder="Valor do primeiro número"
    onChangeText={setn1}
    />

   <TextInput
    style={styles.input}
    placeholder="Valor do segundo número"
    onChangeText={setn2}
    />

    <Botoes titulo="Multiplicar" cor="green" funcao={Multiplicar} />



  <Text style={styles.numeroTexto}> O resultado da multiplicação é: {cont} </Text>
    </View>
  )
}

export default Multiplicador