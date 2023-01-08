export default class basePage {
    
    public open (path: string) {
        return browser.url(`https://www.ebay.com/${path}`)
    }
}
