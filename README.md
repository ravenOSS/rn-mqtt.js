# RN-MQTT.js

## Websocket MQTT Client for Expo react-native app

## **_Not_** production ready yet. Much more testing required. Might create baseline for others to iterate upon.

### If you have not got it yet, please note that this is an experiment to get mqtt working in Expo react-native app. This project was started because of inability to get existing RN MQTT clients to work. This is not to imply criticism of the other MQTT client creators. It might be due to an underlying issue such as apparent abondonment of the Eclipse Paho MQTT client javascript library or simply the library author has moved on after putting in tremendous effort.

Key element of this project is using the mqtt.js library in a node environment. However, React-Native is missing several of the node APIs. This is a problem for the mqtt.js library. Therefore, rn-nodify is used to shim the node APIs into the React-Native environment. Without this libary, this experiment would not be possible. Kudos to Tradle and @mvayngrib.

[rn-nodify](https://github.com/tradle/rn-nodeify)

### Option A - quickstart

- clone this repo
- edit App.js to set the host and port
- run 'npm install'
- run 'expo start'

### Option B - start new project

- Init new Expo app
- NPM install mqtt
- NPM install rn-nodeify
- Create postinstall script in package.json

```
  "scripts": {
    "start": "expo start",
    "android": "expo start --android",
    "ios": "expo start --ios",
    "web": "expo start --web",
    "eject": "expo eject",
    "postinstall": "./node_modules/.bin/rn-nodeify --install --hack"
  },
```

- npm run postinstall to create shim.js in project root
- Add shim.js to app.js as the first import at the top of the file

```
import './shim.js'
```

- modify host and port settings in App.js

Start the expo dev server

```
expo start
```

[]: # Language: markdown
[]: # Path: README.md
