import { browser, protractor } from 'protractor';
import { LoginPage } from './login.po';

describe('protractor-tutorial - Login page', () => {
  let page: LoginPage;

  beforeEach(() => {
    page = new LoginPage();
    page.navigate();
  });

  it('The title has to be Welcome', () => {
    expect(page.getWelcomeTitle()).toEqual('Welcome');
  });

  it('When login is successful — he should go to DashboardPage', async () => {
    await page.testLogin('user', 'password');
    browser.driver.wait(function() {
      return browser.driver.getCurrentUrl().then(url => {
        return /dashboard/.test(url);
      });
    }, 10000);
  });

  it('When user trying to login with wrong credentials he should stay on “login” page and see error alert window', () => {
    page.testLogin('wrong', 'wrong');
    const timeoutInMilliseconds = 1000;
    browser.wait(
      protractor.ExpectedConditions.alertIsPresent(),
      timeoutInMilliseconds
    );
    const alertDialog = browser.switchTo().alert();
    expect(alertDialog.getText()).toEqual('Wrong login');
  });
});
