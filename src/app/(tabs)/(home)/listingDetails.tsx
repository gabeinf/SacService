import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

 import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ListingDetails () {
    return (

    <>
    <SafeAreaView style={styles.screen}>
      <Pressable
        style={styles.backButton}
        onPress={() => router.back()}
      >
        <Text style={styles.backText}>← Back</Text>
      </Pressable>

      <View style={styles.container}>
        <Text style={styles.title}>Listing Details</Text>
      
    
    
        <Text>
            Hi
        </Text>
    </View>
    </SafeAreaView >
    
    </>
    )
}

const styles = StyleSheet.create({
    screen: {
    flex: 1,
  },

  backButton: {
    alignSelf: "flex-start",
    paddingHorizontal: 20,
    paddingVertical: 12,
    
  },

  backText: {
    fontSize: 18,
    fontWeight: "600",
  },

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
})