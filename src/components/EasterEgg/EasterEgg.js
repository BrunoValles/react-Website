var allowedKeys ={
  65: 'a', 	
  66: 'b', 	
  67: 'c', 	
  68: 'd', 	
  69: 'e', 	
  70: 'f', 	
  71: 'g', 	
  72: 'h', 	
  73: 'i', 	
  74: 'j', 	
  75: 'k', 	
  76: 'l', 	
  77: 'm', 	
  78: 'n', 	
  79: 'o', 	
  80: 'p', 	
  81: 'q', 	
  82: 'r', 	
  83: 's', 	
  84: 't', 	
  85: 'u', 	
  86: 'v', 	
  87: 'w', 	
  88: 'x', 	
  89: 'y', 	
  90: 'z',	 
}


var code = ['e','a','s','t','e','r','e','g','g']
var codePosition = 0;


document.addEventListener('keydown', function(e){
    var key = allowedKeys[e.keyCode]
    var requiredKey = code[codePosition]

  if (key == requiredKey){
      codePosition ++;

    if(codePosition == code.length){
        activateEasterEgg();
        codePosition = 0;
    }
  }else{
      codePosition = 0;
  }
});


function activateEasterEgg(){
    document.body.style.backgroundImage ="url('images/')";
    alert("Easter Egg Activated!")
}
//
