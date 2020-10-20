package stepDefs;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class loginSteps {

	public WebDriver driver;

	@Given("User Launch Firefox browser")
	public void user_Launch_Firefox_browser() {
	    //System.setProperty("webdriver.gecko.driver", "/Users/bilquis/Documents/Selenium/MavenCucumberBDD/geckodriver.exe");
	    driver = new FirefoxDriver();
	}

	@When("User Opens URL")
	public void user_Opens_URL() {
	    driver.get("https://admin-demo.nopcommerce.com/login");
	    driver.manage().window().maximize();
	}

	@When("User Enters Username and pwd")
	public void user_Enters_Username_and_pwd() {	    
		driver.findElement(By.xpath("//input[@id='Email']")).clear();
		driver.findElement(By.xpath("//input[@id='Email']")).sendKeys("admin@yourstore.com");
		driver.findElement(By.xpath("//input[@id='Password']")).clear();
		driver.findElement(By.xpath("//input[@id='Password']")).sendKeys("admin");
	}

	@When("User Clicks Login Button")
	public void user_Clicks_Login_Button() throws InterruptedException {
		driver.findElement(By.xpath("//input[@class='button-1 login-button']")).click();
	}

	@Then("Page Title Verified")
	public void page_Title_Verified() throws InterruptedException {
		Thread.sleep(3000);
		String expextedTitle = "Dashboard / nopCommerce administration";
		String actualTitle = driver.getTitle();
		if (actualTitle.equalsIgnoreCase(expextedTitle)){
			System.out.println("Page Title Matched");
		}else{
			System.out.println("Page Title Didn't Match");
		}
	}

	@Then("Close Browser")
	public void close_Browser() {
		driver.quit();
	}
}
