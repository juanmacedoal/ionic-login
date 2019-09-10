import { browser, by, element } from 'protractor';

export class LoginPage {
  navigate() {
    return browser.get('/auth/login');
  }

  getWelcomeTitle() {
    return element(by.id('welcome')).getText();
  }

  successLogin() {
    element(by.css('input[name=user]'))
      .click()
      .then(() => {
        element(by.css('input[name=user]')).sendKeys('user');
      });
    element(by.css('input[name=password]'))
      .sendKeys('password')
      .then(() => {
        element(by.id('button')).click();
      });
  }

  testLogin(user, password) {
    element(by.css('input[name=user]')).sendKeys(user);
    element(by.css('input[name=password]'))
      .sendKeys(password)
      .then(() => {
        element(by.id('button')).click();
      });
  }
}
