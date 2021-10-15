import React, {useContext} from "react";
import {StyleSheet, TouchableOpacity} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import SignIn from "../screens/authentication/SignIn";
import Home from "../screens/HomeScreen";
import {Text} from "react-native";
import {AuthContext} from "./AuthProvider";

const AppStack = createStackNavigator();

export default function AppNavigation({ navigation }) {

    const {logout} = useContext(AuthContext);
    const onSignOut = () => {
        logout();
    }

    return (
        <AppStack.Navigator>
            <AppStack.Screen name={'Home'} component={Home} options={{
                headerTitle: 'Tech Stack',
                headerTitleAlign: 'center',
                headerRight: () => (
                    <TouchableOpacity onPress={onSignOut}>
                        <Text style={styles.button}>sign out</Text>
                    </TouchableOpacity>
                ),
            }}/>
        </AppStack.Navigator>
    );
}

const styles = StyleSheet.create({
    button: {
        marginRight: 20,
        color: '#0034ff'
    }
})
