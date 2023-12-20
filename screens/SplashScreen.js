import { Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {

    return (
        <LinearGradient
            style={styles.background}
            colors={['#3B6098', '#11294E']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
        >
            <Image
                style={styles.image}
                source={require('../assets/Indama_Splash.png')}
                resizeMode='contain'
            />
        </LinearGradient>
    );
};
const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '50%',
        height: '60%',
    },
});