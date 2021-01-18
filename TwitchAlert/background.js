var tickRate = 60000 // On vérifiera l'api toutes les minutes
var notif = false;

    
checkStream() ;

function checkStream() {
 
  var xhr = new XMLHttpRequest()
  xhr.open("GET", "https://api.twitch.tv/kraken/streams/Luciefer22?client_id=v46h6pyoo8t0dvzk1x6tk669hbuf6m", true)
     
  xhr.onreadystatechange = function () {
        
    if(xhr.readyState == 4) {
            
      var data = JSON.parse(xhr.responseText);
          
     if(data["stream"] == null){
             
              chrome.browserAction.setIcon({path:"./img/logo_ico.png"});
       notif=false;
         
 
          }else{
                  if ( notif == false){
             notif= true;
         var options = {
         type :"basic",
         title :"Luciefer22",
         message :   data.stream.channel.status +" \n stream sur  " +  data.stream.game ,
         iconUrl:  "./img/logorougeluciefer.png"
               } ;
         }
         
         chrome.notifications.create( options,callback);
        
       function callback(){
          // alert("11");
       }
                        
     chrome.browserAction.setIcon({path: "./img/loorougeluciefer.png"})
	}    
      
           
	
     
      
    }
       
  
      // On relance la fonction après X secondes
      
    }
  setTimeout(checkStream, tickRate)
  xhr.send()
 }
  

 



  

