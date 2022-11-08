Feature: Pokerstars Homepage

  Scenario: User opens Login modal
    Given I am on the Homepage
    When I click the Login Button
    Then Login modal should be opened

  Scenario: User opens Promotions page
    Given I am on the Homepage
    When I click Promotions in the Sports Nav list
    Then current promotions should be displayed

  Scenario: User opens in-play markets
    Given I am on the Homepage
    When I click on in-play category
    Then all current in-play matches should be displayed

  Scenario: User changes to decimal odds
    Given I am on the Homepage
    Then the current odds format should be visible on the odds format Button
    When I click the odds format button
    Then the alternative odds format options should be displayed

  Scenario: User opens A-Z betting categories
    Given I am on the Homepage
    When I click the extended menu list
    Then all categories should be displayed in a drop down menu


