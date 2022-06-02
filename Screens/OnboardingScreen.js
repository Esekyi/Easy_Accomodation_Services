import React from 'react';
import { SafeAreaView, StyleSheet, Dimensions, StatusBar, FlatList, View, Image, Text, TouchableOpacity } from 'react-native';


const { width, height } = Dimensions.get('window');

const COLORS = { primary: '#4599E7', white: '#fff' };

const slides = [
    {
        id: '101',
        image: require('../images/Asset1.png'),
        title: 'Welcome To Easy Accomodation Service 🤗',
        subtitle: 'Let us help you find a better home or apartment you dreamed of!',

    },
    {
        id: '102',
        image: require('../images/dreamHome.png'),
        title: 'Find Your Dream Home 🏡',
        subtitle: 'Ready to start searching listings and hitting open houses?',

    },
    {
        id: '103',
        image: require('../images/searching.png'),
        title: 'Start Searching 👀',
        subtitle: 'let us help you find a better apartment!',

    },
];
const Slide = ({ item }) =>
{
    return (
        <View style={{ alignItems: 'center', width }}>
            <Image
                source={item.image}
                style={
                    {
                        height: '75%',
                        width: width *0.95 ,
                        resizeMode: "contain"
                    }}
            />
            {/* <View style={{flexDirection:'row'}}> */}
            <Text style={styles.title} >
                {item.title}
            </Text>

                <Text style={styles.subtitle} >
                    {item.subtitle}
                </Text>
            {/* </View> */}
        </View>
    );
}

const OnboardingScreen = ({ navigation }) =>
{
    const [activeSlideIndex, setActiveSlideIndex] = React.useState(0);
    const ref = React.useRef(null);
    const Footer = () =>
    {
        return (
            <View style={{
                height: height * 0.25,
                justifyContent: 'space-between',
                paddingHorizontal: 20,
            }}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    marginTop: 20,
                }}>
                    {slides.map((_, index) =>
                        <View key={index} style={[styles.SlideIndicator,
                        activeSlideIndex == index && {
                            backgroundColor: COLORS.white,
                            width: 25,
                        },
                        ]} />
                    )}
                </View>
                <View style={{ marginBottom: 20 }}>
                    {
                        activeSlideIndex == slides.length - 1 ? 
                    <View style={{ height: 50 }}>
                        <TouchableOpacity style ={[styles.Button]} onPress={() => navigation.replace("Home")}>
                            <Text style={{fontWeight: 'bold', fontSize: 15}}>GET STARTED</Text>
                        </TouchableOpacity>
                    </View> : 
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity style ={[styles.Button, {backgroundColor: 'transparent', borderWidth: 1, borderColor: COLORS.white}]} onPress={skip}>
                            <Text style={{fontWeight: 'bold', fontSize: 15, color: COLORS.white}}>SKIP</Text>
                        </TouchableOpacity>
                        <View style={{width: 15}} />
                        <TouchableOpacity style ={[styles.Button]} onPress={GoToNextSlide}>
                            <Text style={{fontWeight: 'bold', fontSize: 15}}>NEXT</Text>
                        </TouchableOpacity>
                    </View>
                    }
                </View>
            </View>
        );
    };
    const UpdateActiveSlideIndex = (e) =>
    {
        const contentOffsetX = e.nativeEvent.contentOffset.x;
        const activeIndex = Math.round(contentOffsetX / width)
        setActiveSlideIndex(activeIndex);
    };
    const GoToNextSlide = () =>
    {
        const NextSlideIndex = activeSlideIndex + 1;
        if (NextSlideIndex != slides.length)
        {
            const offset = NextSlideIndex * width;
            ref?.current?.scrollToOffset({ offset });
            setActiveSlideIndex(NextSlideIndex);
        }
    };
    const skip = () =>
    {
        const lastSlideIndex = slides.length - 1;
        const offset = lastSlideIndex * width;
        ref?.current?.scrollToOffset({ offset });
        setActiveSlideIndex(lastSlideIndex);


    };
    return (
        < SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
            <StatusBar backgroundColor={COLORS.primary} />
            <FlatList
                ref={ref}
                onMomentumScrollEnd={UpdateActiveSlideIndex}
                pagingEnabled
                data={slides}
                contentContainerStyle={{ height: height * 0.65 }}
                horizontal
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => <Slide item={item} />}
            />
            <Footer />
        </SafeAreaView >
        
    );
};

const styles = StyleSheet.create({
    title: {
        color: COLORS.white,
        fontSize: 22,
        marginTop: 20,
        flex:1,
        fontWeight: 'bold',
        textAlign: 'center',
        
    },
    subtitle: {
        color: COLORS.white,
        fontSize: 17,
        marginTop: 10,
        maxWidth: '70%',
        textAlign: 'center',
        lineHeight: 23,
    },
    SlideIndicator: {
        height: 2.5,
        width: 10,
        backgroundColor: '#888888',
        marginHorizontal: 3,
        borderRadius: 2,
    },
    Button: {
        flex: 1,
        height: 50,
        borderRadius: 5,
        backgroundColor: COLORS.white,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
export default OnboardingScreen;