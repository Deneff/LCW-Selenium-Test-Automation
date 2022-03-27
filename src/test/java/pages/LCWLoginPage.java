package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utils.Driver;

public class LCWLoginPage {
    public LCWLoginPage(){
        PageFactory.initElements(Driver.get(), this);
    }

    @FindBy(name = "email")
    public WebElement emailInput;

    @FindBy(name ="password")
    public WebElement passInput;

    @FindBy(css = "#login > div > div > div > div > form > button")
    public WebElement loginButton;

    public void logIn(){
        emailInput.click();
        emailInput.sendKeys("aysnrkynr5288@gmail.com");
        passInput.click();
        passInput.sendKeys("Aysnr123");
        loginButton.click();

    }
}
