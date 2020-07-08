const {After} = require('cucumber');
import { browser } from 'protractor';

After(async function() {
    // This hook will be executed after each scenario to capture screenshot
    console.log('Test is completed');
     const screenshot = await browser.takeScreenshot();
     this.attach(screenshot, 'image/png');

}
);
