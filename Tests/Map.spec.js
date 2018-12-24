//Pages
var Base         =require('../Utilities/Base.js');
var SignInPage   =require("../Pages/SignInPage.page.js");
var CybertekData =require("../TestData/CybertekData.json");

describe("Map Page", ()=>{
    
    beforeAll(function(){
        Base.navigateToSignIn(Base.homeUrl);
        SignInPage.email.sendKeys(CybertekData.signIn.email);
        SignInPage.password.sendKeys(CybertekData.signIn.password);
        SignInPage.signinButton.click();
        
    });
    
    it("should Verify the URL and welcomeText", ()=>{
        expect(browser.getCurrentUrl()).toEqual(CybertekData.map.url);
        expect(MapPage.title).toEqual(CybertekData.map.welcomeText1);
        expect(MapPage.subtitle).toEqual(CybertekData.map.welcomeText2);
    });

    it("should Verify all navigation labels on top Right side", ()=>{
        expect(SignInPage.title.getText()).toEqual(CybertekData.signIn.welcomeText1);
        expect(SignInPage.subtitle.getText()).toEqual(CybertekData.signIn.welcomeText2);
    });

})
