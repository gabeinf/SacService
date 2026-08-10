import { NativeTabs } from "expo-router/unstable-native-tabs";

export default function TabsLayout () {
    return (
        <NativeTabs>
            <NativeTabs.Trigger name="(home)">
                <NativeTabs.Trigger.Label>{("Home")}</NativeTabs.Trigger.Label>
                <NativeTabs.Trigger.Icon sf="house.fill" drawable="home"/>
            </NativeTabs.Trigger>

            <NativeTabs.Trigger name="(profile)">
                <NativeTabs.Trigger.Label>{("Profile")}</NativeTabs.Trigger.Label>
                <NativeTabs.Trigger.Icon sf="person.fill" drawable="person"/>
            </NativeTabs.Trigger>
        </NativeTabs>
    )
}