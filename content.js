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
  //linka = "68747470733a2f2f73747265616d2e6d7965646170702e636f6d2f3f6677643d68747470733a2f2f7777772e796f75747562652e636f6d2f77617463683f763d";
  var linkb = "68747470733a2f2f7765622e617263686976652e6f72672f736176652f68747470733a2f2f73747265616d2e6d7965646170702e636f6d2f3f6677643d68747470733a2f2f7777772e796f75747562652e636f6d";
  var linkc = "68747470733a2f2f73747265616d2e6d7965646170702e636f6d2f3f6677643d68747470733a2f2f7777772e796f75747562652e636f6d2f7761746368";
  var linkd = "7765622e617263686976652e6f7267";
  /*var linka2 = "";
  for (var a = 0; a < linka.length; a = a + 2) {
    linka2 += String.fromCharCode(parseInt(linka.substr(a,2),16));
  }
  alert(linka2);
  */
  var linkb2 = "";
  var linkc2 = "";
  var linkd2 = "";
  for (var b = 0; b < linkb.length; b = b + 2) {
    linkb2 += String.fromCharCode(parseInt(linkb.substr(b,2),16));
  }
  for (var c = 0; c < linkc.length; c = c + 2) {
    linkc2 += String.fromCharCode(parseInt(linkc.substr(c,2), 16));
  }
  for (var d = 0; d < linkd.length; d = d + 2) {
    linkd2 += String.fromCharCode(parseInt(linkd.substr(d,2), 16));
  }
  //alert(linkb2);
  //var p = pageurl.includes(linka2);
  var q = pageurl.includes(linkb2);
  var r = pageurl.includes(linkc2);
  var s = pageurl.includes(linkd2);
  /*if (p === true){
    document.getElementById("loadingdiv").style.display = "block";
    cleanpage();
  }
  */

  if (q === true){
    document.getElementById("__wb_record_content_loader").innerHTML = '<wb_h1>Loading...</wb_h1>';
    setTimeout(doRedir, 1500);

  }
  if (r === true & s === true){
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
