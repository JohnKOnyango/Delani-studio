
    $("#d-image").click(function(){
      $("#d-image").slideDown("2000");
      $("#design").show(2000);
    });
    $("#design").click(function(){
      $("#design").slideUp();
      $("#d-image").slideDown("2000");
    });
    $("#d-icon").click(function(){
        $("#develop").show(2000);
      });
      $("#develop").click(function(){
        $("#develop").slideUp();
        $("#d-icon").slideDown("2000");
      });
       $("#pro_icon").click(function(){
      $("#pro_icon").slideDown("2000");
      $("#prod").show(2000);
    });
    $("#prod").click(function(){
      $("#prod").slideUp();
      $("#pro_icon").slideDown("2000");
    });
   
        $("#pro1").mouseenter(function(){
          $("#hover1").show();
        }).mouseleave(function(){
          $("#hover1").hide();
        });
       
        $("#pro2").mouseenter(function(){
          $("#hover2").show();
        }).mouseleave(function(){
          $("#hover2").hide();
        });
        $("#pro3").mouseenter(function(){
          $("#hover3").show();
        }).mouseleave(function(){
          $("#hover3").hide();
        });
        $("#pro4").mouseenter(function(){
          $("#hover4").show();
        }).mouseleave(function(){
          $("#hover4").hide();
        });
        $("#pro5").mouseenter(function(){
          $("#hover5").show();
        }).mouseleave(function(){
          $("#hover5").hide();
        });
        $("#pro6").mouseenter(function(){
          $("#hover6").show();
        }).mouseleave(function(){
          $("#hover6").hide();
        });
        $("#pro7").mouseenter(function(){
          $("#hover7").show();
        }).mouseleave(function(){
          $("#hover7").hide();
        });
        $("#pro8").mouseenter(function(){
          $("#hover8").show();
        }).mouseleave(function(){
          $("#hover8").hide();
        });
    //     $(".submit").click(function () {
    //       var Name = $("#mce-FNAME").val();
    //       var Email = $("#mce-EMAIL").val();
    //       var Message = $("#mce-MESSAGE");
          
    //       if (Name == "" || Email == "" || Message == "") {
    //           alert("Please make sure you have filled in the form correctly!");
    //       } else {
    //           alert( Name + "", "We have received your message. Thank you for reaching out to us.");
    //      // e.preventDefault();
    //         } 
    // });
    function validateEmail(email){
      let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
      if(email.match(regex)){
    
        return (true);
      }
      else {
    
        return (false);
         alert("Enter a valid email");
      }
    
    }