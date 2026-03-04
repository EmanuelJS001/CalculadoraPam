import { TouchableOpacity, Text } from 'react-native';
import styles from '../Styles/Styles';

export default function Botao({ titulo, onPress }) {
  return (
    <TouchableOpacity
      style={styles.botao}
      onPress={onPress}
      activeOpacity={0.5}
    >
      <Text style={styles.textoBotao}>{titulo}</Text>
    </TouchableOpacity>
  );
}