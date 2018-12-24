//Pages
var Base         =require('../Utilities/Base.js');
var SignInPage   =require("../Pages/SignInPage.page.js");
var CybertekData =require("../TestData/CybertekData.json");
var MapPage      =require("../Pages/MapPage.page.js")

//DB Connection
var pgp          = require("pg-promise")(/*options*/);
var connectionString=require("../TestData/DbConnection.js");
//queries connection
var queries=require("../TestData/queries.js");

describe("SignIn Page", ()=>{
    
    var db=pgp(connectionString);
    var arr=[];
    var username="";
    var password="";
    
    beforeEach(function(){
        Base.navigateToSignIn();
    });
    
    it("should Verify the URL and correct Title of Sign in Page", ()=>{
        expect(browser.getCurrentUrl()).toEqual(CybertekData.signIn.url);
        expect(browser.getTitle()).toEqual(CybertekData.signIn.titlePage);
    });

    it("should Verify the welcomText of Sign in Page", ()=>{
        expect(SignInPage.title.getText()).toEqual(CybertekData.signIn.welcomeText1);
        expect(SignInPage.subtitle.getText()).toEqual(CybertekData.signIn.welcomeText2);
    });

    it("should Verify  labels isDisplayed", ()=>{
        expect(SignInPage.labelsLogin.get(0).getText()).toEqual(CybertekData.signIn.emailLabel);
        expect(SignInPage.labelsLogin.get(1).getText()).toEqual(CybertekData.signIn.passwordLabel);
        expect(SignInPage.signinButton.isDisplayed()).toBe(true);
        expect(Base.BugBustersText.isDisplayed()).toBe(true);
        expect(Base.gitHubLink.isDisplayed()).toBe(true);
        expect(Base.mailTo.isDisplayed()).toBe(true);
    } )

    it("should Verify Sign functionality using Database", ()=>{
      //Pre-test trials
       // Show all the users

    //    db.any(`select firstname, lastname, email, role, name
    //    from users inner join team
    //    on users.team_id=team.id`)
    //      .then(function(result){
    //             arr=result;
    //      }).catch(function(error){
    //          console.log(error);
    //      }).then(function(){
    //          //All our automation code will be here

    //          console.log(arr); 
    //      })

        //Fetch the data from databas

        db.any(queries.q1)
            .then(function(result){  //callback
               //console.log(result.length);
               username=result[0].email;
               //console.log(username);
               password=result[0].firstname.toLowerCase()+result[0].lastname.toLowerCase();
               //console.log(pass);
            }).catch(function(error){
                console.log(error);
            }).then(function(){
                //All UI automation code 

        Base.navigateToSignIn();
        SignInPage.email.sendKeys(username);
        SignInPage.password.sendKeys(password);
        SignInPage.signinButton.click();
        expect(MapPage.title.getText()).toEqual('VA');
            });
    });
});