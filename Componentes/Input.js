import { View, Text, TextInput } from 'react-native';
import styles from '../Styles/Styles';

export default function Input({ label, placeholder, onChange }) {
  return (
    <View style={{ margin: 15 }}>
      <Text>{label}</Text>
      <TextInput
        style={styles.caixaDeTexto}
        placeholder={placeholder}
        placeholderTextColor="#6f6f6f"
        keyboardType="numeric"
        onChangeText={onChange}
      />
    </View>
  );
}