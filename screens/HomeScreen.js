import React, {useEffect, useState} from "react";
import {FlatList, StyleSheet, Text, View} from "react-native";
import axios from "axios";
import Item from "../components/Item";

const Home = () => {

    const [data, setData] = useState([]);

    useEffect(async () => {
        let mounted = true
        await axios.get('https://gist.githubusercontent.com/shanindur/384ef1b45802faf23b1793ae62cc7d77/raw/28f7b33c7c5b6608a7851859a11f15f4cfe30869/LibraryList.json.json')
            .then(res => {
                if(mounted){
                    setData(res.data);
                }
            }).catch(error => console.log(error))

        return () => {
            mounted = false
        }
    }, []);

    return (
        <View style={styles.container}>
            {/*<ExpandableListView*/}
            {/*    data={CONTENT}*/}
            {/*    customChevron={() => <></>}*/}
            {/*    itemContainerStyle={{*/}
            {/*        backgroundColor: '#fff',*/}
            {/*        borderBottomWidth: 0.5,*/}
            {/*        borderColor: '#8d8d8d',*/}
            {/*        paddingLeft: 0*/}
            {/*    }}*/}
            {/*    animated={false}*/}
            {/*/>*/}
            <FlatList
                data={data}
                renderItem={({ item }) => <Item item={item} />}
                keyExtractor={item => item.title}
            />
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    }
});
