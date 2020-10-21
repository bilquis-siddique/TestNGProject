$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Login with Valid Credentials",
  "description": "",
  "id": "login;login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User Launch Firefox browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User Opens URL",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User Enters Username and pwd",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User Clicks Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Page Title Verified",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Close Browser",
  "keyword": "And "
});
formatter.match({
  "location": "loginSteps.user_Launch_Firefox_browser()"
});
formatter.result({
  "duration": 3771496352,
  "status": "passed"
});
formatter.match({
  "location": "loginSteps.user_Opens_URL()"
});
formatter.result({
  "duration": 1347548212,
  "status": "passed"
});
formatter.match({
  "location": "loginSteps.user_Enters_Username_and_pwd()"
});
formatter.result({
  "duration": 257947433,
  "status": "passed"
});
formatter.match({
  "location": "loginSteps.user_Clicks_Login_Button()"
});
formatter.result({
  "duration": 3861214040,
  "status": "passed"
});
formatter.match({
  "location": "loginSteps.page_Title_Verified()"
});
formatter.result({
  "duration": 3010201761,
  "status": "passed"
});
formatter.match({
  "location": "loginSteps.close_Browser()"
});
formatter.result({
  "duration": 910770609,
  "status": "passed"
});
});