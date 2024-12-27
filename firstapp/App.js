import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, StyleSheet, View, ScrollView, Platform } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import Home from './components/Home';
import ContactUs from './components/ContactUs';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <PaperProvider>
      <SafeAreaProvider>
        <SafeAreaView>
          <KeyboardAvoidingView  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <ScrollView>
              <View style={styles.container}>
                <ContactUs />
                <StatusBar style="auto" />
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </SafeAreaProvider>
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
