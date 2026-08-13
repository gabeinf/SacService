import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { listings } from "@/data/listings";
import Ionicons from '@expo/vector-icons/Ionicons';
import { router, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ListingDetails () {


    const { id } = useLocalSearchParams();

    const listing = listings.find((l) => l.id === id)

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
        <View style={styles.imageWrapper}>
            <Image source={listing?.image} style={styles.image}/>
        </View>

      <View style={styles.quickDetails}>

        <Text style={styles.title}>{listing?.name}</Text>
        <Text style={styles.subheading}>{listing?.responseTime}</Text>
        <Text style={styles.description}>${listing?.price}</Text>
      </View>

      
      <View style={styles.quickButtons}>
          
          <Pressable
          onPress={() => console.log("Book pressed")}
          style={({pressed}) => [
            styles.button,
            pressed && { opacity: 0.5 },
          ]}
          >
          
            <Ionicons name="calendar-outline" size={18} color="black" />
            <Text>Book</Text>
          
          </Pressable>

          <Pressable
          onPress={() => console.log("Contact pressed")}
          style={({pressed}) => [
            styles.button,
            pressed && { opacity: 0.5 },
          ]}
          >
            <Ionicons name="mail-outline" size={18} color="black" />
            <Text>Contact</Text>
          </Pressable>

          <Pressable
          // onPress={() => router.push(`/`)}
          style={({pressed}) => [
            styles.button,
            pressed && { opacity: 0.5 },
          ]}
          >
            <Ionicons name="share-outline" size={18} color="black" />
            <Text>Share</Text>
          </Pressable>

          <Pressable
          onPress={() => console.log("More pressed")}
          style={({pressed}) => [
            styles.button,
            pressed && { opacity: 0.5 },
          ]}
          >
            <Ionicons name="ellipsis-horizontal" size={18} color="black" />
            <Text>More</Text>
          </Pressable>
          
          
        </View>
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
    width: '100%'
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subheading: {
    fontSize: 18,
    fontWeight: 'medium',
    color: '#636262'
  },
  description: {
    fontSize: 16,
    fontWeight: 'light'
  },
  imageWrapper: {
    width: '100%',
    aspectRatio: 4/5,
    padding: 24,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 24
  },
  quickDetails: {
    paddingLeft: 24,

  },
  optionsContainer: {
    width: '100%',
  },
  quickButtons: {
    padding: 24,
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  button: {
    height: 50,
    width: 80,
    backgroundColor: '#c8c6c647',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12
  }
}) 