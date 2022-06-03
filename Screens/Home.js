import React, { useState, useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList, SafeAreaView, TouchableWithoutFeedback, ActivityIndicator } from 'react-native';
import { Alert } from "react-native";
import SinglePage from '../Screens/SinglePage'


function Home({navigation})
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
  const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const handlePress = (item) =>
    {
        navigation.navigate("SinglePage", item, {data:data} )
    }
  const loadData = () =>
  {
    fetch("https://easy-apartment14.herokuapp.com/api/house-list/", {
      "method": "GET",
      "headers": {
        Accept: 'application/json',
        'Content-type': 'application/json',
      }
    })
      .then(response => response.json())
      .then(data =>
      {
        setData(data)
        setLoading(false)
      })
      .catch(err =>
      {
        console.log("error", err);
      });
  }
  useEffect(() =>
  {
    loadData();
  }, [])
  const renderData = (item) =>
  {
      return (
          <TouchableWithoutFeedback onPress={()=> handlePress(item)}>  
      <View style={styles.cardDesign}>
                  <View style={{ height: 250 }}>
                      
                      <Image
                          source={{
                              uri: 'https://easy-apartment14.herokuapp.com' + item.apartment_img1
                          }}
                          style={{resizeMode:'cover',height:'100%',maxWidth:'100%', width:280}}
                      />
                      
                  {visible ? <ActivityIndicatorElement /> : null}
            </View>
            <Text style={{padding: 10, textTransform:'capitalize'}}>{item.apartment_location}</Text>
                  <Text style={{textTransform:'capitalize'}}>{item.apartment_describ}</Text>
                  <View style={{justifyContent:'flex-end', backgroundColor:'#4599E7', marginTop:5}}>
                      <Text style={{ padding: 10 }}>$ {item.apartment_price}</Text>
                      
                  </View>
            
                  <StatusBar style="auto" />
        </View>
        </TouchableWithoutFeedback>
    )
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList 
        style={{ paddingHorizontal: 5, paddingBottom: 100, flex: 1,  }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 10,
          // paddingBottom: 1,
        }}
        numColumns={2}
              data={data}
        renderItem={({ item }) =>
        {
          return renderData(item)
        }}
              onRefresh={() => loadData()}
        refreshing={loading}
        keyExtractor={item => `${item.id}`}
          />
    </SafeAreaView>
  )
  
}


const styles = StyleSheet.create({
  container: {
    fontSize: 20,
    color:'#c4c4c4'
  },
  button: {
    padding: 10,
    marginVertical: 15,
    backgroundColor:'#0645AD'
  },
  cardDesign: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.2,
    borderColor: 'rgb(234,231,233',
    borderRadius: 6,
    marginHorizontal: 5,
    marginBottom: 10,
    padding: 10
  }
});
export default Home;