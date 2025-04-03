Feature: Login

  Scenario Outline: Login with valid Customer credentials
    Given I open the login page
    When I enter "<email>" and "<password>"
    And I click the login button
    Then I should be redirected to the HomePage

  Examples:
    | role           | email                               | password    |
    | Customer       | f89lw@una6i0re.mailosaur.net        | qQ112233@!  |
    

  Scenario Outline: Login with valid admin credentials
    Given I open the Login page
    When I enter admin "<email>" and "<password>"
    When I click the admin login button
    Then I should be redirected to the dashboard
    
  Examples:
    | role           | email                               | password    |
    | Admin          | admin@getinsights.org               | adminrootpassword |  
      
