const homeCommands = {
    shouldBeDisplayed() {
        return this.assert.visible('@productScreen');
    },

    screenNameShouldBe(screenName) {
        return this
            .assert.visible('@productScreenName')
            .assert.textEquals('@productScreenName', screenName);
    },

    productListShouldBe(number) {
        return this
            .expect.elements('@productItems').count.to.equal(number);
    },

    openLoginScreen() {
        return this
            .click('@openMenu')
            .click('@menuItemLogIn');
    },

    clickLogout() {
        return this
            .click('@openMenu')
            .click('@menuItemLogOut')
            .click('@logoutButton');
    },

    clickFirstItem() {
        return this.click('@slbItems');
    },

    addItemToCart() {
        return this.click('@addToCartButton');
    },

    sortByNameDesc() {
        return this
            .click('@sortButton')
            .click('@sortByNameDescOption');
    }
};

module.exports = {
    commands: [
        homeCommands
    ],

    elements: {
        openMenu: {
            locateStrategy: 'xpath',
            selector: '//android.view.ViewGroup[@content-desc="open menu"]/android.widget.ImageView'
        },

        productItems: {
            locateStrategy: 'xpath',
            selector: '//android.view.ViewGroup[@content-desc="store item"]'
        },

        slbItems: {
            locateStrategy: 'xpath',
            selector: '(//android.widget.TextView[@content-desc="store item text"])[1]'
        },

        logoutButton: {
            locateStrategy: 'id',
            selector: 'android:id/button1'
        },

        sortButton: {
            locateStrategy: 'xpath',
            selector: '//android.view.ViewGroup[@content-desc="sort button"]/android.widget.ImageView'
        },

        addToCartButton: {
            locateStrategy: 'xpath',
            selector: '//android.view.ViewGroup[@content-desc="Add To Cart button"]'
        },

        sortByNameDescOption: {
            locateStrategy: 'xpath',
            selector: '//android.view.ViewGroup[@content-desc="nameDesc"]'
        },

        menuItemLogIn: {
            locateStrategy: 'xpath',
            selector: '//android.view.ViewGroup[@content-desc="menu item log in"]/android.widget.TextView'
        },

        menuItemLogOut: {
            locateStrategy: 'xpath',
            selector: '//android.view.ViewGroup[@content-desc="menu item log out"]/android.widget.TextView'
        },

        productScreenName: {
            locateStrategy: 'xpath',
            selector: '//android.view.ViewGroup[@content-desc="container header"]/android.widget.TextView'
        },

        productScreen: {
            locateStrategy: 'xpath',
            selector: '//android.view.ViewGroup[@content-desc="products screen"]/android.widget.ScrollView'
        }
    }
};
