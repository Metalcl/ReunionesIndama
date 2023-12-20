import { StyleSheet, Text, View, Image, Button, TouchableOpacity, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App({ promptAsync }) {

    return (
        // <View style={styles.background}>
        //     <LinearGradient
        //         style={styles.containerLogo}
        //         colors={['#3B6098', '#11294E']}
        //         start={{ x: 0, y: 0 }}
        //         end={{ x: 1, y: 1 }}
        //     >
        //         <View style={styles.containerLogoText}>
        //             <Image
        //                 source={require('../assets/Indama_Login.png')}
        //                 resizeMode='contain'
        //             />
        //             <View style={styles.containerTextLogin}>
        //                 <Text style={styles.title}>Reuniones</Text>
        //                 <Text style={styles.subtitle}>Indama</Text>
        //             </View>
        //         </View>
        //     </LinearGradient>

        //     <View style={styles.box}>
        //         {/* ACA VA EL FORMULARIO DE LOGIN */}
        //         <Text style={styles.titleLogin}>Iniciar sesión</Text>
        //         <Button
        //             title='Iniciar sesión con Google'
        //         />
        //     </View>


        // </View>
        <SafeAreaView
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
            {/* <Ionicons name="logo-firebase" size={100} color="#FFA611" /> */}
            <Text style={{ fontSize: 32, fontWeight: "bold" }}>
                Sign In with{" "}
                <Text style={{ color: "#4285F4" }}>
                    G<Text style={{ color: "#EA4336" }}>o</Text>
                    <Text style={{ color: "#FBBC04" }}>o</Text>
                    <Text style={{ color: "#4285F4" }}>g</Text>
                    <Text style={{ color: "#34A853" }}>l</Text>
                    <Text style={{ color: "#EA4336" }}>e</Text>
                </Text>
            </Text>
            <Text style={{ fontSize: 32, fontWeight: "bold" }}>And Firebase</Text>
            <TouchableOpacity
                style={{
                    backgroundColor: "#4285F4",
                    width: "90%",
                    padding: 10,
                    borderRadius: 15,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 15,
                    marginTop: 80,
                    marginBottom: 150,
                }}
                onPress={() => promptAsync()}
            >
                {/* <AntDesign name="google" size={30} color="white" /> */}
                <Text style={{ fontWeight: "bold", color: "white", fontSize: 17 }}>
                    Sign In with Google
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%',
        backgroundColor: '#f0f2fa',
    },
    containerLogo: {
        width: '100%',
        height: '45%',
        borderBottomLeftRadius: 120,
        borderBottomRightRadius: 120,
    },
    containerLogoText: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 80,
    },
    containerTextLogin: {
        paddingLeft: 15,
    },
    title: {
        color: '#fff',
        fontSize: 40,
        fontWeight: 'bold',
    },
    subtitle: {
        color: '#fff',
        fontSize: 25,
        fontWeight: 'regular',
    },
    box: {
        backgroundColor: '#fff',
        height: 210,
        width: 270,
        borderRadius: 20,
        position: 'fixed',
        position: 'absolute',
        top: '45%',
        left: '43%',
        marginLeft: -100,
        marginTop: -100,
        elevation: 4,
        display: 'flex',
        alignItems: 'center',
        paddingTop: 38,
    },
    titleLogin: {
        color: '#0f284e',
        fontSize: 35,
        fontWeight: 'bold',
    }
});

