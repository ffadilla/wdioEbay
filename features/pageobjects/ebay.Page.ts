import basePage from "./basePage.js"

class ebaySearch extends basePage{

    get CellPhone() { return $('span=Cell Phones & Accessories')}
    get Smartphones() { return $('=Cell Phones & Smartphones')}
    get allFilter() { return $('//body/div[4]/div[4]/div[3]/section[2]/section/ul[1]/li[9]/button')}
    get modalSize() { return $('span=Screen Size')}
    get checkSize() { return $('span=4.0 - 4.4 in')}
    get price() { return $('#c3-mainPanel-price')}
    get minVal() { return $('//body/div[13]/div[2]/div/form/div[1]/div[2]/div[1]/div/fieldset/ul/li/div[2]/div/div[1]/div/input')}
    get maxVal() { return $('//body/div[13]/div[2]/div/form/div[1]/div[2]/div[1]/div/fieldset/ul/li/div[2]/div/div[2]/div/input')}
    get itemLoc() { return $('span=Item Location')}
    get asia() { return $('//body/div[13]/div[2]/div/form/div[1]/div[2]/div[1]/div/fieldset/div[5]/span/span/input')}
    get apply() { return $('.x-overlay-footer__apply=Apply')}
    get product() { return $('#gh-ac')}
    get selectCat() { return $('#gh-cat')}
    get selectButton() { return $('#gh-btn')}
    get verify() { return $('.b-pageheader')}
    get images() { return $('//body/div[8]/div[4]/div[2]/div[1]/div[2]/ul/li[2]/div/div[1]/div/a')}
    get result() { return $('//body/div[8]/div[4]/div[2]/div[1]/div[2]/ul/li[2]/div/div[2]/a/div/span')}
}
export default new ebaySearch()