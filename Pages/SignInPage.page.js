var SignInPage=function(){
    
this.email        =    $('[name="email"]');
this.password     =    $('[name="password"]');
this.signinButton =    element(by.buttonText("sign in"));
this.title        =    $(".container .title");
this.subtitle     =    $(".container .subtitle");
this.labelsLogin  =    $$(" div.field-label.is-normal > label");



}
module.exports=new SignInPage();