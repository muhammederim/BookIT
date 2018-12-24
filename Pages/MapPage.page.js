var MapPage=function(){

    this.title        =    $("app-hero .title");
    this.subTitle     =    $("app-hero .subtitle");
    
    this.map          = element(by.linkText("map"));
    this.schedule     = element(by.linkText("schedule"));
    this.my           = element(by.linkText("my"));//$$(".navbar-link");//
    this.general      = element(by.linkText("general"));
    this.hunt         =element(by.linkText("hunt"));
    this.self         = element(by.linkText("self"));
    this.team         = element(by.linkText("team"));
    this.signOut      = element(by.linkText("sign out"));
    

}
module.exports=new MapPage();
