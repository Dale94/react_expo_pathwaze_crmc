import React, { useState, useEffect } from "react";
import { View, Text, BackHandler } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/Home";
import FireExstinguisher from "./screens/fire_exstinguisher";
import FireExit from "./screens/fire_exit";
import FirstAid from "./screens/first_aid";
import PathFinder from "./screens/path";
import VoiceRecognition from "./screens/speech_to_text";
import VoiceRecognition2 from "./screens/speech_to_text2";

const Stack = createNativeStackNavigator();

function App() {
	const navigationRef = React.useRef(null);

	return (
		<NavigationContainer ref={navigationRef}>
			<Stack.Navigator
				initialRouteName="Home"
				screenOptions={{ headerShown: false }}
			>
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="FireExstinguisher" component={FireExstinguisher} />
				<Stack.Screen name="FirstAid" component={FirstAid} />
				<Stack.Screen name="FireExit" component={FireExit} />
				<Stack.Screen name="PathFinder" component={PathFinder} />
				<Stack.Screen name="stt" component={VoiceRecognition} />
				<Stack.Screen name="stt2" component={VoiceRecognition2} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;
