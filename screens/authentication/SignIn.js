import React, {useContext, useState} from "react";
import {Alert, Button, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {AuthContext} from "../../navigation/AuthProvider";

const SignIn = ({navigation}) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');



    const onUsernameChange = text => {
        setUsername(text);
    }

    const onPasswordChange = text => {
        setPassword(text);
    }

    const {login} = useContext(AuthContext);

    const onSubmit = () => {
        login(username, password);
    }
    return (
        <View style={styles.container}>
            <View style={{
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.23,
                shadowRadius: 2.62,
                elevation: 10
            }}>
                <View style={styles.inputContaioner}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput
                        keyboardType={'email-address'}
                        value={username}
                        onChangeText={onUsernameChange}
                        placeholder={"user@gmail.com"}
                        style={styles.input}
                    />
                </View>
                <View style={styles.inputContaioner}>
                    <Text style={styles.label}>Password</Text>
                    <TextInput value={password} secureTextEntry={true} onChangeText={onPasswordChange} placeholder={"password"} style={styles.input}/>
                </View>
                <TouchableOpacity onPress={onSubmit}>
                    <View style={styles.btnContainer}><Text style={styles.button}>Log In</Text></View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                    <View style={styles.btnContainer}><Text style={styles.button}>Register</Text></View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SignIn;

const styles = StyleSheet.create({
    container: {
        margin: 10,
        backgroundColor: '#fff',
    },
    inputContaioner: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingLeft: 20,
        paddingRight: 20,
        borderColor: '#a2a1a1',
        borderBottomWidth: 0.5
    },
    label: {
        flex: 2
    },
    input: {
        flex: 3
    },
    button: {
        color: '#00b8ef',
        margin: 10,
        textAlign: "center",
        borderWidth: 1,
        borderColor: '#00b8ef',
        borderRadius: 5,
        padding: 7,
    },
    btnContainer: {
        borderColor: '#a2a1a1',
        borderBottomWidth: 0.5
    }
});
