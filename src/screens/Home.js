import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Home() {
    return (
        <View>
            <Text style={styles.title}>Home</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        color: 'red',
        textAlign: 'center',
        marginTop: 50,
        fontSize: 30,
        fontWeight: 'bold',
    },
});
