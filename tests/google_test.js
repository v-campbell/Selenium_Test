const { Builder, By, Key, util } = require("selenium-webdriver");
const assert = require("assert");

async function example() {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("http://www.google.com/");
    await driver.findElement(By.name("q")).sendKeys("Selenium", Key.RETURN);
    let title = await driver.getTitle();

    try {
        assert.equal(title, "Selenium - Google Search");
        console.log('success');
    } catch(e) {
        console.log(e);
        console.log("fail");
    }
}

example();
