
    $("#d-image").click(function(){
      $("#d-image").slideDown("2000");
      $("#design").show(2000);
    });
    $("#design").click(function(){
      $("#design").slideUp();
      $("#d-image").slideDown("2000");
    });
    $("#d-icon").click(function(){
        $("#d-icon").slideDown("2000");
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