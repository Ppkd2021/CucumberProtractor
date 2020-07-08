const { Given, When, Then } = require('cucumber');
const { browser } = require('protractor');
import {Person} from '../page-objects/search-form.po';
import {waits} from '../page-objects/commonwait';
const chai = require('chai');
chai.use(require('chai-as-promised'));
const Person_details = new Person();
const waits_po = new waits();
Given('I am at Homepage', { timeout: 60 * 1000 }, async () => {
    await waits_po.elementisvisible(Person_details.input());
});
When('Click on {string} radio button.', { timeout: 60 * 1000 }, async (string) => {
     await Person_details.radiobutton(string).click();
});
When('I search be {string} name', { timeout: 60 * 1000 }, async (string) => {
    await Person_details.input().sendKeys(string);
    await Person_details.searchBtn().click();
    await browser.sleep(2000);
});

Then('Validate that I see {string} details having {string} ,{string},{string},{string}.', { timeout: 60 * 1000 }, async (string, string2, string3, string4, string5) => {
    await chai.expect(Person_details.firstCharacterName(string).getAttribute('innerText'))
        .to.eventually.contain(string);
    await chai.expect(Person_details.persondetails(string2).isPresent()).to.eventually.be.true;
    await chai.expect(Person_details.persondetails(string3).isPresent()).to.eventually.be.true;
    await chai.expect(Person_details.persondetails(string4).isPresent()).to.eventually.be.true;
    await chai.expect(Person_details.persondetails(string5).isPresent()).to.eventually.be.true;
    await Person_details.input().clear();
});
Then('Validate that I see {string} details when searched with Sky.', { timeout: 60 * 1000 }, async (string) => {
          await chai.expect(Person_details.namesearch(string).isPresent()).to.eventually.be.true;
          browser.sleep(1000);
          await Person_details.input().clear();
         });
Then('Validate that I see not found message.', { timeout: 60 * 1000 }, async () => {
        await chai.expect(Person_details.nocontent().isPresent()).to.eventually.be.true;
        browser.sleep(1000);
        await Person_details.input().clear();
        
  });
Then('Search with empty field and Validate that I see not found message.', { timeout: 60 * 1000 }, async () => {
    await Person_details.input().clear();
    await Person_details.searchBtn().click();
    await chai.expect(Person_details.nocontent().isPresent()).to.eventually.be.true;
    })
When('Type {string} and hit enter.', { timeout: 60 * 1000 }, async (string) => {
        await Person_details.input().sendKeys(string);
        await browser.actions().sendKeys(protractor.Key.ENTER).perform();
        await browser.sleep(2000);
    });
    
