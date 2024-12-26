import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Divider, TextInput } from 'react-native-paper';

export default function ContactUs() {
    const [name,setName] = useState();

    return (
        <>
            <View style={styles.header}>
                <Text variant="headlineLarge">Contact Us</Text>
                <Divider />
            </View>
            <View style={styles.body}>
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
        flex: 25,
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