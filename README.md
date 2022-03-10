mqtt.eclipseprojects.io
This is a public test MQTT broker service. It currently listens on the following ports:

1883 : MQTT over unencrypted TCP
8883 : MQTT over encrypted TCP
80 : MQTT over unencrypted WebSockets (note: URL must be /mqtt )
443 : MQTT over encrypted WebSockets (note: URL must be /mqtt )

```
iOS Bundling failed 3570ms
Unable to resolve module ./cjs/react-jsx-runtime.development.js from /Users/blackbird/Dropbox/MBP_Projects/mqtt/rn-mqttjs/node_modules/react-native-tcp/node_modules/react/jsx-runtime.js:

None of these files exist:
  * node_modules/react-native-tcp/node_modules/react/cjs/react-jsx-runtime.development.js(.native|.ios.ts|.native.ts|.ts|.ios.tsx|.native.tsx|.tsx|.ios.js|.native.js|.js|.ios.jsx|.native.jsx|.jsx|.ios.json|.native.json|.json)
  * node_modules/react-native-tcp/node_modules/react/cjs/react-jsx-runtime.development.js/index(.native|.ios.ts|.native.ts|.ts|.ios.tsx|.native.tsx|.tsx|.ios.js|.native.js|.js|.ios.jsx|.native.jsx|.jsx|.ios.json|.native.json|.json)
  4 |   module.exports = require('./cjs/react-jsx-runtime.production.min.js');
  5 | } else {
> 6 |   module.exports = require('./cjs/react-jsx-runtime.development.js');
    |                             ^
  7 | }
```

```
mqtt pub -t 'raven' -h 'test.mosquitto.org' -m 'From M1'
 mqtt sub -t 'raven' -h 'test.mosquitto.org' -v
```
