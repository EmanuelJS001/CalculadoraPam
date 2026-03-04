import { useState } from 'react';
import { View, Text } from 'react-native';
import styles from './Styles/Styles';

import Input from './Componentes/Input';
import Botao from './Componentes/Botao';
import Resultado from './Componentes/Resultado';

export default function App() {

  const [n1, setN1] = useState('');
  const [n2, setN2] = useState('');
  const [resultado, setResultado] = useState(0);

  const multiplicar = () => {
    const r = parseInt(n1) * parseInt(n2);
    setResultado(r);
  };

  return (
    <View style={styles.tudo}>

      <Text style={styles.titulo}>
        multiplicando dois Valores
      </Text>

      <Input
        label="Primeiro número:"
        placeholder="Digite aqui o primeiro número"
        onChange={setN1}
      />

      <Input
        label="Segundo número:"
        placeholder="Digite aqui o segundo número"
        onChange={setN2}
      />

      <Botao
        titulo="multiplicar"
        onPress={multiplicar}
      />

      <Resultado valor={resultado} />

    </View>
  );
}