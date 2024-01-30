const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class BookingPage extends Page {
    /**
     * define selectors using getter methods
     */

    get inputFacility () {
        return $('#combo_facility');
    }

    get facility () {
        return $('option[value="Tokyo CURA Healthcare Center"]');
    }

    get inputHealthProg () {
        return $('#appointment');
    }

    get inputHealthType () {
        return $('#radio_program_none');
    }

    get inputDateField () {
        return $('#txt_visit_date');
    }

    get inputCommentField () {
        return $('#txt_comment');
    }

    get btnSubmit () {
        return $('#btn-book-appointment');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async book (date,comment) {
        await this.inputFacility.click();
        await this.facility.click();
        await this.inputHealthProg.click();
        await this.inputHealthType.click;
        await this.inputDateField.setValue(date);
        await this.inputCommentField.setValue(comment);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('booking');
    }
}

module.exports = new BookingPage();
