import { AppPage } from './app.po';
import { browser } from 'protractor';
describe(' App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display login screen', () => {
    page.navigateTo();
    page.presentUrl().then((x)=>{
      console.log(x);
      expect(x).toContain('login');
    });
  });

  it('Button enable on right data entered', () => {
    page.setEmail("admin@yopmail.com");
    page.setPassword("admin123");
    expect(page.getButton()).toBeFalsy();
  });

  it('navigate to dashboard on click', () => {
    page.loginButton().click();
    page.presentUrl().then((x)=>{
      console.log(x);
      expect(x).toContain('localhost:49152');
    });
  });

  it('display user details', () => {
    page.getIndex().click();
    page.presentUrl().then((x)=>{
      console.log(x);
      expect(x).toContain('localhost:49152/detail/0');
    });
  });


  it('go back', () => {
    page.navigateTo();
    page.getaddUserButton().click();
    page.setFirstName("Chandra");
    page.setLastName("Shekar");
    page.setAddUserEmail("shekard.chandra869@gmail.com");
    page.setPhone("7259284709");
    page.getRegisterButton().click();
    page.presentUrl().then((x)=>{
      console.log("url",x);
      expect(x).toBe('http://localhost:49152/');
    }); 
  });
  it('logout', () => {
    page.getLogoutButton().click();
    page.presentUrl().then((x)=>{
      console.log("url",x);
      expect(x).toBe('http://localhost:49152/login');
    }); 
  });


  /*
  it('should display login screen', () => {
    page.navigateTo();
    page.setEmail("admin@yopmail.com");
    page.setPassword("admin123");
    expect(page.getButton()).toBeFalsy();
    page.loginButton().click();
    page.presentUrl().then((x)=>{
      console.log(x);
      expect(x).toContain('localhost:49152');
    });
    browser.pause(49152);
  });


  it('should display login screen', () => {
    page.navigateTo();
    page.setEmail("admin@yopmail.com");
    page.setPassword("admin123");
    expect(page.getButton()).toBeFalsy();
    page.loginButton().click();
    page.presentUrl().then((x)=>{
      console.log(x);
      expect(x).toContain('localhost:49152');
    });
    browser.pause(49152);
  });
*/

});
