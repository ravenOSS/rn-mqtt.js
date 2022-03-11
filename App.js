import './shim.js'
import { StatusBar } from 'expo-status-bar'
import { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
// import * as mqtt from 'mqtt'
const mqtt = require('mqtt')

const wshost = 'ws://192.168.0.120:8880'
const mqtthost = 'mqtt://192.168.0.120:1883'
const clientId = 'rnmqtt'

let options = {
	keepalive: 60,
	clientId: clientId,
	protocolId: 'MQTT',
	protocolVersion: 4,
	reconnectPeriod: 1000 * 5,
	connectTimeout: 1000 * 30,
	resubscribe: true,
	clean: true,
	retain: true,
	qos: 0,
	will: {
		topic: 'WillMsg',
		payload: 'Publisher connection Closed abnormally..!',
		qos: 1,
		retain: false,
	},
}

export default function App() {
	const [messages, setMessages] = useState([])
	const [client, setClient] = useState(null)

	useEffect(() => createClient(), [])

	function createClient() {
		const client = mqtt.connect(wshost, options)
		setClient(client)

		client.on('connect', () => {
			client.subscribe('raven')
		})

		client.on('message', function (topic, message) {
			console.log(`${topic}: ${message.toString()} `)
			setMessages((messages) => [...messages, message.toString()])
		})
	}

	return (
		<View style={styles.container}>
			<Text style={styles.heading}>Messages</Text>
			{messages.map((message, index) => {
				return <Text key={index}>{message}</Text>
			})}
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
