describe('Login test', function () {
    const loginScreen = app.page.mobile.loginScreen();
    const homeScreen = app.page.mobile.homeScreen();
    const messages = require('../nightwatch/data/messages.json');
    before(function () {
        homeScreen
            .shouldBeDisplayed()
            .openLoginScreen();
    });

    it('Without username and password', async function () {
        loginScreen
            .clickLoginButton()
            .errorMessageUsernameShouldBe(messages.LOGIN_ERROR_MSG_001);
    });

    it('Without password', function () {
        const randomUsername = loginScreen.randomUsernameOrPassword(10);
        loginScreen
            .enterUsername(randomUsername)
            .clickLoginButton()
            .errorMessagePasswordShouldBe(messages.LOGIN_ERROR_MSG_002);
    });

    it('With valid credentials', async function () {
        loginScreen.loginWithAutoFill();
        homeScreen.screenNameShouldBe('Products');
    });

});