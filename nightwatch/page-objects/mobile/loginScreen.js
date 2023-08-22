const loginCommands = {
    enterUsername(username) {
        return this.sendKeys('@usernameInput', username);
    },

    enterPassword(password) {
        return this.sendKeys('@passwordInput', password);
    },

    clickLoginButton() {
        return this.click('@loginButton');
    },

    shouldBeDisplayed() {
        return this.assert.visible('@loginScreen');
    },

    /**
     * Generates a random username or password string of the specified length.
     *
     * @param {number} length - The length of the random string to generate.
     * @return {string} - The randomly generated string.
     */
    randomUsernameOrPassword(length) {
        const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

        let randomString = "";
        for (let i = 0; i < length; i++) {
            randomString += characters[Math.floor(Math.random() * characters.length)];
        }

        return randomString;
    },

    loginWithAutoFill() {
        return this
            .click('@bobAutoFillTextLink')
            .click('@loginButton');
    },

    confirmLogout() {
        return this.click('@okButton')
    },

    errorMessageUsernameShouldBe(errormessage) {
        return this
            .assert.textEquals('@usernameErrorMessage', errormessage);
    },

    errorMessagePasswordShouldBe(errormessage) {
        return this.assert.textEquals('@passwordErrorMessage', errormessage);
    }
};

module.exports = {
    commands: [
        loginCommands
    ],

    elements: {
        usernameInput: {
            locateStrategy: 'xpath',
            selector: '//android.widget.EditText[@content-desc="Username input field"]'
        },

        passwordInput: {
            locateStrategy: 'xpath',
            selector: '//android.widget.EditText[@content-desc="Password input field"]'
        },

        loginButton: {
            locateStrategy: 'xpath',
            selector: '//android.view.ViewGroup[@content-desc="Login button"]'
        },

        okButton: {
            locateStrategy: 'id',
            selector: 'android:id/button1'
        },

        bobAutoFillTextLink: {
            locateStrategy: 'xpath',
            selector: '//android.view.ViewGroup[@content-desc="bob@example.com-autofill"]/android.widget.TextView'
        },

        usernameErrorMessage: {
            locateStrategy: 'xpath',
            selector: '//android.view.ViewGroup[@content-desc="Username-error-message"]/android.widget.TextView'
        },

        passwordErrorMessage: {
            locateStrategy: 'xpath',
            selector: '//android.view.ViewGroup[@content-desc="Password-error-message"]/android.widget.TextView'
        },

        genericErrorMessage: {
            locateStrategy: 'xpath',
            selector: '//android.view.ViewGroup[@content-desc="generic-error-message"]/android.widget.TextView'
        },

        loginScreen: {
            locateStrategy: 'xpath',
            selector: '//android.view.ViewGroup[@content-desc="login screen"]/android.widget.ScrollView/android.view.ViewGroup'
        }
    }
};
