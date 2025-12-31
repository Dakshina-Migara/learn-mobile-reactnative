import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Alert,
    Pressable,
    Linking
} from 'react-native';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>

            <TextInput
                style={styles.input}
                placeholder="User Name"
                value={username}
                onChangeText={setUsername}
                autoCapitalize="none"
            />

            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />

            <Pressable onPress={() => Linking.openURL('https://www.google.com')}>
                <Text style={styles.register}>Go to register</Text>
            </Pressable>

            <Pressable style={styles.button} onPress={() => Alert.alert('Login Success')}>
                <Text style={styles.buttonText}>Login Here</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: '#d9ddecff',
    },
    title: {
        fontSize: 48,
        marginBottom: 40,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    input: {
        height: 50,
        marginVertical: 12,
        borderWidth: 1,
        borderColor: '#999',
        paddingHorizontal: 15,
        borderRadius: 10,
        fontSize: 16,
    },
    register: {
        fontSize: 15,
        alignSelf: 'flex-end',
        marginVertical: 10,
        fontWeight: 'bold',
        color: 'blue',
    },
    button: {
        height: 50,
        backgroundColor: 'blue',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
});
