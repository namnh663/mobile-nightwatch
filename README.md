![screenshot](https://raw.githubusercontent.com/namnh663/mobile-nightwatch/main/folder.png)

The native mobile app testing capability in Nightwatch is build with Appium under the hood.

Appium is a NodeJS based server that exposes REST APIs compliant with the W3C WebDriver protocol that wraps automation libraries from vendors (UIAutomator2/Espresso, Apple XCUITest/UIAutomation).

In an end-end scenario Nightwatch makes request to Appium server, server talks to native framework using different platform drivers for executing commands and finally returns HTTP response back to Nightwatch.

## Getting Started

Running tests:

```bash
npx nightwatch ./test/login.js --env app.android.emulator
```

Config in `nightwatch.conf.js`:

This code snippet is defining the desired capabilities for an Android emulator in an Appium test. It specifies the platform name as 'android', sets the device name as 'emulator-5554', and provides the path to the APK file to be tested. It also sets the automation name to 'UiAutomator2' and disables the new command timeout.

```javascript
'app.android.emulator': {
        extends: 'app',
        'desiredCapabilities': {
            browserName: null,
            platformName: 'android',
            'appium:options': {
                automationName: 'UiAutomator2',
                deviceName: 'emulator-5554',
                app: `${__dirname}/nightwatch/apps/saucelabs.apk`,
                newCommandTimeout: 0
            }
        }
},
```

Appium Inspector v2023.8.2

https://inspector.appiumpro.com/

Start sever: `appium --allow-cors --base-path /wd/hub`

```json
{
  "appium:deviceName": "emulator-5554",
  "platformName": "Android",
  "appium:automationName": "uiautomator2",
  "appium:app": "../mobile-nightwatch/nightwatch/apps/saucelabs.apk"
}
```
