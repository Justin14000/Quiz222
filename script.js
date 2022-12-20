$(".basketball-button").click(function() {
 $(".smh").show();
 $(".button").show();
 $(".end").show();
    let basketball = $(".basketball-input").val();
    
    if(basketball === "offense" ) {
        $(".input").text("You picked Offense");
    }
else if (basketball === "Offense"){
    $(".input").text("You Picked Offense");
}
    else if (basketball === "Defense"){
    $(".input").text("You Picked Defense");
    
    }

    else if (basketball === "defense"){
    $(".input").text("You Picked Defense");
    
    }
    else if (basketball === "Neither"){
    $(".input").text("You Picked Neither");
 
        
    }
 
    else if (basketball === "neither"){
    $(".input").text("You Picked Neither");
}
    
    
 else {
        $(".stop").text("You put an incorrect answer");}
    
   
});

$(".button").click(function() {
    $(".logo").hide();
    $(".everything").show();
     $(".smh").hide();
 $(".button").hide();
 $(".end").hide();
   $(".awhile").hide();
 $(".basketball-button").hide(); 
   $(".basketball-input").hide();
     $(".one").show();
     $(".two").show();
     $(".three").show();
     $(".four").show();
    $(".whyy").show();
    $(".clipp").show();
    $(".gsw").show();
    
    let end = $(".end").val(); 
    if(end === "2" ) {
        $(".output").text("You picked 2 pointer");
    }
         else if (end === "3"){
        
    $(".output").text("You Picked 3 pointer");
   
        
    }
 
 else {
        $(".stop").text("You put an incorrect answer");}
    
    
    });

$(".everything").click(function() {
   $(".one").hide();
     $(".two").hide();
     $(".three").hide();
     $(".four").hide();
    $(".clipp").hide();
    $(".gsw").hide();
    $(".input").hide();
    $(".output").hide();
    $(".why").hide();
    $(".everything").hide();
      var justin = $(".whyy").val();
    $(".whyy").append(" You are "+    justin +"!");
$(".whyy").each( function() {
    alert(" You are "+    justin+"!" );
    
    let hoops = $(".whyy").val();
     
     if(hoops === "Kawhi Leonard" ) {
        $(".put").text("You are Kawhi Leonard!");
         $(".goat").show();
    }
    
    else if (hoops === "kawhi leonard"){
    $(".put").text("You are Kawhi Leonard!");
          $(".goat").show();
}
else if (hoops === "Steph Curry"){
    $(".put").text("You are Steph Curry!");
      $(".curry").show();
}
    
    else if (hoops === "steph curry"){
    $(".put").text("You are Steph Curry!");
      $(".curry").show();
    
    
}
    else if (hoops === "Kevin Durant"){
    $(".put").text("You are Kevin Durant!");
      $(".kd").show();
    
    }
 else if (hoops === "kevin durant"){
    $(".put").text("You are Kevin Durant!");
      $(".kd").show();
 }
    else if (hoops === "Avery Bradley"){
    $(".put").text("You are Avery Bradley... you are NOT good at anything!");
    $(".notgood").show();
    
    }
     else if (hoops === "avery bradley"){
    $(".put").text("You are Avery Bradley... you are NOT good at anything!");
    $(".notgood").show();
    
        
    }
 
 else {
        $(".nope").text("You put an incorrect answer");}
    
    
});

    
    
    
    
    
});