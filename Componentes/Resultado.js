import { View, Text } from 'react-native';
import styles from '../Styles/Styles';

export default function Resultado({ valor }) {
  return (
    <View style={{ margin: 15 }}>
      <Text style={styles.resposta}>
        Total da soma: {valor}
      </Text>
    </View>
  );
}