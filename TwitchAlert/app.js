var tickRate = 6000 //On vérifiera l'api toutes les minutes
var notif = false;

    

function checkStream() {
  var xhr = new XMLHttpRequest()
  xhr.open("GET", "https://api.twitch.tv/kraken/streams/luciefer22?client_id=v46h6pyoo8t0dvzk1x6tk669hbuf6m", true)
  
  xhr.onreadystatechange = function () {
    if(xhr.readyState == 4) {
            
      var data = JSON.parse(xhr.responseText);
	// alert(xhr.responseText);
	 // alert(data.stream.game);
	 // alert(data.stream.channel.status);
    
 
        if(data["stream"] == null){
      
        
        
                 $("#info").html("Le stream n'est pas actif app");
      chrome.browserAction.setIcon({path: "./img/logo_ico.png"}); 
            
                 
                 
                
         
      
        
        
              
    }else{
               $("#info").html("Le stream est actif");
          chrome.browserAction.setIcon({path: "./img/logorougeluciefer.png"});
              
        
        
       
            
        
      
    }
       
  
      // On relance la fonction après X secondes
      
    }
  }
  setTimeout(checkStream, tickRate)
  xhr.send()

 
 }
// On lance la fonction dès le démarrage
checkStream() 

  

