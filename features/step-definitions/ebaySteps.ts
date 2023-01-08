import { Given,When,Then } from "@wdio/cucumber-framework"
import ebayPage from "../pageobjects/ebay.Page.js"


Given(
  /^I am on the cell Phones and accessories page \"([^\"]*)\"$/, async function (appurl:string) {
    await browser.url(appurl)
    await browser.maximizeWindow()
  }
);

When(
  /^user clicks on cell Phones and Smartphones side navigation$/, async function () {
    await(ebayPage.CellPhone).click()
    await(ebayPage.Smartphones).click()
    await browser.waitUntil(
      async () => (await $('h1=Stay in touch, in style!').getText()) === 'Stay in touch, in style!',
      {
          timeout: 5000,
          timeoutMsg: 'expected text to be different after 5s'
      }
  );
  }
);

When(/^user clicks on more refinement button$/, async function () {
  await browser.scroll(0, 500)
  await(ebayPage.allFilter).click()
});

When(/^user clicks on screen size price (.+) and (.+) item location$/, async function (minVal:string, maxVal:string) {
  await (ebayPage.modalSize).click()
  await (ebayPage.checkSize).click()
  await (ebayPage.price).click()
  await browser.waitUntil(
    async () => (await $('span=Show items priced from').getText()) === 'Show items priced from',
    {
        timeout: 9000
    }
  );
  await (ebayPage.minVal).click()
  await (await ebayPage.minVal).setValue(minVal)
  await (ebayPage.maxVal).click()
  await (await ebayPage.maxVal).setValue(maxVal)

  await (ebayPage.itemLoc).click()
  await browser.waitUntil(
    async () => (await $('span=Asia').getText()) === 'Asia',
    {
        timeout: 5000
    }
  );

  await (ebayPage.asia).click()
  await (ebayPage.apply).click()
});


Given(/^user go to website \"([^\"]*)\"$/,async function (appurl) {
    await browser.url(appurl)
    await browser.maximizeWindow()
});

When(/^user types any search string in the search bar (.+)$/,async function (product:string) {
  await (await ebayPage.product).setValue(product)
  await expect(ebayPage.product).toHaveValue(product)
});

When(/^user change search category and click search button$/,async function () {
  await (ebayPage.selectCat).click()
  await (ebayPage.selectCat.selectByAttribute('value', '15032'))
  await (ebayPage.selectButton).click()
});


//This step only for Assertion
Then(/^user verifying that the filter tags are applied$/, async function () {
  await browser.waitUntil(
    async () => (await $('span=3 filters applied').getText()) === '3 filters applied',
    {
        timeout: 7000
    }
  );

  await expect(ebayPage.verify).toHaveText('4.0 - 4.4 Inch Cell Phones & Smartphones between IDR2,000,000.00 and IDR3,000,000.00')
});

Then(/^verify that the page loads completely$/,async function () {
  await expect(ebayPage.images).toHaveHrefContaining('https://www.ebay.com/itm/')
});

Then(/^verify that the first result name matches with the search string$/,async function () {
  await expect(ebayPage.result).toHaveTextContaining('Apple iPhone')
});
