import './shim.js'
import { StatusBar } from 'expo-status-bar'
import { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
// import * as mqtt from 'mqtt'
const mqtt = require('mqtt')

export default function App() {
	const [messages, setMessages] = useState([])
	const [client, setClient] = useState(null)

	useEffect(() => createClient(), [])

	function createClient() {
		const client = mqtt.connect('ws://192.168.0.120:8880')
		setClient(client)

		client.on('connect', () => {
			client.subscribe('raven')
		})

		client.on('message', function (topic, message) {
			console.log(`${topic}: ${message.toString()} `)
			setMessages((messages) => [...messages, message.toString()])
		})
		// client.on('message', function (topic, payload) {
		// 	console.log(`  ${payload.toString()}, ${topic}`)
		// 	setMessages((messages) => [...messages, payload.toString()])
		// })
	}

	return (
		<View style={styles.container}>
			<Text style={styles.heading}>Messages</Text>
			{messages.map((message, index) => {
				return <Text key={index}>{message}</Text>
			})}
			<Text>This should display</Text>
		</View>
	)
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	heading: {
		fontSize: 20,
		fontWeight: 'bold',
	},
})
