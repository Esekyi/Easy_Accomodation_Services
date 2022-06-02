import React, {useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Button } from 'react-native-paper';

const ViewScreen = () =>
{
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    return (
        <View style={styles.container}>
            <SafeAreaView>

            <Text>My New Home</Text>
            </SafeAreaView>
        </View>
    );
}

export default ViewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent:'center',
        
    },

}
)
