import React, { useState, useEffect } from "react";
import {
	View,
	StyleSheet,
	Text,
	ActivityIndicator,
	TouchableOpacity,
	Dimensions,
} from "react-native";
import { Fontisto } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import AsyncStorage from "@react-native-async-storage/async-storage";
import FloorMap1 from "./floors/floor_1";
import FloorMap2 from "./floors/floor_2";
import FloorMap3 from "./floors/floor_3";
import FloorMap4 from "./floors/floor_4";
import FloorMap5 from "./floors/floor_5";

const PathFinder = ({ navigation }) => {
	const [fontsLoaded] = useFonts({
		plusrounded_bold: require("../assets/fonts/M_PLUS_Rounded_1c/MPLUSRounded1c-Bold.ttf"),
	});

	const [locationvalue, setLocationValue] = useState(null);
	const [destinationvalue, setDestinationValue] = useState(null);

	useEffect(() => {
		const getLocation_Destination = async () => {
			setLocationValue(await AsyncStorage.getItem("location"));
			setDestinationValue(await AsyncStorage.getItem("destination"));
		};

		getLocation_Destination();
	}, []);

	const go_home = async () => {
		await AsyncStorage.removeItem("location");
		navigation.push("Home");
	};

	// Show a loading indicator while the fonts are loading
	if (!fontsLoaded) {
		return <ActivityIndicator size="large" color="#0000ff" />;
	}

	return (
		<View>
			<View style={styles.headers}>
				<View style={styles.pathwaze}>
					<TouchableOpacity onPress={() => go_home()}>
						<Fontisto
							style={styles.fire_icon}
							name="home"
							size={24}
							color="red"
						/>
					</TouchableOpacity>

					<Text style={styles.text_pathwaze}>PATHWAZE</Text>
				</View>
				<View style={styles.dashboard}>
					<Text style={styles.text_dashboard}>MAPS</Text>
				</View>
			</View>

			<View style={styles.body}>
				{(destinationvalue == "cafeteria" ||
					destinationvalue == "cashier" ||
					destinationvalue == "v_pres_office" ||
					destinationvalue == "pres_office" ||
					destinationvalue == "accounting" ||
					destinationvalue == "fb" ||
					destinationvalue == "afa" ||
					destinationvalue == "registrar_office" ||
					destinationvalue == "clinic" ||
					destinationvalue == "drrm" ||
					destinationvalue == "psychology_office" ||
					destinationvalue == "research_office") && <FloorMap1 />}

				{(destinationvalue == "203" ||
					destinationvalue == "204" ||
					destinationvalue == "205" ||
					destinationvalue == "206" ||
					destinationvalue == "207" ||
					destinationvalue == "208" ||
					destinationvalue == "209" ||
					destinationvalue == "principal" ||
					destinationvalue == "speech_lab" ||
					destinationvalue == "prop_custodian" ||
					destinationvalue == "coc_dean" ||
					destinationvalue == "coc_faculty" ||
					destinationvalue == "com_lab_1" ||
					destinationvalue == "com_lab_2" ||
					destinationvalue == "com_lab_3" ||
					destinationvalue == "com_lab_4" ||
					destinationvalue == "sao") && <FloorMap2 />}

				{(destinationvalue == "312" ||
					destinationvalue == "313" ||
					destinationvalue == "314" ||
					destinationvalue == "315" ||
					destinationvalue == "316" ||
					destinationvalue == "317" ||
					destinationvalue == "318" ||
					destinationvalue == "319" ||
					destinationvalue == "ccs_dean" ||
					destinationvalue == "ccs_faculty" ||
					destinationvalue == "scholarship_office" ||
					destinationvalue == "sci_lab" ||
					destinationvalue == "college_lib" ||
					destinationvalue == "college_lib_ex" ||
					destinationvalue == "cJe_dean") && <FloorMap3 />}

				{(destinationvalue == "422" ||
					destinationvalue == "423" ||
					destinationvalue == "425" ||
					destinationvalue == "424" ||
					destinationvalue == "426" ||
					destinationvalue == "427" ||
					destinationvalue == "428" ||
					destinationvalue == "429" ||
					destinationvalue == "avr" ||
					destinationvalue == "Rooftop") && <FloorMap4 />}

				{(destinationvalue == "532" ||
					destinationvalue == "533" ||
					destinationvalue == "534" ||
					destinationvalue == "535" ||
					destinationvalue == "536" ||
					destinationvalue == "dyvl") && <FloorMap5 />}
			</View>
		</View>
	);
};

const windowWidth = Dimensions.get("window").width;
const dimensions = Dimensions.get("window");
const imageWidth = dimensions.width;
const imageHeight = dimensions.height;

const styles = StyleSheet.create({
	headers: {
		flexDirection: "row",
		backgroundColor: "red",
	},
	pathwaze: {
		backgroundColor: "white",
		padding: 20,
		width: "50%",
		flexDirection: "row",
		alignItems: "center",
		borderBottomRightRadius: 70,
	},
	fire_icon: {
		paddingRight: 10,
		paddingLeft: 10,
	},
	text_pathwaze: {
		color: "red",
		fontFamily: "plusrounded_bold",
		fontSize: 18,
		marginLeft: 10, // Adding some margin to space out the icon and text
	},
	dashboard: {
		backgroundColor: "red",
		padding: 20,
		width: "50%",
		justifyContent: "center",
		alignItems: "center",
	},
	text_dashboard: {
		color: "white",
		fontFamily: "plusrounded_bold",
		fontSize: 16,
		left: -20,
	},
	body: {
		height: 800,
		width: windowWidth,
		borderColor: "#000",
	},
});

export default PathFinder;
