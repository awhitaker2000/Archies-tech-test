# Frontend Technical Test

Welcome to Flutter International (Pokerstars) technical exercise for frontend test engineers!

The site we would like you to test can be found at: https://www.pokerstarssports.uk, you will need to be browsing from a UK IP address in order to access it. Please bear in mind that the site is highly dynamic and both the content and the layout may change over time. You will not need to register an account or log in to the website to complete this test.

### Task 1

Write 10 or more Gherkin scenarios to cover behaviour on the home page.

### Task 2

Create a simple javascript framework using WebdriverIO and Cucumber to automate a selection of the scenarios you have created. You should include at least 5 scenarios.

- https://www.npmjs.com
- https://webdriver.io/docs/gettingstarted
- https://webdriver.io/docs/frameworks#using-cucumber

After completing the tasks, please update the README.md file with your scenarios from Task 1 and instructions on how to run your tests, include any information you think is relevant, interesting or useful. The preferred delivery method for this project is via Github but we will also accept a zipped file sent as an email attachment.

### To run the tests run command line:
```
`npm install` - install required packages
```
```
`npx wdio run wdio.conf.js` - run tests
```

Scenarios that I made tests for can be found in the Scenarios.feature file

### Scenario: User enters incorrect login

```
Given I have opened login modal
When I insert username and password incorrectly
Then the message 'The username and password combination is not recognized. Please try again.' should be visible
```

### Scenario: User opens view more for popular bets

```
Given I am on the Homepage
When I scroll down to popular bets
And click the market list footer button
Then the market list item length that are visible should be extended
```

### Scenario: User opens pokerstars sports news

```
Given I am on the Homepage
When I Click on the pokerstars sports news container
Then www.pokerstars.uk/sports/news should be opened in a new tab
```

### Scenario: User opens help page

```
Given I am on the Homepage
When I click on the help button in the header
Then url should change to www.pokerstars.uk/help
```

### Scenario: User adds selection to betslip

```
Given I am on the Homepage
When I click any random odds selection on the page
Then a betslip container should be visible
```

### Scenario: User opens Login modal

```
Given I am on the Homepage
When I click the Login Button
Then Login modal should be opened
```

### Scenario: User opens Promotions page

```
Given I am on the Homepage
When I click Promotions in the Sports Nav list
Then current promotions should be displayed
```

### Scenario: User opens in-play markets

```
Given I am on the Homepage
When I click on in-play category
Then all current in-play matches should be displayed
```

### Scenario: User changes to decimal odds

```
Given I am on the Homepage
Then the current odds format should be visible on the odds format Button
When I click the odds format button
Then the alternative odds format options should be displayed
```

### Scenario: User opens A-Z betting categories

```
Given I am on the Homepage
When I click the extended menu list
Then all categories should be displayed in a drop down menu
```

If I had more time to complete the task I would have added more detailed tests that are more specific as to what should be displayed. It also would be good to have a practice account so login tests could be made, and then I could check to see if the logged in users page is personalised correctly.
