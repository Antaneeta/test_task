import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SignIn from "../screens/authentication/SignIn";
import SignUp from "../screens/authentication/SignUp";

const AuthStack = createStackNavigator();

export default function AuthNavigation({ navigation }) {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen name={'SignIn'} options={{headerTitle: 'Authentication', headerTitleAlign: 'center', headerShown: true}} component={SignIn}/>
            <AuthStack.Screen name={'SignUp'} options={{headerTitle: 'Authentication', headerTitleAlign: 'center', headerShown: true}} component={SignUp}/>
        </AuthStack.Navigator>
    );
}
