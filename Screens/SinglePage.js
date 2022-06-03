import React from 'react';
import { View, SafeAreaView,ScrollView } from 'react-native';
import { Divider, Button, Card, Title, Paragraph } from 'react-native-paper';
import ViewScreen from '../Screens/ViewScreen'


const SinglePage = ({navigation, route, item}) =>
{
    const { id, apartment_img1,
        apartment_describ, apartment_location,
        apartment_price, rent_period,
        apartment_img2, apartment_img3,
        apartment_img4, apartment_img5
    } = route.params;
    
    return (
        <View>
            <SafeAreaView>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}>
            <Card>
                <Card.Content>
                    <Title style={{fontWeight:'bold', marginBottom:20}}>{apartment_describ}</Title>
                    <Paragraph style={{ fontSize: 18 }}>location: {apartment_location}</Paragraph>
                    <Paragraph style={{ fontSize: 18 }}>location: {rent_period}</Paragraph>
                </Card.Content>
                    
                <Card.Cover source={{ uri: 'https://easy-apartment14.herokuapp.com' + apartment_img1 }} />
                        <Card.Content>
                            <Paragraph style={{ fontSize: 20, fontWeight: 'bold', paddingTop: 10, textAlign: 'center', paddingBottom: 20 }}>Interior View</Paragraph> 
                            <Divider />
                            <View style={{flexDirection:'row'}}>
                                <Card.Cover source={{ uri: 'https://easy-apartment14.herokuapp.com' + apartment_img2 }} style={{width:'45%', marginTop:20, marginRight:'10%'}} />
                                <Card.Cover source={{ uri: 'https://easy-apartment14.herokuapp.com' + apartment_img3 }} style={{width:'45%', marginTop:20}} />
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <Card.Cover source={{ uri: 'https://easy-apartment14.herokuapp.com' + apartment_img5 }} style={{width:'45%', marginTop:20, marginRight:'10%'}} />
                                <Card.Cover source={{ uri: 'https://easy-apartment14.herokuapp.com' + apartment_img4 }} style={{width:'45%', marginTop:20, marginBottom:20}} />
                            </View>
                            <Paragraph style={{ fontSize: 20, fontWeight:'400', paddingTop:10, textAlign:'center', marginBottom:20 }}>Book This Appartment for ${ apartment_price}</Paragraph> 
                        </Card.Content>
                            <Divider />


                        <Card.Actions>
                            <Button onPress={()=> navigation.navigate('ViewScreen')} style={{padding: 10}}>Continue to website</Button>
                        </Card.Actions>
                        
                    </Card>
                    </ScrollView>
             </SafeAreaView>
        </View>
        );
}


export default SinglePage;