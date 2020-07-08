const {BeforeAll} = require('cucumber');
import { browser } from 'protractor';

BeforeAll({ timeout: 60 * 1000 }, async function() {
    // This hook will be executed before scenarios tagged with @foo
    console.log('Test is Started');
    await browser.get('http://localhost:4200/');
    await browser.manage().window().maximize();
    await browser.sleep(2000);

}
);
