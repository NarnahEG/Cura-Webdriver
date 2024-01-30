const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */

    get makeAppt () {
        //return $('#btn-make-appointment');
        return $("//a[@id='btn-make-appointment']"); 
        
    }

    get inputUsername () {
       // return $('#txt-username');
        return $("//input[@id='txt-username']");
    }

    get inputPassword () {
        return $('#txt-password');
    }

    get btnSubmit () {
        //return $('#btn-login');
        return $('.btn.btn-default')
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.makeAppt.click();
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();
