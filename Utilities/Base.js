var Base=function(){
    this.homeUrl       ="https://cybertek-reservation-qa.herokuapp.com/";
    this.BugBustersText=$(".content.has-text-centered p");
    this.gitHubLink    =$("div > a:nth-child(2) > span > fa > i");
    this.mailTo        =$("div > a:nth-child(3) > span > fa > i");
    this.navigateToSignIn=function(){
        browser.get(this.homeUrl);
    };
}
module.exports=new Base();
