import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaView } from 'react-native-web';
import Home from './components/Home';
import { ScrollView } from 'react-native-web';

export default function App() {
  return (
    <PaperProvider>
      
        <ScrollView>
        <SafeAreaView>
          <View style={styles.container}>
            <Home />
            <StatusBar style="auto" />
          </View>
          </SafeAreaView>
        </ScrollView>
      
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
