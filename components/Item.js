import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

const Item = ({item}) => {
    const [visibility, setVisibility] = React.useState(false);

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => {
                setVisibility(!visibility)
            }}>
                <Text style={styles.title}>{item.title}</Text>
            </TouchableOpacity>
            { visibility ? <Text style={styles.description}>{ item.description }</Text> : <></> }
        </View>
    )
}

export default Item;

const styles = StyleSheet.create({
    container: {
        padding: 8
    },
    title: {
        borderBottomWidth: 0.5,
        borderColor: '#b4b4b4',
        paddingLeft: 15,
        fontSize: 16,
        paddingBottom: 5
    },
    description: {
        paddingTop: 10
    }

});
