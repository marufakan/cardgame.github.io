$(document).ready(function(){
    var clc=0;
    var arr1=[];
    var theColorIs1="";

    $(".flip-card").click(function(){
      theColorIs1 = $($(this).children()).css("background-color");
      arr1.push(theColorIs1);
      if(arr1.length==2){
        for(var i=0;i<arr1.length;i++){
          for(var j=i+1;j<arr1.length;j++){
            if(arr1[i]==arr1[j]){
              console.log("---eşit---");
              $('div').filter(function() {
                return $(this).css('background-color') == arr1[j];
              }).each(function() {
                $(this).parents().removeClass("flip-card");
                arr1= [];
                theColorIs1="";
              })
            }
            else{
              console.log("---eşit değil---");
              arr1= [];
            }
          }
        }
      }

      if($(this).children().hasClass("flip-card-inner")){
        console.log("d1 "+clc);
          $(this).children().removeClass("flip-card-inner");
      }else{
        theColorIs1 = $($(this).children()).css("background-color");
        console.log("d2 "+clc);
        clc++;
        $(this).children().addClass("flip-card-inner");
      }
      if(clc%3==0 ){
        console.log("d3 "+clc);
        $(".flip-card").children().removeClass("flip-card-inner");
        clc=0;
        arr1= [];
        theColorIs1="";
      }
      //add time
      setTimeout(myTime, 2600);
      function myTime(){
        if(clc%2==0 ){
          $(".flip-card").children().removeClass("flip-card-inner");
          clc=0;
          arr1= [];
              theColorIs1="";
        }
      }
  });

});

