# RN-MQTT.js

## MQTT Client

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

[]: # Language: markdown
[]: # Path: README.md
