// *notes to self
// sample test

// *actions taken
// downlaoded latest chromedriver and saved to users/vnkc/node_modules/selenium-drivers
// /Users/vnkc/node_modules/selenium-webdriver/lib/webdriver.js: 842: 17
// globally installed 'npm install - g chromedriver'
// locally installed 'npm install --save chromedriver'


let webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

let driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

// non-country specific Google search
driver.get('http://www.google.com/');
// enter 'wiki' into search
driver.findElement(By.name("q")).sendKeys("wiki");
// click search button
driver.findElement(By.name("btnK")).click();
// wait 1 second for title to show up
driver.wait(check_title, 1000);

function check_title() {
    let promise = driver.getTitle().then(function(title) {
        // title inside head of html element of search page should be 'wiki - Google Search'
        if (title === 'wiki - Google Search') {
            console.log('successful search');
            // return true to end
            return true;
        } else {
            console.log('fail -- instead got ' + title)
        }
        return promise;
    });

}