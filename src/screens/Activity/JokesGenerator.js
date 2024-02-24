// App.js file 
import React, { useState } from "react"; 
import { 
	View, 
	Text, 
	StyleSheet, 
	TouchableOpacity, 
	StatusBar, 
} from "react-native"; 

const App = () => { 
	const [joke, setJoke] = useState(""); 

	const getJoke = async () => { 
		try { 
			const response = await fetch( 
				"https://icanhazdadjoke.com/", 
				{ 
					headers: { 
						Accept: "application/json", 
					}, 
				} 
			); 
			const data = await response.json(); 
			setJoke(data.joke); 
		} catch (error) { 
			console.error(error); 
		} 
	}; 

	return ( 
		<View style={styles.container}> 
			<StatusBar 
				backgroundColor="#252627"
				barStyle="light-content"/> 
				
			<Text style={styles.title}> 
				Random Jokes Generator 
			</Text> 
			<View style={styles.jokeContainer}> 
				<Text style={styles.jokeText}>{joke}</Text> 
			</View> 
			<TouchableOpacity 
				style={styles.button} 
				onPress={getJoke}> 
				
				<Text style={styles.buttonText}> 
					Get a Joke 
				</Text> 
			</TouchableOpacity> 
		</View> 
	); 
}; 

const styles = StyleSheet.create({ 
	container: { 
		flex: 1, 
		backgroundColor: "#eee", 
		alignItems: "center", 
		justifyContent: "center", 
		padding: 16, 
	}, 
	title: { 
		fontSize: 28, 
		fontWeight: "bold", 
		color: "#333739", 
		marginBottom: 24, 
		textAlign: "center", 
	}, 
	jokeContainer: { 
		backgroundColor: "white", 
		borderRadius: 15, 
		padding: 20, 
		marginBottom: 24, 
		width: "100%", 
		alignItems: "center", 
		shadowColor: "black", 
		shadowOffset: { width: 1, height: 2 }, 
		shadowRadius: 15, 
		shadowOpacity: 1, 
		elevation: 4, 
	}, 
	jokeText: { 
		fontSize: 22, 
		fontWeight: "300", 
		lineHeight: 30, 
		color: "#333739", 
		textAlign: "center", 
	}, 
	button: { 
		padding: 16, 
		backgroundColor: "green", 
		borderRadius: 10, 
		shadowColor: "black", 
		shadowOffset: { width: 1, height: 2 }, 
		shadowRadius: 15, 
		shadowOpacity: 1, 
		elevation: 4, 
	}, 
	buttonText: { 
		fontSize: 20, 
		color: "white", 
		fontWeight: "bold", 
	}, 
}); 

export default App;
