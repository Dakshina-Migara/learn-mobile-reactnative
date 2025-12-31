import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    Switch,
    Alert,
    ActivityIndicator,
    ImageBackground,
    Pressable,
    TextInput,
    Modal,
    SectionList,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    TouchableOpacity,
    TouchableHighlight,
    TouchableWithoutFeedback,
} from 'react-native';

export default function Home() {
    const [isEnabled, setIsEnabled] = useState(false);
    const [timesPressed, setTimesPressed] = useState(0);
    const [text, onChangeText] = useState('User Name');
    const [number, onChangeNumber] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [count, setCount] = useState(0);

    const toggleSwitch = () => setIsEnabled(prev => !prev);
    const incrementCount = () => setCount(prev => prev + 1);

    const image = { uri: 'https://images.unsplash.com/photo-1503264116251-35a269479413?w=800' };

    const DATA = [
        {
            title: 'Main Dishes',
            data: ['Pizza', 'Burger', 'Risotto'],
        },
    ];

    let textLog = '';
    if (timesPressed > 1) textLog = `${timesPressed}x onPress`;
    else if (timesPressed > 0) textLog = 'onPress';

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ImageBackground source={image} style={styles.image} resizeMode="cover">
                <ScrollView contentContainerStyle={styles.scrollContent}>
                    <Text style={styles.screenTitle}>Home</Text>

                    <Button title="Press me" onPress={() => Alert.alert('Simple Button pressed')} />

                    <Switch
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                        style={styles.switchStyle}
                    />

                    <ActivityIndicator size="large" color="#00ff00" style={styles.activityIndicator} />

                    <Pressable
                        onPress={() => setTimesPressed(prev => prev + 1)}
                        style={({ pressed }) => [
                            { backgroundColor: pressed ? 'rgb(210,230,255)' : 'white' },
                            styles.pressableButton,
                        ]}
                    >
                        {({ pressed }) => (
                            <Text style={styles.pressableText}>{pressed ? 'Pressed!' : 'Press Me'}</Text>
                        )}
                    </Pressable>

                    <View style={styles.logBox}>
                        <Text style={styles.logText}>{textLog}</Text>
                    </View>

                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={text}
                        placeholder="User Name"
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeNumber}
                        value={number}
                        placeholder="Password"
                        keyboardType="numeric"
                    />

                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => setModalVisible(false)}
                    >
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text style={styles.modalText}>Hello World!</Text>
                                <Pressable
                                    style={[styles.modalButton, styles.buttonClose]}
                                    onPress={() => setModalVisible(false)}
                                >
                                    <Text style={styles.modalButtonText}>Hide Modal</Text>
                                </Pressable>
                            </View>
                        </View>
                    </Modal>

                    <Pressable
                        style={[styles.modalButton, styles.buttonOpen]}
                        onPress={() => setModalVisible(true)}
                    >
                        <Text style={styles.modalButtonText}>Show Modal</Text>
                    </Pressable>

                    <SectionList
                        sections={DATA}
                        keyExtractor={(item, index) => item + index}
                        renderItem={({ item }) => (
                            <View style={styles.item}>
                                <Text style={styles.itemTitle}>{item}</Text>
                            </View>
                        )}
                        renderSectionHeader={({ section: { title } }) => (
                            <Text style={styles.header}>{title}</Text>
                        )}
                        style={styles.sectionList}
                    />

                    <TouchableOpacity style={styles.touchable} onPress={incrementCount}>
                        <Text style={styles.touchableText}>TouchableOpacity Press</Text>
                    </TouchableOpacity>

                    <TouchableHighlight
                        style={styles.touchable}
                        onPress={incrementCount}
                        underlayColor="#CCCCCC"
                    >
                        <Text style={styles.touchableText}>TouchableHighlight Press</Text>
                    </TouchableHighlight>

                    <TouchableWithoutFeedback onPress={incrementCount}>
                        <View style={styles.touchable}>
                            <Text style={styles.touchableText}>TouchableWithoutFeedback Press</Text>
                        </View>
                    </TouchableWithoutFeedback>

                    <View style={styles.countContainer}>
                        <Text style={styles.countText}>Count: {count}</Text>
                    </View>
                </ScrollView>
            </ImageBackground>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    image: {
        flex: 1,
        width: '100%',
        justifyContent: 'flex-start',
    },
    scrollContent: {
        padding: 20,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    screenTitle: {
        fontSize: 34,
        fontWeight: 'bold',
        color: '#FF0000',
        marginBottom: 25,
        textAlign: 'center',
        textShadowColor: '#AAA',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
    },
    switchStyle: {
        marginVertical: 15,
        transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }],
    },
    activityIndicator: {
        marginVertical: 15,
    },
    pressableButton: {
        borderRadius: 12,
        paddingVertical: 14,
        paddingHorizontal: 25,
        marginVertical: 12,
        borderWidth: 1,
        borderColor: '#ccc',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 3,
        backgroundColor: '#FFF',
    },
    pressableText: {
        fontSize: 17,
        fontWeight: '500',
        color: '#333',
        textAlign: 'center',
    },
    logBox: {
        marginVertical: 15,
        padding: 15,
        backgroundColor: 'rgba(255,255,255,0.9)',
        borderRadius: 12,
        width: '95%',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 3,
        elevation: 2,
    },
    logText: {
        fontSize: 16,
        color: '#111',
        fontWeight: '500',
    },
    input: {
        height: 50,
        borderWidth: 1,
        borderColor: '#bbb',
        paddingHorizontal: 15,
        width: '100%',
        marginVertical: 8,
        borderRadius: 12,
        backgroundColor: '#fff',
        fontSize: 16,
        color: '#333',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.3)',
    },
    modalView: {
        width: '85%',
        backgroundColor: '#fff',
        borderRadius: 22,
        paddingVertical: 35,
        paddingHorizontal: 30,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 6,
        elevation: 10,
    },
    modalText: {
        fontSize: 21,
        fontWeight: '500',
        marginBottom: 20,
        textAlign: 'center',
        color: '#333',
    },
    modalButton: {
        borderRadius: 14,
        paddingVertical: 14,
        paddingHorizontal: 30,
        marginVertical: 12,
        alignItems: 'center',
        justifyContent: 'center',
        width: '70%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 3,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    modalButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 17,
        textAlign: 'center',
    },
    sectionList: {
        width: '100%',
        marginTop: 20,
    },
    item: {
        backgroundColor: '#E6E6FA',
        paddingVertical: 20,
        paddingHorizontal: 18,
        marginVertical: 10,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
        elevation: 2,
    },
    header: {
        fontSize: 30,
        fontWeight: 'bold',
        backgroundColor: '#FFF',
        paddingVertical: 10,
        paddingHorizontal: 15,
        color: '#222',
    },
    itemTitle: {
        fontSize: 21,
        color: '#444',
        fontWeight: '500',
    },
    touchable: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#DDDDDD',
        paddingVertical: 14,
        paddingHorizontal: 22,
        borderRadius: 15,
        marginVertical: 12,
        width: '80%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 3,
        elevation: 3,
    },
    touchableText: {
        fontSize: 17,
        fontWeight: '500',
        color: '#111',
    },
    countContainer: {
        alignItems: 'center',
        paddingVertical: 20,
        backgroundColor: 'rgba(255,255,255,0.9)',
        borderRadius: 15,
        width: '90%',
        marginVertical: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2,
    },
    countText: {
        color: '#FF00FF',
        fontSize: 24,
        fontWeight: 'bold',
    },
});
