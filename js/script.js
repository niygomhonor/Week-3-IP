$(document).ready(function() {
    $(".design").click(function() {
        $(".description-a").toggle(500);
    });
    $(".development").click(function(){
        $(".description-a").hide(500);
        $(".description-b").toggle(500);
    });
   $(".product").click(function(){
        $(".description-b").hide(500);
        $(".description-c").toggle(500);
          });
  });
  function myDesign() {
      var name=document.getElementById("fullName").value;
      var yourEmail=document.getElementById("myEmail").value;
      var message=document.getElementById("sms").value;
      if(name!=" " && yourEmail!="" && message!="" ){
confirm(name+", we have received your message. Thank you fro reaching out to us.");
      }
//    else if (!name.check) {
       
//    } 
       
  
     
  }

