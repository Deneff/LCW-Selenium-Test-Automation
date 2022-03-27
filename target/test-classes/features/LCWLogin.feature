Feature: LCW Login Check


  @aysenur
Scenario: LCW Success Login
  Given I opens LCWaikiki Home Page
  Then I goes to Giris Yap Page
  And I logs in verify e-mail and password
  Then I check i'm logged in