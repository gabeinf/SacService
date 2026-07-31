import { NativeTabs } from "expo-router/unstable-native-tabs";

export default function TabsLayout () {
    return (
        <NativeTabs>
            <NativeTabs.Trigger name="(home)"/>
            <NativeTabs.Trigger name="(profile)"/>
        </NativeTabs>
    )
}