import React, { useState, useEffect } from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import * as FileSystem from "expo-file-system";
import { Audio } from "expo-av";
import axios from "axios";

const VoiceRecognition = () => {
	const [recording, setRecording] = useState(null);
	const [transcription, setTranscription] = useState("");

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
		<View style={styles.container}>
			<Button
				title="Start Recording"
				onPress={startRecording}
				disabled={recording !== null}
			/>
			<Button
				title="Stop Recording"
				onPress={stopRecording}
				disabled={recording === null}
			/>
			{transcription ? (
				<Text style={styles.transcriptionText}>{transcription}</Text>
			) : null}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: 16,
	},
	transcriptionText: {
		marginTop: 20,
		fontSize: 16,
		textAlign: "center",
	},
});

export default VoiceRecognition;
