import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Divider, TextInput, Button } from 'react-native-paper';

export default function ContactUs() {
    const [name,setName] = useState();

    return (
        <>
            <View style={styles.header}>
                <Text variant="headlineLarge">Contact Us</Text>
                <Divider />
            </View>
            <View style={styles.body}>
                <Text variant='bodyMedium'>
                Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document.
                To make your document look professionally produced, Word provides header, footer, cover page, and text box designs that complement each other. For example, you can add a matching cover page, header, and sidebar. Click Insert and then choose the elements you want from the different galleries.
                Themes and styles also help keep your document coordinated. When you click Design and choose a new Theme, the pictures, charts, and SmartArt graphics change to match your new theme. When you apply styles, your headings change to match the new theme.
                Save time in Word with new buttons that show up where you need them.
                </Text>
                <View style={styles.input}>
                    <TextInput label="Name" mode='outlined' value={name} onChangeText={setName}/>
                </View>
                <View style={styles.input}>
                    <TextInput label="Email" mode='outlined' keyboardType='email-address'/>
                </View>
                <View style={styles.input}>
                    <TextInput label="Phone No" mode='outlined' keyboardType='phone-pad'/>
                </View>
                <View style={styles.input}>
                    <TextInput label="Message" mode='outlined' multiline numberOfLines={5}/>
                </View>
                <View style={styles.input}>
                     <Button icon="camera" mode="contained">Contact</Button>
                </View>

                <Text>{name}</Text>
            </View>
            <View style={styles.footer}>
                <Text>Myapp © 2024</Text>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    header: {
        flex: 3,
        width: '100%',
        alignItems: 'center',
        padding: 10,
        marginBottom: 10
    },
    body: {
        flex: 30,
        width: '100%'
    },
    footer: {
        flex: 2,
        width: '100%',
        alignItems: 'center'
    },
    input:{
        padding: 8,
        marginBottom: 7
    }
});