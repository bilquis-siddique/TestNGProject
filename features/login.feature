Feature: Login

Scenario: Login with Valid Credentials
Given User Launch Firefox browser
When User Opens URL
And User Enters Username and pwd
And User Clicks Login Button
Then Page Title Verified
And Close Browser
