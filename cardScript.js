$(document).ready(function(){
  $(".play-button").click(function(){
    $(this).hide();
    var second = 0, minute = 0;
     //start  stop-watch
    $("#stopwatch1").html(" 0: 0");
    setInterval(stopWatch, 1000);
    var clc=0;
    var arr1=[];
    var theColorIs1="";
    var cardCounter=0;

    $(".flip-card").click(function(){
      //dont touch card
      $(this).css("pointer-events","none");
      theColorIs1 = $($(this).children()).css("background-color");
      arr1.push(theColorIs1);
      if(arr1.length==2){
        for(var i=0;i<arr1.length;i++){
          for(var j=i+1;j<arr1.length;j++){
            if(arr1[i]==arr1[j]){
              $(".flip-card").css("pointer-events","auto");
              $('div').filter(function() {
                return $(this).css('background-color') == arr1[j];
              }).each(function() {
                $(this).parents().removeClass("flip-card");
                cardCounter++;
                arr1= [];
                theColorIs1="";
              })
            }
            else{
              $(".flip-card").css("pointer-events","auto");
              arr1= [];
            }
          }
        }
      }
      if($(this).children().hasClass("flip-card-inner")){
        $(this).children().removeClass("flip-card-inner");
      }else{
        theColorIs1 = $($(this).children()).css("background-color");
        clc++;
        $(this).children().addClass("flip-card-inner");
      }
      if(clc%3==0 ){
        $(".flip-card").children().removeClass("flip-card-inner");
        clc=0;
        arr1= [];
        theColorIs1="";
      }
      // added time for standby
      setTimeout(myTime, 2300);
      function myTime(){
        if(clc%2==0 ){
          $(".flip-card").children().removeClass("flip-card-inner");
          $(".flip-card").css("pointer-events","auto");
          clc=0;
          arr1= [];
          theColorIs1="";
        }
      }
      if(cardCounter==16){
        alert("Game rebooting!");
        location.reload(true);
      }
    });
    //stopwatch
    function stopWatch(){
      if(second < 59) second = second + 1;
    else
    {
      second = 0; 
      if(minute < 59) minute = minute + 1;
    }
    $("#stopwatch1").html( minute + " : " + second);
   }
  });
});

