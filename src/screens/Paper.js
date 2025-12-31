import React, { Component } from 'react';
import { Alert, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { StyleSheet } from 'react-native'
import { Icon, MD3Colors } from 'react-native-paper';

export default class Paper extends Component {
    render() {
        return (
            <View style={styles.container}>

                <Button
                    style={styles.button}
                    icon="camera"
                    mode="contained"
                    onPress={() => Alert.alert('Success')}>
                    Press me
                </Button>

                <Icon
                    source="camera"
                    color={MD3Colors.error50}
                    size={20}
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        padding: 20
    },
    button: {
        backgroundColor: 'red'

    }
})
