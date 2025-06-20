import { SafeAreaView, StyleSheet } from "react-native";
import AppScreen from "./src/screens/Index";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <AppScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
