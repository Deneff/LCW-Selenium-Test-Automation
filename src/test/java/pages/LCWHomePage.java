package pages;

import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utils.Driver;

public class LCWHomePage {
    public LCWHomePage(){
        PageFactory.initElements(Driver.get(), this);
    }

    @FindBy( id = "user_1_")
    public WebElement loginButton;

    @FindBy (linkText = "Hesabım")
    public WebElement myAccountButton;

    public void openGirisYap(){
        loginButton.click();
    }

    public void verifyLogin(){
        Assert.assertTrue(myAccountButton.isDisplayed());
    }

}
