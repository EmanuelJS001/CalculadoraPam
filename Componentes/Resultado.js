import { View, Text } from 'react-native';
import styles from '../Styles/Styles';

export default function Resultado({ v1, v2, v3, v4 }) {
  return (
    <View style={{ margin: 5 }}>
      <Text style={styles.resposta}>Resultado da soma: {v1}</Text>
      <Text style={styles.resposta}>Resultado da subtração: {v2}</Text>
      <Text style={styles.resposta}>Resultado da multiplição: {v3}</Text>
      <Text style={styles.resposta}>Resultado da divisão: {v4}</Text>
    </View>
  );
}