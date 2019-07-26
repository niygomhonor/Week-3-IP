$(document).ready(function() {
    $(".design").click(function() {
        $(".description-a").toggle(500);
        $(".design").toggle();
    });
    $(".description-a").click(function(){
$(".design").toggle(500);
$(".description-a").toggle(500);
    })
    $(".development").click(function(){
        $(".description-a").hide(500);
        $(".development").toggle();
        $(".description-b").toggle(500);
    });
    $(".description-b").click(function(){
        $(".development").toggle(500);
        $(".description-b").toggle(500);
            })
   $(".product").click(function(){
        $(".description-b").hide(500);
        $(".product").toggle();
        $(".description-c").toggle(500);
          });
          $(".description-c").click(function(){
            $(".product").toggle(500);
            $(".description-c").toggle(500);
                })

    $("form.form-row").submit(function(){
        var name=$("#fullName").val();
        var yourEmail=$("#myEmail").val();
        var message=$("#sms").val();
        if (name !==" ") {
        alert(name +", we have received your message. Thank you fro reaching out to us.")}   
        })
    /********************************************************************************************* */
        $(".work-a").hover(function() {
           $(this).css("transform","scale(1.1)"); 
           $("#w-4").slideDown(2000);
        },function () {
            $(this).css("transform","none"); 
            $("#w-4").hide();
            $(".work-a").show();
         })
 /************************************************************************************************ */       

        $(".work-b").hover(function() {
            
            $(this).css("transform","scale(1.1)"); 
            $("#w-3").slideDown(2000);
         },function () {
            $(this).css("transform","none"); 
            $("#w-3").hide();
            $(".work-b").show();
         })

/**************************************************************************************************** */
         $(".work-c").hover(function() {
            
            
            $(this).css("transform","scale(1.1)"); 
            $("#w-2").slideDown(2000);
         },function () {  
            $(this).css("transform","none");  
            $("#w-2").hide();
            $(".work-c").show(); 
         })

/**************************************************************************************************** */
         $(".work-d").hover(function() {
            
            $(this).css("transform","scale(1.2)");
            $("#w-1").slideDown(2000);
         },function () {
            $(this).css("transform","none"); 
            $("#w-1").hide();
            $(".work-d").show();
         })

/*************************************************************************************************** */
         $(".work-e").hover(function() {
           
            $(this).css("transform","scale(1.2)");
            $("#w-5").slideDown(2000);
         },function () {
            $(this).css("transform","none"); 
            $("#w-5").hide();
            $("work-e").show();
         })

/************************************************************************************************ */
         $(".work-f").hover(function() {
           
            //$("#w-7").hide();
            $(this).css("transform","scale(1.2)");
            $("#w-6").slideDown(2000);
         },function () {
            $(this).css("transform","none"); 
            $("#w-6").hide();
         })

/******************************************************************************************************8 */
         $(".work-g").hover(function() {
            
            //$("#w-8").hide();
            $(this).css("transform","scale(1.2)"); 
            $("#w-7").slideDown(2000); 
         },function () {
            $(this).css("transform","none"); 
            $("#w-7").hide(); 
            $(".work-g").show();
         })

/************************************************************************************************** */
         $(".work-h").hover(function() {
            
            //$("#w-1").hide();
            $(this).css("transform","scale(1.2)"); 
            $("#w-8").slideDown(2000);
         },function () {
            $(this).css("transform","none"); 
            $("#w-8").hide();
            $(".work-h").show();
         })
       
  /***************************************************************************************************** */       
  });


