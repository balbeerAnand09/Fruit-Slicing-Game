var playing = false ;
var score;
var trialsleft;
var fruits = ['f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8', 'f9'];
var step ;
var action ;
$(document).ready(function(){
$("#startreset").click(function(){
   if(playing == true){
       //reload page
       location.reload();
   }
   else{
       //we are not playing
       playing = true ; //game initiated
       score = 0; //set score to 0
       $("#scorevalue").html(score);
       $("#trialsleft").show();
       trialsleft = 3;
       addhearts();
       $("#gameover").hide();
       //change button text to reset game
       $("#startreset").html("Reset Game");
       startAction();
   }
}); 

$("#fruit1").mouseover(function(){
    score++;
    $("#scorevalue").html(score);//update score
    $("#slicesound")[0].play();
    //stop fruit and hide it
    clearInterval(action);
    //send new fruit
    $("#fruit1").hide("explode", 500);
    setTimeout(startAction, 500);
    
});



function addhearts(){
    $("#trialsleft").empty();
    for(i=0;i<trialsleft;i++){
        $("#trialsleft").append('<img src="images/heart.png" class="life">');
    }
    
}

//start sending fruits
function startAction(){
    $("#fruit1").show();
    choosefruit(); //choose fruits
$("#fruit1").css({'left': Math.round(550*Math.random()), 'top': -50});
    
step = 1 + Math.round(5*Math.random());
action = setInterval(function(){
$("#fruit1").css('top', $("#fruit1").position().top + step);   
if($("#fruit1").position().top > $("#fruitcontainer").height()){
    if(trialsleft > 1){
        
    $("#fruit1").show();
    choosefruit(); //choose fruits
$("#fruit1").css({'left':Math.round(550*Math.random()), 'top': -50});
    
step = 1 + Math.round(5*Math.random());
trialsleft-- ;
addhearts();            
        
    }
    
else{
    playing = false; //not playing anymore
    $("#startreset").html("Start Game"); //change button to start game
    $("#gameover").show();
    $("#gameover").html('<p>Game Over!</p><p>Your score is '+ score + '</p>');
    $("#trialsleft").hide();
    stopAction();
    
}    
}    
    
}, 10) ;   
}

function choosefruit(){
    $("#fruit1").attr('src', 'images/' + fruits[Math.round(8*Math.random())] +'.png');
   
}
//stop dropping fruits
function stopAction(){
    clearInterval(action);
    $("#fruit1").hide();
}

    
});    