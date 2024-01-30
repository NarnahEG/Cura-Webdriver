const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LogoutPage extends Page {
    /**
     * define selectors using getter methods
     */
    // get inputUsername () {
    //     return $('#username');
    // }

    // get inputPassword () {
    //     return $('#password');
    // }

    get logoutbtnSubmit () {
        return $('a[href="/logout"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async logout (logout) {
        // await this.inputUsername.setValue(username);
        // await this.inputPassword.setValue(password);
        await this.logoutbtnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

module.exports = new LogoutPage();
