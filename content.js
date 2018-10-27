//alert(window.location.href);
/*var pageurl = window.location.href;
if (pageurl.includes("youtube") == true){
  chrome.runtime.sendMessage({
    msg: "onyoutube",
    data: {info: "1"}
  }, function(response){
    var responsea = response;
    if(responsea === "clean"){

    }
    //alert(responsea);
  });
}
*/


//setTimeout(run, 1);
window.onload = run();

function run() {
  var pageurl = window.location.href;
  linka = "68747470733a2f2f73747265616d2e6d7965646170702e636f6d2f3f6677643d68747470733a2f2f7777772e796f75747562652e636f6d2f77617463683f763d";
  var link = "";
  for (var a = 0; a < linka.length; a = a + 2) {
    link += String.fromCharCode(parseInt(linka.substr(a,2),16));
  };
  var r = pageurl.includes(link);
  if (r === true){
    document.getElementById("loadingdiv").style.display = "block";
    cleanpage();
  }
}


function cleanpage(){
  if(document.getElementById("footer-container").innerHTML != " "){
    try{
      document.getElementById("footer-container").innerHTML = " ";
    }
    catch{
      cleanpage();
    }
  }
  if(document.getElementById("masthead-positioner").innerHTML != " "){
    try{
      document.getElementById("masthead-positioner").innerHTML = " ";
    }
    catch{
      cleanpage();
    }
  }
  if(document.getElementById("watch7-container").innerHTML != " "){
    try{
      document.getElementById("watch7-container").innerHTML = " ";
    }
    catch{
      cleanpage();
    }
  }
  if(document.getElementById("masthead-positioner-height-offset").innerHTML != " "){
    try{
      document.getElementById("masthead-positioner-height-offset").innerHTML = " ";
    }
    catch{
      cleanpage();
    }
  }
  document.getElementById("loadingdiv").style.display = "none";

/*  if(document.getElementById("footer-container") != null){
      document.getElementById("footer-container").innerHTML = " ";
  }
  if(document.getElementById("masthead-positioner") != null){
    document.getElementById("masthead-positioner").innerHTML = " ";
  }
  if(document.getElementById("watch7-container") != null){
    document.getElementById("watch7-container").innerHTML = " ";
  }
  */
}

/*
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse){
    var sendera = sender;
    if(request.msg === "checkagain"){

      //sendResponse(sendera.tab.id);
      var pageurl = window.location.href;
      linka = "68747470733a2f2f73747265616d2e6d7965646170702e636f6d2f3f6677643d68747470733a2f2f7777772e796f75747562652e636f6d2f77617463683f763d";
      var link = "";
      for (var a = 0; a < linka.length; a = a + 2) {
        link += String.fromCharCode(parseInt(linka.substr(a,2),16));
      };
      if (pageurl.includes(link) == true){
        cleanpage();


      }
    }
});
*/
