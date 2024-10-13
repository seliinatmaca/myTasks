import {Add} from 'iconsax-react-native';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const FloatActionButton = props => {
  return (
    <TouchableOpacity {...props} style={styles.container}>
      <Add size="32" color="#fff" />
    </TouchableOpacity>
  );
};

export default FloatActionButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    height: 70,
    borderRadius: 1000,
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#2ccce4',
  },
});
