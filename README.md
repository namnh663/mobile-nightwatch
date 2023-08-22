<p align="center">
  <a href="#getting-started">Getting Started</a> •
  <a href="#project-structure">Project Structure</a>
</p>

![screenshot](https://github.com/namnh663/nightwatchjs/blob/main/run.gif)

Nightwatch.js is an integrated framework for performing automated end-to-end testing on web applications and websites, across all major browsers. It is written in Node.js and uses the W3C WebDriver API to interact with various browsers.

It is a complete solution for end-to-end and cross-browser testing. It aims to simplify the process of writing and running various types of tests, including:

- end-to-end tests on all major web browsers
- unit tests of Node.js services
- integration tests of HTTP APIs

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