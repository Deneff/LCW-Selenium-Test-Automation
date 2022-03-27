package step_defs;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import pages.LCWHomePage;
import pages.LCWLoginPage;

public class stepDefs {
    LCWHomePage homepage = new LCWHomePage();
    LCWLoginPage loginpage= new LCWLoginPage();

    @Given("I opens LCWaikiki Home Page")
    public void iOpensLCWaikikiHomePage() {

    }


    @Then("I goes to Giris Yap Page")
    public void iGoesToGirisYapPage() {
        homepage.openGirisYap();

    }


    @And("I logs in verify e-mail and password")
    public void iLogsInVerifyEMailAndPassword() {
        loginpage.logIn();

    }

    @Then("I check i'm logged in")
    public void iCheckIMLoggedIn() {

        homepage.verifyLogin();
    }


}
