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
          function myDesign() {
            var name=document.getElementById("fullName").value;
            var yourEmail=document.getElementById("myEmail").value;
            var message=document.getElementById("sms").value;
            if(name!=" " && yourEmail!="" && message!="" ){
      confirm(name+", we have received your message. Thank you fro reaching out to us.");
            }    
        }

        $(".work-a").hover(function() {
           $(this).css("transform","scale(1.1)"); 
         

        },function () {
            $(this).css("transform","none") 
            
         })


        $(".work-b").hover(function() {
            $(".work-a").stop();
            $(this).css("transform","scale(1.2)"); 
           
         },function () {
            $(this).css("transform","none") 
         })


         $(".work-c").hover(function() {
            $(".work-b").stop();
            $(this).css("transform","scale(1.2)"); 
           
         },function () {
            $(this).css("transform","none")  
         })


         $(".work-d").hover(function() {
            $(this).css("transform","scale(1.2)");
            $(".work-c").stop(); 
         },function () {
            $(this).css("transform","none") 
         })


         $(".work-e").hover(function() {
            $(this).css("transform","scale(1.2)"); 
            $(".work-d").stop();
         },function () {
            $(this).css("transform","none") 
         })


         $(".work-f").hover(function() {
            $(this).css("transform","scale(1.2)");
            $(".work-e").stop(); 
         },function () {
            $(this).css("transform","none") 
         })


         $(".work-g").hover(function() {
            $(this).css("transform","scale(1.2)"); 
            $(".work-f").stop();
         },function () {
            $(this).css("transform","none") 
         })


         $(".work-h").hover(function() {
            $(".work-g").stop();
            $(this).css("transform","scale(1.2)"); 
            
         },function () {
            $(this).css("transform","none") 
         })
  });


