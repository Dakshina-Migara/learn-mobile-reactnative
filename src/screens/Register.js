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

export default function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Register</Text>

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

              <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />

            <Pressable onPress={() => Linking.openURL('https://www.google.com')}>
                <Text style={styles.login}>Go to Login</Text>
            </Pressable>

            <Pressable style={styles.button} onPress={() => Alert.alert('Register Success')}>
                <Text style={styles.buttonText}>Register Here</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: '#dcc7c7ff',
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
    login: {
        fontSize: 15,
        alignSelf: 'flex-end',
        marginVertical: 10,
        fontWeight: 'bold',
        color: 'red',
    },
    button: {
        height: 50,
        backgroundColor: 'red',
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
