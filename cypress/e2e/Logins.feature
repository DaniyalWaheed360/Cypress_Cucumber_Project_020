Feature: Login Functionality with Multiple Credentials

  Background:
    Given I open the GetInsights login page

  Scenario Outline: Login test with different email and password combinations
    When I enter the demo password
    And I click the menu icon
    And I navigate to the login page
    And I enter email "<email>" and password "<password>"
    And I click the login button
    Then I should see either a success message or an alert
    And If login fails for "<email>", an email alert is sent

    Examples:
      | email                         | password |
      | Annualpro0@nullbrainer.io     | q        |
      | mno@nullbrainer.io            | q        |
      | IPtesting@nullbrainer.io      | q        |
      | Annualpro0@nullbrainer.io     | 123      |
