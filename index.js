const { Builder, Key, util } = require("selenium-webdriver");

const webdriver = require("selenium-webdriver"),
  By = webdriver.By,
  until = webdriver.until;

const driver = new webdriver.Builder().forBrowser("chrome").build();

driver.get("https://personal.rbs.co.uk/personal.html");


driver.findElement(By.name("q")).sendKeys("savings", Key.RETURN);
// driver.findElement(By.name("iah__search_btn-box")).click();
driver.wait(check_for_phrase, 2000);

function check_for_phrase() {
//   if (driver.getPageSource().contains("Savings - Compare Savings Accounts | Royal Bank of Scotland")) {
//       console.log("success")
//   } else {
//       console.log("failure")
//   }
    console.log("hello")
}
