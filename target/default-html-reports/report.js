$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/LCWLogin.feature");
formatter.feature({
  "name": "LCW Login Check",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "LCW Success Login",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@aysenur"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I opens LCWaikiki Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "step_defs.stepDefs.iOpensLCWaikikiHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I goes to Giris Yap Page",
  "keyword": "Then "
});
formatter.match({
  "location": "step_defs.stepDefs.iGoesToGirisYapPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I logs in verify e-mail and password",
  "keyword": "And "
});
formatter.match({
  "location": "step_defs.stepDefs.iLogsInVerifyEMailAndPassword()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I check i\u0027m logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "step_defs.stepDefs.iCheckIMLoggedIn()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to find element with locator By.linkText: Hesabım\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027DESKTOP-UMKRG1E\u0027, ip: \u0027172.17.48.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.12\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy22.isDisplayed(Unknown Source)\r\n\tat pages.LCWHomePage.verifyLogin(LCWHomePage.java:26)\r\n\tat step_defs.stepDefs.iCheckIMLoggedIn(stepDefs.java:35)\r\n\tat ✽.I check i\u0027m logged in(file:///D:/LCWaikiki-Selenium/src/test/resources/features/LCWLogin.feature:9)\r\n",
  "status": "failed"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d99.0.4844.82)\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027DESKTOP-UMKRG1E\u0027, ip: \u0027172.17.48.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.12\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [5ba92113955a28e0603f549bc0d1fc5d, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 99.0.4844.82, chrome: {chromedriverVersion: 99.0.4844.51 (d537ec02474b5..., userDataDir: C:\\Users\\APPLOG~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:55278}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:55278/devtoo..., se:cdpVersion: 99.0.4844.82, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 5ba92113955a28e0603f549bc0d1fc5d\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:614)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:618)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:349)\r\n\tat step_defs.Hooks.teardown(Hooks.java:23)\r\n",
  "status": "failed"
});
});