import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, ActivityIndicator, View } from 'react-native';
import { WebView } from 'react-native-webview';

const MainScreen = () =>
{
    const [visible, setVisible] = useState(false);
    const ActivityIndicatorElement = () =>
    {
        return (
            <View style = {styles.ActivityIndicatorStyling}>
                <ActivityIndicator color= 'gray' size="large" />
            </View>
        )
    }
    return (

        <WebView
            useWebKit={true}
            source=
            {{ uri: "https://easy-apartment14.herokuapp.com/" }}
            // JavaScript Support
            javaScriptEnabled={true}
            //Cache
            domStorageEnabled={true}
            onLoadStart={() => setVisible(true)}
            onLoad={() => setVisible(false)}
            startInLoadingState={true}
            // style={{ marginTop: 20 }}
        />
            
        // {visible ? <ActivityIndicatorElement /> : null}

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ActivityIndicatorStyling: {
        flex: 1,
        position: 'absolute',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 'auto',
        marginTop: 'auto',
        left:'auto',
        Right:'auto',
        Top:'auto',
        Bottom: 'auto',
        justifyContent:'center',
    }
})
export default MainScreen;