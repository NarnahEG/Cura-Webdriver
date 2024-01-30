const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const BookingPage = require('../pageobjects/booking.page')
const LogoutPage = require('../pageobjects/logout.page')
const {$} = require('@wdio/globals')
//const e = $('#loc')



describe('My Login application', () => {
    it('Login with valid credentials', async () => {
        await LoginPage.open()
        await LoginPage.login('John Doe', 'ThisIsNotAPassword')
        const isDisplayed = toString($("h2").isDisplayed())
        expect(isDisplayed).toMatch(toString(true)); // Chai assertion
        expect(browser).toHaveTitle('Make Appointment')
        expect(browser).toHaveUrl('https://katalon-demo-cura.herokuapp.com/#appointment')
})

it('Book Appointment', async () => {
    await BookingPage.book('01/01/2024', 'I want to finish on time')
})

it('Logout', async () => {
    await LogoutPage.logout()   
})
})
