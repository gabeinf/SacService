import { Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index () {
    return (
        <>
        <Stack screenOptions={{title: 'Profile Screen', headerShown: true}}/>
        <View style={styles.container}>
            <Text>Profile</Text>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'center'
    },
})