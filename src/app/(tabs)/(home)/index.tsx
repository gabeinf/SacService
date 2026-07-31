import { useState } from "react";
import { Image, LayoutChangeEvent, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";



const image1 = require("../../../../assets/ListingImages/1.jpg")
const image2 = require("../../../../assets/ListingImages/2.jpg")
const image3 = require("../../../../assets/ListingImages/3.jpg")
const image4 = require("../../../../assets/ListingImages/4.jpg")
const image5 = require("../../../../assets/ListingImages/5.jpg")
const image6 = require("../../../../assets/ListingImages/6.jpg")
const image7 = require("../../../../assets/ListingImages/7.jpg")
const image8 = require("../../../../assets/ListingImages/8.jpg")

const image1Details = Image.resolveAssetSource(image1);
const image2Details = Image.resolveAssetSource(image2);
const image3Details = Image.resolveAssetSource(image3);
const image4Details = Image.resolveAssetSource(image4);
const image5Details = Image.resolveAssetSource(image5);
const image6Details = Image.resolveAssetSource(image6);
const image7Details = Image.resolveAssetSource(image7);
const image8Details = Image.resolveAssetSource(image8);

const listings = [
  {
    image: image1,
    aspectRatio: image1Details.width / image1Details.height
  },
  {
    image: image2,
    aspectRatio: image2Details.width / image2Details.height
  },
  {
    image: image3,
    aspectRatio: image3Details.width / image3Details.height
  },
  {
    image: image4,
    aspectRatio: image4Details.width / image4Details.height
  },
  {
    image: image5,
    aspectRatio: image5Details.width / image5Details.height
  },
  {
    image: image6,
    aspectRatio: image6Details.width / image6Details.height
  },
  {
    image: image7,
    aspectRatio: image7Details.width / image7Details.height
  },
  {
    image: image8,
    aspectRatio: image8Details.width / image8Details.height
  },
];

// Bounds for how tall/wide a single image is allowed to render.
// 0.66 ≈ a fairly tall portrait (2:3), 1.5 ≈ a fairly wide landscape (3:2).
const MIN_ASPECT_RATIO = 0.66;
const MAX_ASPECT_RATIO = 1.5;

function clampAspectRatio(ratio: number, min: number, max: number): number {
  return Math.min(Math.max(ratio, min), max);
}

function distributeMasonry<T extends { aspectRatio: number }>(
  items: T[],
  numColumns: number
): T[][] {
  const columns: T[][] = Array.from({ length: numColumns }, () => []);
  const columnHeights = new Array(numColumns).fill(0);

  for (const item of items) {
    const shortestIndex = columnHeights.indexOf(Math.min(...columnHeights));
    columns[shortestIndex].push(item);
    columnHeights[shortestIndex] += 1 / item.aspectRatio;
  }

  return columns;
}

const [leftColumn, rightColumn] = distributeMasonry(listings, 2);

export default function Index() {
  // Store the measured pixel width of a single column once RN tells us.
  const [columnWidth, setColumnWidth] = useState<number>(0);

  const handleColumnLayout = (e: LayoutChangeEvent) => {
    setColumnWidth(e.nativeEvent.layout.width);
  };

  return (

    <SafeAreaView style={styles.screen}>

    <View style={styles.header}>
      <Text style={styles.headerText}>SacService</Text>
    </View>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.columns}>
          <View style={styles.column} onLayout={handleColumnLayout}>
            {columnWidth > 0 && leftColumn.map((listing, index) => {
              const clamped = clampAspectRatio(
                listing.aspectRatio,
                MIN_ASPECT_RATIO,
                MAX_ASPECT_RATIO
              );
              return (
                <Image
                  key={index}
                  source={listing.image}
                  resizeMode="cover"
                  style={{
                    width: columnWidth,
                    height: columnWidth / clamped,
                    borderRadius: 12,
                  }}
                />
              )
            })}
          </View>

          <View style={styles.column}>
            {columnWidth > 0 && rightColumn.map((listing, index) => {
              const clamped = clampAspectRatio(
                listing.aspectRatio,
                MIN_ASPECT_RATIO,
                MAX_ASPECT_RATIO
              );
              return (
                <Image
                  key={index}
                  source={listing.image}
                  resizeMode="cover"
                  style={{
                    width: columnWidth,
                    height: columnWidth / clamped,
                    borderRadius: 12,
                  }}
                />
              )
            })}
          </View>
        </View>
      </ScrollView>

    </SafeAreaView>


  )

}
const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 50,
    // backgroundColor: 'red',
    alignItems: "flex-start",
  },
  headerText: {
    fontSize: 50,
    fontWeight: 500
  },
  screen: {
    flex: 1,
  },

  scrollContent: {
    padding: 12,
  },

  columns: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
    width: '100%',
  },

  column: {
    flex: 1,
    gap: 10,
  },

  testCard: {
    height: 120,
    borderWidth: 2,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
});