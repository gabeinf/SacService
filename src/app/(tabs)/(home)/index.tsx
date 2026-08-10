import { router } from "expo-router";
import { FlatList, Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { listings } from '../../../../src/data/listings';

export default function Index() {

  const greeting = 'Hey'
  const user = 'Sam'
  return (
    <SafeAreaView style={styles.screen} edges={['top', 'left', 'right']}>
        <View style={styles.searchContainer}>
          <View style={styles.searchBubble}>
            <Text style={{color: 'gray'}}> Search for anything</Text>
          </View>
          <Image
          source={require('../../../../assets/images/tabIcons/explore.png')}
          />
          <Image
          source={require('../../../../assets/images/tabIcons/explore.png')}
          />
        </View>

      <View style={styles.contentHeader}>
        <View>
          <Text style={{fontSize: 16, fontWeight: 600}}>{greeting} {user}!</Text>
          <Text>Explore your next service</Text>
        </View>
      </View>

      <FlatList
      data={listings.slice(0,8)}
      numColumns={2}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Pressable
        style={({pressed}) => [{width: '50%'}, pressed && styles.listingFocused]}
        onPress={() => {
          router.push(`/listing/${item.id}`)
        }}
        >
        <View style={styles.listingContainer}>
          <Image
          source={item.image}
          style={styles.listingImage}
          />

          <View style={styles.contentFooterContainer}>
            <Text> {item.businessName} </Text>
            <Text> {item.name} </Text>
            <Text style={{fontWeight: 600}}> {item.price}$ </Text>
          </View>

        </View>
        </Pressable>

      )}
      />

    </SafeAreaView>

  )
}

const styles = StyleSheet.create({

  screen: {
    flex: 1,
  },
  contentHeader: {
    padding: 12
  },
  searchContainer: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    alignContent: 'flex-start',
    gap: 30
  },
  searchBubble: {
    height: 30,
    width: 300,
    backgroundColor: 'white',
    marginLeft: 10,
    borderRadius: 40,
    alignItems: 'flex-start',
    justifyContent: 'center'
  },

  listingContainer: {
    alignContent: 'center',
    paddingHorizontal: 12,
    paddingBottom: 12,
    
    
  },
  listingImage: {
    height: 300,
    width: '100%',
    borderRadius: 12,
    paddingBottom: 6
  },
  contentFooterContainer: {
    justifyContent: 'space-between',
    flex: 1,
  },
  listingFocused: {
    opacity: 0.5
  }
})
