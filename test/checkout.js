describe('Check out test', function () {
    const detailScreen = app.page.mobile.detailScreen();
    const homeScreen = app.page.mobile.homeScreen();
    const loginScreen = app.page.mobile.loginScreen();
    before(function () {
        homeScreen.shouldBeDisplayed();
    });

    it('When add one item without login', async function () {
        homeScreen.productListShouldBe(6);
        homeScreen.clickFirstItem();
        detailScreen.addItemToCart();
        detailScreen.itemsNumberShouldBe('1');
        detailScreen.viewCart();
        detailScreen.checkoutItem();
        loginScreen.shouldBeDisplayed();
    });

    after(app => app.end());
});