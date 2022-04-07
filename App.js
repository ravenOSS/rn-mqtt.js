// import 'expo-dev-client'
import('./shim')
import { StatusBar } from 'expo-status-bar'

import { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
// import * as mqtt from 'mqtt'
const mqtt = require('mqtt')

const wshost = 'ws://192.168.0.120:8880'
const mqtthost = 'mqtt://192.168.0.120:1883'
const clientId = 'rnmqtt2'

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
	const [message, setMessage] = useState([])
	const [client, setClient] = useState(null)

	useEffect(() => createClient(), [])

	function createClient() {
		const wsClient = mqtt.connect(wshost, clientId)

		wsClient.on('connect', () => {
			wsClient.subscribe('raven')
		})

		wsClient.on('message', function (topic, message) {
			console.log(`${topic}: ${message.toString()} `)
			setMessage(message.toString())
		})
	}

	return (
		<View style={styles.container}>
			<Text style={styles.heading}>Timestamp</Text>
			<Text style={styles.message}>{message}</Text>
			<StatusBar style='auto' />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'darkorange',
		alignItems: 'center',
		justifyContent: 'center',
	},
	heading: {
		fontSize: 20,
		fontWeight: 'bold',
		color: 'black',
		marginBottom: 10,
	},
	message: {
		fontSize: 24,
		fontWeight: 'bold',
		color: 'black',
	},
})
