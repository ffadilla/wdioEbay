Feature: ebay website

    Scenario: Access a Product via category after applying multiple filters

        Given I am on the cell Phones and accessories page "https://www.ebay.com/b/Electronics/bn_7000259124"
        When user clicks on cell Phones and Smartphones side navigation
        When user clicks on more refinement button
        When user clicks on screen size price <MinVal> and <MaxVal> item location 
        Then user verifying that the filter tags are applied

        Examples:
            | MinVal | MaxVal |
            | 2000000| 3000000|

    Scenario: Access a Product via Search

        Given user go to website "https://www.ebay.com"
        When user types any search string in the search bar <product>
        When user change search category and click search button
        Then verify that the page loads completely
        Then verify that the first result name matches with the search string

        Examples:
            | product |
            | iPhone  |