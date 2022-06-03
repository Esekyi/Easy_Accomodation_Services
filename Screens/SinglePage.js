import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';


const SinglePage = () => (
    <SafeAreaView>
    <Card>
        <Card.Title title="Card Title" subtitle="Card Subtitle" />
        <Card.Content>
            <Title>Card title</Title>
            <Paragraph>Card content</Paragraph>
        </Card.Content>
            
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
        </Card.Actions>
    </Card>
     </SafeAreaView>
);

export default SinglePage;