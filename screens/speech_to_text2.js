import React, { useState, useEffect } from "react";
import {
	View,
	Button,
	Text,
	StyleSheet,
	ImageBackground,
	TouchableOpacity,
} from "react-native";
import * as FileSystem from "expo-file-system";
import { Audio } from "expo-av";
import axios from "axios";
import {
	Fontisto,
	FontAwesome6,
	FontAwesome,
	MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useFonts } from "expo-font";
import AsyncStorage from "@react-native-async-storage/async-storage";

const VoiceRecognition2 = ({ navigation }) => {
	const [fontsLoaded] = useFonts({
		plusrounded_bold: require("../assets/fonts/M_PLUS_Rounded_1c/MPLUSRounded1c-Bold.ttf"),
	});

	const [locationvalue, setLocationValue] = useState(null);
	const [unhide, setunhide] = useState(true);

	const [recording, setRecording] = useState(null);
	const [transcription, setTranscription] = useState("");
	const [value, setValue] = useState("");

	useEffect(() => {
		const getLocation_Destination = async () => {
			if (value) {
				await AsyncStorage.setItem("destination", value);
				setLocationValue(value);
				setunhide(false);
			}
			if (locationvalue) {
				navigation.push("PathFinder");
			}
			// // const location = await AsyncStorage.getItem("location");

			// console.log(location);

			switch (transcription) {
				case "fb":
					return [transcription, setValue("fb")];
				case "food love":
					return [transcription, setValue("fb")];
				case "food laboratory":
					return [transcription, setValue("fb")];
				case "vice president":
					return [transcription, setValue("v_pres_office")];
				case "vice president office":
					return [transcription, setValue("v_pres_office")];
				case "president office":
					return [transcription, setValue("pres_office")];
				case "president":
					return [transcription, setValue("pres_office")];
				case "accounting":
					return [transcription, setValue("accounting")];
				case "cashier":
					return [transcription, setValue("cashier")];
				case "registrar office":
					return [transcription, setValue("registrar_office")];
				case "cafeteria":
					return [transcription, setValue("cafeteria")];
				case "research office":
					return [transcription, setValue("research_office")];
				case "psychology office":
					return [transcription, setValue("psychology_office")];
				case "clinic":
					return [transcription, setValue("clinic")];
				case "drrm":
					return [transcription, setValue("drrm")];
				case "speech love":
					return [transcription, setValue("speech_lab")];
				case "speech laboratory":
					return [transcription, setValue("speech_lab")];
				case "209":
					return [transcription, setValue("209")];
				case "208":
					return [transcription, setValue("208")];
				case "207":
					return [transcription, setValue("207")];
				case "206":
					return [transcription, setValue("206")];
				case "205":
					return [transcription, setValue("205")];
				case "204":
					return [transcription, setValue("204")];
				case "203":
					return [transcription, setValue("203")];
				case "principal":
					return [transcription, setValue("principal")];
				case "principal office":
					return [transcription, setValue("principal")];
				case "sao":
					return [transcription, setValue("sao")];
				case "property custodian office":
					return [transcription, setValue("prop_custodian")];
				case "property custudian":
					return [transcription, setValue("prop_custodian")];
				case "property custudians":
					return [transcription, setValue("prop_custodian")];
				case "computer love 4":
					return [transcription, setValue("com_lab_4")];
				case "computer laboratory 4":
					return [transcription, setValue("com_lab_4")];
				case "computer love 3":
					return [transcription, setValue("com_lab_3")];
				case "computer laboratory 3":
					return [transcription, setValue("com_lab_3")];
				case "computer love 2":
					return [transcription, setValue("com_lab_2")];
				case "computer laboratory 2":
					return [transcription, setValue("com_lab_2")];
				case "computer love 1":
					return [transcription, setValue("com_lab_1")];
				case "computer laboratory 1":
					return [transcription, setValue("com_lab_1")];
				case "COC faculty":
					return [transcription, setValue("coc_faculty")];
				case "COC dean":
					return [transcription, setValue("coc_dean")];
				case "science laboratory":
					return [transcription, setValue("sci_lab")];
				case "science love":
					return [transcription, setValue("sci_lab")];
				case "319":
					return [transcription, setValue("319")];
				case "318":
					return [transcription, setValue("318")];
				case "317":
					return [transcription, setValue("317")];
				case "316":
					return [transcription, setValue("316")];
				case "315":
					return [transcription, setValue("315")];
				case "314":
					return [transcription, setValue("314")];
				case "313":
					return [transcription, setValue("313")];
				case "312":
					return [transcription, setValue("312")];
				case "scholarship office":
					return [transcription, setValue("scholarship_office")];
				case "ccs dean":
					return [transcription, setValue("ccs_dean")];
				case "ccs faculty":
					return [transcription, setValue("ccs_faculty")];
				case "cJe dean":
					return [transcription, setValue("cJe_dean")];
				case "college library":
					return [transcription, setValue("college_lib")];
				case "college library extension":
					return [transcription, setValue("college_lib_ex")];
				case "429":
					return [transcription, setValue("429")];
				case "428":
					return [transcription, setValue("428")];
				case "427":
					return [transcription, setValue("427")];
				case "426":
					return [transcription, setValue("426")];
				case "425":
					return [transcription, setValue("425")];
				case "424":
					return [transcription, setValue("424")];
				case "423":
					return [transcription, setValue("423")];
				case "422":
					return [transcription, setValue("422")];
				case "avr":
					return [transcription, setValue("avr")];
				case "audio visual room":
					return [transcription, setValue("avr")];
				case "rooftop":
					return [transcription, setValue("Rooftop")];
				case "536":
					return [transcription, setValue("536")];
				case "535":
					return [transcription, setValue("535")];
				case "dyvl":
					return [transcription, setValue("dyvl")];
				case "534":
					return [transcription, setValue("534")];
				case "533":
					return [transcription, setValue("533")];
				case "532":
					return [transcription, setValue("532")];
				case "male cr":
					return [transcription, setValue("cr_male")];
				case "female cr":
					return [transcription, setValue("cr_female")];
			}
		};

		getLocation_Destination();
	});

	const startRecording = async () => {
		try {
			const { status } = await Audio.requestPermissionsAsync();
			if (status === "granted") {
				const recording = new Audio.Recording();
				await recording.prepareToRecordAsync(
					Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
				);
				await recording.startAsync();
				setRecording(recording);
			} else {
				console.log("Permission to access microphone denied");
			}
		} catch (error) {
			console.error("Failed to start recording", error);
		}
	};

	const stopRecording = async () => {
		try {
			await recording.stopAndUnloadAsync();
			const uri = recording.getURI();
			setRecording(null);
			sendAudioFile(uri);
		} catch (error) {
			console.error("Failed to stop recording", error);
		}
	};

	const sendAudioFile = async (uri) => {
		const file = await FileSystem.readAsStringAsync(uri, {
			encoding: FileSystem.EncodingType.Base64,
		});

		const formData = new FormData();
		formData.append("file", {
			uri,
			name: "speech.wav",
			type: "audio/wav",
		});

		try {
			const response = await axios.post(
				"http://192.168.1.9:8000/api/speech-to-text/",
				formData,
				{
					headers: {
						"Content-Type": "multipart/form-data",
					},
				}
			);
			setTranscription(response.data.text);
		} catch (error) {
			console.error("Error sending audio file:", error);
		}
	};

	return (
		<View>
			<View style={styles.headers}>
				<View style={styles.pathwaze}>
					<Fontisto
						style={styles.fire_icon}
						name="fire"
						size={24}
						color="white"
					/>
					<Text style={styles.text_pathwaze}>PATHWAZE</Text>
				</View>
				<View style={styles.dashboard}>
					<Text style={styles.text_dashboard}>DASHBOARD</Text>
					{unhide && (
						<TouchableOpacity onPress={() => navigation.push("stt")}>
							<FontAwesome name="microphone" size={24} color="red" />
						</TouchableOpacity>
					)}
				</View>
			</View>
			<View style={styles.body}>
				<ImageBackground
					style={styles.background_image}
					source={require("../assets/images/crmc_build.png")}
				>
					<View style={styles.square}>
						<Text></Text>
						<View style={styles.image}>
							<ImageBackground
								style={styles.background_image2}
								source={require("../assets/images/crmc_build.png")}
							>
								<View style={styles.crmctext_container}>
									<TouchableOpacity
										style={styles.home_container}
										onPress={() => choose_location()}
									>
										<Fontisto
											style={styles.home_icon}
											name="home"
											size={25}
											color="white"
										/>
									</TouchableOpacity>
									<View>
										<Text style={styles.crmc_text}>
											CEBU ROOSEVELT MEMORIAL
										</Text>
										<Text style={styles.crmc_text}>COLLEGES</Text>
									</View>
								</View>
								<View style={styles.container}>
									<Text style={styles.transcriptionText}>
										Say your destination:
									</Text>
									<Button
										color="red"
										appearance="primary"
										title="Start Recording"
										onPress={startRecording}
										disabled={recording !== null}
									></Button>
									<Button
										color="red"
										appearance="primary"
										title="Stop Recording"
										onPress={stopRecording}
										disabled={recording === null}
									></Button>
									{transcription ? (
										<Text style={styles.transcriptionText}>
											{transcription}
										</Text>
									) : null}
								</View>
							</ImageBackground>
						</View>
					</View>
					<View style={styles.footer}>
						<View style={styles.icon_group}>
							<TouchableOpacity
								onPress={() => navigation.push("FireExstinguisher")}
							>
								<FontAwesome6
									style={styles.fire_extinguisher}
									name="fire-extinguisher"
									size={32}
									color="white"
								/>
								<Text style={styles.icon_text}>Fire Extinguisher</Text>
							</TouchableOpacity>
							<TouchableOpacity onPress={() => navigation.push("FirstAid")}>
								<Fontisto
									style={styles.first_aid}
									name="first-aid-alt"
									size={32}
									color="white"
								></Fontisto>
								<Text style={styles.icon_text}>First Aid Kit</Text>
							</TouchableOpacity>
							<TouchableOpacity onPress={() => navigation.push("FireExit")}>
								<MaterialCommunityIcons
									style={styles.fire_exit}
									name="exit-run"
									size={32}
									color="white"
								/>

								<Text style={styles.icon_text}>Fire Exit</Text>
							</TouchableOpacity>
						</View>
					</View>
				</ImageBackground>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	buttons_stt: {
		top: 30,
		backgroundColor: "red",
		color: "red",
	},

	container: {
		top: -20,
	},

	transcriptionText: {
		color: "white",
		fontFamily: "plusrounded_bold",
		fontSize: 18,
		alignSelf: "center",
	},

	headers: {
		flexDirection: "row",
		backgroundColor: "white",
	},
	pathwaze: {
		backgroundColor: "red",
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
		color: "white",
		fontFamily: "plusrounded_bold",
		fontSize: 18,
		marginLeft: 10, // Adding some margin to space out the icon and text
	},
	dashboard: {
		backgroundColor: "white",
		// padding: 20,
		width: "50%",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
	},
	text_dashboard: {
		color: "red",
		fontFamily: "plusrounded_bold",
		fontSize: 18,
		left: -20,
	},

	//body
	body: {
		height: "100%",
		width: "100%",
	},

	background_image: {
		flex: 1,
		resizeMode: "cover",
		justifyContent: "center",
	},

	square: {
		top: -50,
		height: "50%",
		width: "80%",
		alignSelf: "center",
		backgroundColor: "white",
	},

	image: {
		top: 5,
		alignSelf: "center",
		width: "90%",
		height: "90%",
		borderRadius: 10,
		overflow: "hidden", // Ensures the border radius is applied to the image
	},

	background_image2: {
		flex: 1,
		resizeMode: "cover",
		justifyContent: "center",
	},

	crmctext_container: {
		top: -110,
		left: 15,
		flexDirection: "row",
	},

	home_container: {
		height: 40,
		width: 40,
		backgroundColor: "red",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 50,
	},

	crmc_text: {
		color: "white",
		fontFamily: "plusrounded_bold",
		fontSize: 12,
		left: 15,
	},

	//dropdown

	dropdown: {
		height: "10%",
		width: "80%",
		top: -100,
		alignSelf: "center",
		borderColor: "gray",
		// borderWidth: 0.5,
		borderRadius: 8,
		paddingHorizontal: 8,
		backgroundColor: "white",
	},

	label: {
		position: "absolute",
		backgroundColor: "white",
		left: 22,
		top: 8,
		zIndex: 999,
		paddingHorizontal: 8,
		fontSize: 12,
	},
	placeholderStyle: {
		fontSize: 14,
	},
	selectedTextStyle: {
		fontSize: 14,
	},
	iconStyle: {
		width: "10%",
		height: "122%",
		left: 8,
		borderRadius: 8,
		backgroundColor: "red",
		paddingRight: 60,
	},
	inputSearchStyle: {
		height: 40,
		fontSize: 16,
	},

	// footer
	footer: {
		top: 50,
		alignSelf: "baseline",
		backgroundColor: "red",
		width: "100%",
		height: "10%",
		borderTopRightRadius: 50,
		borderTopLeftRadius: 50,
	},

	icon_group: {
		flexDirection: "row",
		alignSelf: "center",
		gap: 40,
		right: 5,
		top: 10,
	},

	icon_text: {
		//
		color: "white",
		fontFamily: "plusrounded_bold",
		fontSize: 15,
		alignSelf: "center",
	},

	fire_extinguisher: {
		left: 50,
	},

	first_aid: {
		left: 30,
	},

	fire_exit: {
		left: 15,
	},
});

export default VoiceRecognition2;
