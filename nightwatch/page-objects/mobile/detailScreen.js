const detailCommands = {
    addItemToCart() {
        return this.click('@addToCartButton');
    },

    viewCart() {
        return this.click('@cartBadgeIcon');
    },

    checkoutItem() {
        return this.click('@checkoutButton');
    },

    itemsNumberShouldBe(number) {
        return this
            .assert.visible('@cartBadge')
            .assert.textEquals('@cartBadge', number);
    }
};

module.exports = {
    commands: [
        detailCommands
    ],

    elements: {
        addToCartButton: {
            locateStrategy: 'xpath',
            selector: '//android.view.ViewGroup[@content-desc="Add To Cart button"]'
        },

        checkoutButton: {
            locateStrategy: 'xpath',
            selector: '//android.view.ViewGroup[@content-desc="Proceed To Checkout button"]'
        },

        cartBadge: {
            locateStrategy: 'xpath',
            selector: '//android.view.ViewGroup[@content-desc="cart badge"]/android.widget.TextView'
        },

        cartBadgeIcon: {
            locateStrategy: 'xpath',
            selector: '//android.view.ViewGroup[@content-desc="cart badge"]/android.widget.ImageView'
        },

        productScreen: {
            locateStrategy: 'xpath',
            selector: '//android.view.ViewGroup[@content-desc="products screen"]/android.widget.ScrollView'
        }
    }
};
