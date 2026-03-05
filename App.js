import { useState } from 'react';
import { View, Text } from 'react-native';
import styles from './Styles/Styles';

import Input from './Componentes/Input';
import Botao from './Componentes/Botao';
import Resultado from './Componentes/Resultado';

export default function App() {

  const [n1, setN1] = useState('');
  const [n2, setN2] = useState('');
  const [resultado1, setResultado1] = useState(0);
  const [resultado2, setResultado2] = useState(0);
  const [resultado3, setResultado3] = useState(0);
  const [resultado4, setResultado4] = useState(0);

  const operacoes = () => {
    const r1 = parseInt(n1) + parseInt(n2);
    setResultado1(r1);

    const r2 = parseInt(n1) - parseInt(n2);
    setResultado2(r2);

    const r3 = parseInt(n1) * parseInt(n2);
    setResultado3(r3);

    const r4 = parseInt(n1) / parseInt(n2);
    setResultado4(r4);
  };

  return (
    <View style={styles.tudo}>

      <Text style={styles.titulo}>
        Fazendo 4 Operações matemáticas
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
        titulo="calcular"
        onPress={operacoes}
      />

      <Resultado 
      v1={resultado1}
      v2={resultado2}
      v3={resultado3}
      v4={resultado4} 
      />

    </View>
  );
}