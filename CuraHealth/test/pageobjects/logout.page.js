const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LogoutPage extends Page {
    /**
     * define selectors using getter methods
     */
   
    get hamburg () {
        return $('#menu-toggle');
    }

    get sideBarNav () {
        return $('#sidebar-wrapper');
    }

    get logoutbtnSubmit () {
        return $("[href='authenticate.php?logout']");
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async logout (logout) {
        await this.hamburg.click();
        await this.sideBarNav.click();
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
