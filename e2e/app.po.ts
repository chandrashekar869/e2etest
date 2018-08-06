import { browser, by, element, ExpectedConditions } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  presentUrl(){
    return browser.getCurrentUrl();
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getButton() {
    return element(by.css('app-login button')).getAttribute('disabled');
  }
  setEmail(email) {
    return element(by.css('[formcontrolname="email"]')).sendKeys(email);
  }
  setAddUserEmail(email) {
     browser.wait(ExpectedConditions.visibilityOf(element(by.id('email'))),500);
     element(by.id('email')).sendKeys(email);
    }
  setPhone(phone) {
    browser.wait(ExpectedConditions.visibilityOf(element(by.id('phone'))),0);
    return element(by.id('phone')).sendKeys(phone);
  }
  setFirstName(fname) {
    browser.wait(ExpectedConditions.visibilityOf(element(by.id('first_name'))),0);
    return element(by.id('first_name')).sendKeys(fname);
  }
  setLastName(lname) {
    browser.wait(ExpectedConditions.visibilityOf(element(by.id('last_name'))),0);
    return element(by.id('last_name')).sendKeys(lname);
  }
  setPassword(password) {
    return element(by.css('[formcontrolname="password"]')).sendKeys(password);
  }
  loginButton() {
    return element(by.css('app-login button'));
  }
  getIndex(){
    return element(by.id('1'));
  }
  getBackButton(){
    return element(by.css('[routerlink="/"]'));
  }
  getaddUserButton(){
    return element(by.css('app-home nav [routerlink="/add"]'));
  }
  getRegisterButton(){
    return element(by.css('app-student-add button'));
  }
  getLogoutButton(){
    return element(by.id('logout'));
  }
}
