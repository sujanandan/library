
function validate()
 {console.log("hai");
 console.log(document);
 uname.focus();
     let eMail1=document.getElementById("email").value;
    
     let uname1=document.getElementById('uname').value;
     let pwds=document.getElementById('psw').value;
     console.log(eMail1);
     let pwds1=document.getElementById('psw1').value;
 // Email validation
 

  let regexp=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if((uname1=="")||(!isNaN(uname1)))
  {
    // alert("User name should be Alphabets");
    uname.focus();
    document.getElementById("uname").value="";
    document.getElementById('uspan').innerHTML="Sorry!! username empty";
    return false;
  }
  if((eMail1=="")||!(regexp.test(eMail1)))
  {
    document.getElementById('uspan').innerHTML="";
    email.focus();
    document.getElementById("email").value="";
    document.getElementById('espan').innerHTML="Sorry!! Invalid email format";
    return false;
  }

  if((pwds=="")||(pwds.length<=7)||(pwds.length>12))
  {
    // alert("Password length should be with in 7 -12 ");
    psw.focus();
    document.getElementById('espan').innerHTML="";
    document.getElementById("psw").value="";
    document.getElementById('pspan').innerHTML="Sorry!! password should be 7-12 characters";
    return false;
  }

  if(pwds!=pwds1)
  {
    // alert("Please re enter correct password");
    psw1.focus();
    document.getElementById('pspan').innerHTML="";
    document.getElementById("psw1").value="";
    document.getElementById('rspan').innerHTML="Sorry!! please confirm password";
    return false;
  }
  else{
alert("Registration successful");
    return true;

}}
function validatel()
 {console.log("hai");
 console.log(document);

     let eMaill1=document.getElementById("emaill").value;
      
     let pwdls=document.getElementById('pswl').value;
     console.log(eMaill1);
    
 // Email validation
   let regexp=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if((eMaill1=="")||!(regexp.test(eMaill1)))
  {
    // alert("Please Enter valid email");
    emaill.focus();
    document.getElementById("emaill").value="";
    document.getElementById('emailspan').innerHTML="Sorry!! Invalid email format";
    return false;
  }
else{
  if((pwdls=="")||(pwdls.length<=7)||(pwdls.length>12))
  {
    // alert("Password lenght should be with in 7 -12 ");
    pswl.focus();
    document.getElementById("pswl").value="";
    document.getElementById('pwdspan').innerHTML="Sorry!! password should be of 7-12 characters";
    return false;
  }
else{
alert("You are logged in....");
    return true;}
  }
 }
function getdata()
{
  alert("We will look into it")
  return true;
}

//  let regexp=/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,5})(.[a-z]{2,3})?$/;
