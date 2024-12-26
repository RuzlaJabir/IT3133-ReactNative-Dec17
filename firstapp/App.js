import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaView } from 'react-native-web';
import Home from './components/Home';
import { ScrollView } from 'react-native-web';
import ContactUs from './components/ContactUs';

export default function App() {
  return (
    <PaperProvider>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>
            <ContactUs />
            <StatusBar style="auto" />
          </View>
        </ScrollView>
      </SafeAreaView>
    </PaperProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
